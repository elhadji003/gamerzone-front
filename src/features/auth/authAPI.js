import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Récupération du token depuis le localStorage
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

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery,
    endpoints: (builder) => ({
        // ✅ Login
        login: builder.mutation({
            query: (credentials) => ({
                url: "login/",
                method: "POST",
                body: credentials,
            }),
        }),

        // ✅ Récupérer les infos de l'utilisateur (getMe)
        getMe: builder.query({
            query: () => "me/",
        }),

        // ✅ Logout
        logout: builder.mutation({
            query: (refreshToken) => ({
                url: "logout/",
                method: "POST",
                body: { refresh: refreshToken },
            }),
        }),
    }),
});

export const { useLoginMutation, useGetMeQuery, useLogoutMutation } = authApi;
