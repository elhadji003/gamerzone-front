import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Layout = () => {
    const { accessToken, role } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (!accessToken) {
            navigate('/login');
        } else {
            if (role === 'admin') {
                navigate('/dashboard-admin');
            } else {
                navigate('/dashboard-user');
            }
        }
    }, [accessToken, role, navigate]);

    return (
        <div className="min-h-screen flex">
            Navbar
            <main className="flex-1 p-4 bg-black overflow-y-auto h-screen">
                <Outlet />
            </main>
        </div>
    );
};


export default Layout;