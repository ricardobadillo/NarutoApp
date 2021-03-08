import React from 'react';

export const LoginScreen = ({history}) => {

    const handleLogin = () => {
        history.push('/');
    }

    return (
        <div className="container mt-5">
            <h1>Login en proceso</h1>
            <hr/>

            <button
                className="btn btn-dark"
                onClick={handleLogin}
            >
                Return
            </button>
        </div>
    )
}