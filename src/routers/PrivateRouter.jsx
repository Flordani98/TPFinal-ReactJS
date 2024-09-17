import { Navigate } from 'react-router-dom';
import {useAuth} from '../hooks';

const PrivateRouter = ({children}) => {

    const { isLoggedIn, loading } = useAuth();

    if(loading) return <div>Loading...</div>

    if(!isLoggedIn)return <Navigate to="/" />;

    return children;
    
};

export default PrivateRouter;