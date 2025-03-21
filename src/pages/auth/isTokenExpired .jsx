const isTokenExpired = (token) => {
    const decoded = JSON.parse(atob(token.split('.')[1])); // Décode le token JWT
    const expirationTime = decoded.exp * 1000; // Convertir en millisecondes
    return expirationTime < Date.now();
};

export default isTokenExpired;
