import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logout, setCredentials } from "./authSlice"; // Assure-toi que le chemin est correct
import { jwtDecode } from "jwt-decode";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://127.0.0.1:8000/api/users/",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

// Middleware pour gérer le rafraîchissement du token
const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    console.log("Token expiré, tentative de rafraîchissement...");

    const refreshToken = localStorage.getItem("refresh_token");
    if (!refreshToken) {
      api.dispatch(logout());
      return result;
    }

    // Tente de rafraîchir le token
    const refreshResult = await baseQuery(
      {
        url: "token/refresh/",
        method: "POST",
        body: { refresh: refreshToken },
      },
      api,
      extraOptions
    );

    if (refreshResult.data) {
      const newAccessToken = refreshResult.data.access;
      const decodedUser = jwtDecode(newAccessToken);

      // Met à jour le token dans le state Redux
      api.dispatch(
        setCredentials({
          user: decodedUser,
          access: newAccessToken,
        })
      );

      // Réessaye la requête initiale avec le nouveau token
      result = await baseQuery(args, api, extraOptions);
    } else {
      console.log("Échec du rafraîchissement du token, déconnexion...");
      api.dispatch(logout());
    }
  }

  return result;
};

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "login/",
        method: "POST",
        body: credentials,
      }),
    }),

    register: builder.mutation({
      query: (userData) => ({
        url: "register/",
        method: "POST",
        body: userData,
      }),
    }),

    getMe: builder.query({
      query: () => "me/",
    }),

    updateProfileUser: builder.mutation({
      query: ({ userId, formData }) => ({
        url: `updateProfileUser/${userId}`,
        method: "PUT",
        body: formData,
      }),
    }),

    logout: builder.mutation({
      query: (refreshToken) => ({
        url: "logout/",
        method: "POST",
        body: { refresh: refreshToken },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetMeQuery,
  useUpdateProfileUserMutation,
  useLogoutMutation,
} = authApi;
