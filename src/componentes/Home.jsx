import React , { useContext } from 'react';
import { Nav } from './Nav'
import { AuthContext } from '../auth/AuthContext'

export const Home = ()=> {
	
	const { isAuth , input : user } = useContext(AuthContext)
	
	
	return (
		<>
			<Nav />
	
			<h1>{isAuth ? "Autenticado con exito" : "Por favor inicie sesion"}</h1>
			<h3>Bienvenido {isAuth ? user.email : "Invitado"}</h3>
		
			
		</>
		
	
	
	);
	
	
}