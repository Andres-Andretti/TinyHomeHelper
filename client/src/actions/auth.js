import { AUTH } from "../constants/userConstants";
import * as api from "../api/api.js";

export const login = (formData, router) => async (dispatch) => {
	try {
		const { data } = await api.login(formData);

		dispatch({ type: AUTH, data });

		router.push("/");
	} catch (error) {
		console.log(error);
	}
};

export const register = (formData, router) => async (dispatch) => {
	try {
		const { data } = await api.register(formData);

		dispatch({ type: AUTH, data });

		router.push("/");
	} catch (error) {
		console.log(error);
	}
};

export const guestRegister = (formData, router) => async (dispatch) => {
	try {
		const { data } = await api.register(formData);

		dispatch({ type: AUTH, data });

		router.push("/");
	} catch (error) {
		console.log(error);
	}
};


