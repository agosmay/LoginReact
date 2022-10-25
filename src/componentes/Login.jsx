import React , {useState , useContext } from 'react';
import { useForm } from './useForm' 






const Login = ()=> {

	const  {  handleChange, handleSubmit , email, password } = useForm();
	
	
	return (
	
		<>
			<h1>Login</h1>
			
			<form onSubmit={handleSubmit}>
				<input type="email" name="email" onChange={handleChange} value={email} required/>
				<input type="password" name="password" onChange={handleChange}  value={password}  required/>
				<button type="submit" className="btn btn-primary">Iniciar Sesion</button>
			</form>
			
			
		</>
	
	);
	
	
}

export default Login;