import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext'
import { Navigate } from 'react-router-dom';


export const ProtectedRoutes = ({children}) => {
	

	
	const { isAuth } = useContext(AuthContext)
	
	if(isAuth) {
		return children;
		
	}
	
	return <Navigate to="/login" />
	
	
}