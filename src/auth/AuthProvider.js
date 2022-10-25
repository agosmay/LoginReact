import React , { useState } from 'react';
import { AuthContext } from './AuthContext'


export const AuthProvider = ({ children }) => {
	const [isAuth, setIsAuth] = useState(false)
	const [input, setInput] = useState({})
	
	
	
	return (
		<>
			<AuthContext.Provider value={{
				isAuth,
				setIsAuth,
				input,
				setInput
			}}>
			{children}
			</AuthContext.Provider>
		</>
	
	);
	
	
}