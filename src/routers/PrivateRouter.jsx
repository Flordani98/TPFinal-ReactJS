import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const PrivateRouter = ({children}) => {

    const { isLoggedIn, loading } = useAuthContext();

    if(loading) return <div>Loading...</div>

    if(!isLoggedIn)return <Navigate to="/" />;

    return children;
    
};

export default PrivateRouter;