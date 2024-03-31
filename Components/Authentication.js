
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { setPassword,setUsername,setLogOut } from '../Utils/authSlice';
import authImg from '../images/Loginimg-1.jpeg'

const Authentication = () => {
const [userNameT, setUsernameT] = useState("");
const [userPassword, setuserPassword] = useState("");

const dispatch = useDispatch();

const handleLogin = () => {
    if(userNameT && userPassword){
        dispatch(setUsername(userNameT));
        dispatch(setPassword(userPassword))
    }
}

const handleLogOut = () => {
    dispatch(setLogOut());
}

const userName = useSelector((state) => state.auth.username);
const userPass = useSelector((state) => state.auth.password);

return (
    <div className='authentication-main'>
        <img src={authImg} className='login-img'/>
         {!userName && (
                <div className='user-log-info'>
                    <input
                        type='text'
                        value={userNameT}
                        onChange={(e) => { setUsernameT(e.target.value) }}
                        placeholder='User Name'
                        className='user-log-info-field-1'

                    />
                    <input
                        type='password'
                        value={userPassword}
                        onChange={(e) => { setuserPassword(e.target.value) }}
                        onKeyDown={(e) => { if (e.key === 'Enter') handleLogin() }}
                        placeholder='Password'
                        className='user-log-info-field'
                    />
                    <button onClick={handleLogin} className='login-btn1'>Login</button>
                </div>
            )}
            {userName && (
                <div className='user-3'>
                    <span className='hii-msg'>Hey,</span>
                    <h2>{userName}</h2>
                    <span>Welcome to <span className='website-name'>Deliver</span> created by Rahul , hope you enjoy your experience here.</span>
                    <button onClick={handleLogOut}  className='login-btn1'>LogOut</button>
                </div>
            )
            }

    </div>
);
}

export default Authentication;
