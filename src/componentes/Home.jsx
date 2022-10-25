import React , { useContext } from 'react';
import { Nav } from './Nav'
import { AuthContext } from '../auth/AuthContext'

export const Home = ()=> {
	
	const { isAuth , input } = useContext(AuthContext)
	
	
	return (
		<>
			<Nav />
	
			<h1>{isAuth ? "Autenticado con exito" : "Por favor inicie sesion"}</h1>
		
			
		</>
		
	
	
	);
	
	
}