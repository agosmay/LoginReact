import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../componentes/Home'
import  Login from '../componentes/Login'
import { PrivateHome } from '../componentes/PrivateHome'
import  ProtectedRoutes from './ProtectedRoutes'

export const AppRoutes = () => {
	
	return (
		<BrowserRouter>
			<Routes>
				<Route path="*" element=
					{<ProtectedRoutes>
						<Route 
							path="/private-home"
							element={<PrivateHome />}
						/>
						<Route 
							path="/otra"
							element={<div>Otra Ruta</div>}
						/>
					</ProtectedRoutes>
					}
				/>
				<Route 
				path="/"
				element={<Home />}
				/>
				<Route 
				path="/login"
				element={<Login />}
				/>	
			</Routes>
		</BrowserRouter>
	
	);
	
}

