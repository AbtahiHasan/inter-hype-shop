import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

const PrivateRoutes = ({children}) => {
    const {loading, user} = useAuth()
    const location = useLocation()
    if(loading) {
        return
    }
    if(user) {
        return children
    }
    return <Navigate to="/login" state={{form: location}} replace/>;
};

export default PrivateRoutes;