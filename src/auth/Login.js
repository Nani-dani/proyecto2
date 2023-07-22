import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react"
import { useDispatch } from "react-redux";
import { login } from '../actions/userActions';

export const Login = () => {
    const { loginWithRedirect, isAuthenticated, user, isLoading } = useAuth0();
    const dispatch = useDispatch();
    const handleLogin = async () => {

        try {
            await loginWithRedirect();
        } catch (error) {
            console.log(error);
        }

    };
    useEffect(() => {
        if (isAuthenticated && user) {
            dispatch(login(user))
        };
    }
        , [isAuthenticated, user, dispatch]);

    if (isLoading) {
        return <div>cargando...</div>
    }



    return (
        <div class="text-center">
            <h1>MI CELEBRIDADES FAVORITAS</h1>
            <img src="https://images-eu.ssl-images-amazon.com/images/I/81nl+BVgOvL._AC_UL600_SR600,600_.jpg" />
            <button type="button" class="btn btn-primary" onClick={handleLogin}>Acceder</button>
        </div>
    )
};

export default login;


