import { useSelector } from "react-redux";

const DashboardAdmin = () => {
    const user = useSelector((state) => state.auth.user);
    console.log("User dans Dashboard:", user);

    return (
        <div>
            <h1>Bienvenue, {user?.username || "Utilisateur"} !</h1>
        </div>
    );
};

export default DashboardAdmin;
