import React from "react";
import style from '../Styles/Login.module.scss'

const Login = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <h1>Sign&nbsp;In</h1>
        <form className={style.form}>
          <input placeholder="Username"/>
          <input placeholder="Password" />
        </form>
        <button>LOGIN</button>
        <p>Do not remember your password</p>
        <p>Create new account</p>
      </div>
    </div>
  );
};

export default Login;
