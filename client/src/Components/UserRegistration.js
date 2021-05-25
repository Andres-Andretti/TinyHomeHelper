import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { guestRegister, login, register } from "../actions/auth";
import {
	Avatar,
	Button,
	Paper,
	Grid,
	Typography,
	Container,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
// import { GoogleLogin } from "react-google-login";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import Icon from "../Components/Auth/icon";
import Input from "./Auth/Input";
// import Feed from "../Components/Feed";
import "./CSS/UserRegistration.css"


const initialState = {
	username: "",
	email: "",
	password: "",
};

function RegisterTo() {
	const [form, setForm] = useState(initialState);
	const [isRegister, setIsRegister] = useState(false);
	const dispatch = useDispatch();
	const history = useHistory();
	const guestForm = {
		username:"Guest",
		email:"guest@gmail.com",
		password:"123"
	}

	const [showPassword, setShowPassword] = useState(false);
	const handleShowPassword = () => setShowPassword(!showPassword);

	const switchMode = () => {
		setForm(initialState);
		setIsRegister((prevIsRegister) => !prevIsRegister);
		setShowPassword(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (isRegister) {
			dispatch(register(form, history));
		} else {
			dispatch(login(form, history));
		}
	};

	const handleGuestSubmit = (e) => {
		e.preventDefault()
		if (isRegister){
			dispatch(guestRegister(guestForm, history))
		} else {
			dispatch(login(guestForm, history))
		}
	}
	// const googleSuccess = async (res) => {
	// 	const result = res?.profileObj;
	// 	const token = res?.tokenId;

	// 	try {
	// 		dispatch({ type: AUTH, data: { result, token } });

	// 		history.push("/");
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	// const googleError = () =>
	// 	alert("Google Sign In was unsuccessful. Try again later");

	const handleChange = (e) =>
		setForm({ ...form, [e.target.name]: e.target.value });

	return (
		<div className='userRegistration'>
			<Container component='main' maxWidth='xs' >
				<Paper elevation={3}>
					<Avatar >
						<LockOutlinedIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>
						{isRegister ? "Register" : "Login"}
					</Typography>
					<form  onSubmit={handleSubmit}>
						<Grid container spacing={2}>
							{isRegister && (
								<>
									{/* <Input
										name='firstName'
										label='First Name'
										handleChange={handleChange}
										autoFocus
										half
									/> */}
									<Input
										name='username'
										label='Username'
										handleChange={handleChange}
										half
									/>
								</>
							)}
							<Input
								name='email'
								label='Email Address'
								handleChange={handleChange}
								type='email'
							/>
							<Input
								name='password'
								label='Password'
								handleChange={handleChange}
								type={showPassword ? "text" : "password"}
								handleShowPassword={handleShowPassword}
							/>
							
						</Grid>
						<Button
							type='submit'
							fullWidth
							variant='contained'
							color='primary'
						>
							{isRegister ? "Register" : "Login"}
						</Button>
						
						{/* <GoogleLogin
							clientId='564033717568-e5p23rhvcs4i6kffgsbci1d64r8hp6fn.apps.googleusercontent.com'
							render={(renderProps) => (
								<Button
									className={googleButton}
									color='primary'
									fullWidth
									onClick={renderProps.onClick}
									disabled={renderProps.disabled}
									startIcon={<Icon />}
									variant='contained'
								>
									Google Sign In
								</Button>
							)}
							onSuccess={googleSuccess}
							onFailure={googleError}
							cookiePolicy='single_host_origin'
						/> */}
						<Grid container justify='flex-end'>
							<Grid item>
								<Button onClick={switchMode}>
									{isRegister
										? "Already have an account? Log in"
										: "Don't have an account? Register"}
								</Button>
							</Grid>
						</Grid>
					</form>
				<form onSubmit={handleGuestSubmit}>
								<Button
									type='submit'
									fullWidth
									variant='contained'
									color='primary'
								>
									 Login as Guest
								</Button>
				</form>
				</Paper>
			</Container>
		</div>
	);
}

export default RegisterTo;
