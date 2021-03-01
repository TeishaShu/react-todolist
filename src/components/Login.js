import React, { useState } from 'react';
import './Login.css';
// import React from 'react';
// 流程：驗證輸入位置不為空，丟到api驗證通過到裡面的頁面。

function Login() {
    // const {username, password, handleClick, handleLoginName, handleLoginPassword} = props;
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const handleLoginName = (e) => {
      const { value } = e.target;
      setUsername(value)
    }
    const handleLoginPassword = (e) => {
      const { value } = e.target;
      setPassword(value)
    };
    const handleClick = (e) => {
      e.preventDefault();
      if(username !=='' || password !== ''){
        //如何跳頁???
        console.log('跳頁')
      }
    }
    return (
        <form className="login-form form">
            <input type="text" placeholder="請輸入帳號" value={username} onChange={handleLoginName} />
            <input type="password" placeholder="請輸入密碼" value={password} onChange={handleLoginPassword} />
            <button type="submit" onClick={handleClick}>login</button>
        </form>
    )
}

export default Login;