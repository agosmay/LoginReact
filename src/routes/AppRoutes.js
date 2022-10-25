import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../componentes/Home'
import  Login from '../componentes/Login'
import { PrivateHome } from '../componentes/PrivateHome'

export const AppRoutes = () => {
	
	return (
		<BrowserRouter>
			<Routes>
				<Route 
				path="/"
				element={<Home />}
				/>
				<Route 
				path="/login"
				element={<Login />}
				/>
				<Route 
				path="/private-home"
				element={<PrivateHome />}
				/>
			</Routes>
		</BrowserRouter>
	
	);
	
}

