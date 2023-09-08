import React, { useState } from 'react' 
import logo from '../images/title_white.png' 
import user_img from '../images/user_img.png'
import lock_img from '../images/lock_img.png' 
import { Link } from 'react-router-dom';


export const Login = () => { 
const [email, setEmail] = useState(''); 
const [mailpassword, setMailPassword] = useState(''); 

const handleLogin= (e) => {
    const valuepair = {email , mailpassword};
    e.preventDefault(); 

    fetch('http://localhost:8000/login', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(valuepair)
    }).then(() => {
      console.log("New mail and password added");
      setEmail("");
      setMailPassword("");
    }) 
}


  return (
    <>
      <div className="w-full h-screen bg-[url('images/login_bg_2.png')] bg-cover">
        <div className='w-full h-16 bg-[#1f1f1f]' >
          <img src={logo} alt='StockAtlas Logo' className='mx-auto pt-5 h-11' />
        </div>

        <div className='flex relative justify-center '>
          <div className="flex justify-center absolute">
            <div className="px-12 py-10 mt-36 max-w-md bg-[#ffffff] shadow-lg rounded-md">
              <h1 className="font-bold text-2xl mb-2 text-[#083453] font-merriweather">Login to your Account</h1>
          
              <form className='w-60 m-0' onSubmit={handleLogin}>
                <label className='font-normal text-base mt-10 mb-2 w-52 flex font-merriweather'>Email</label>
                <div className='flex flex-row items-center divide-x border'>
                  <img src={user_img} alt="User" className='w-4 h-4 mx-1'></img>
                  <input type="email" required="required" value={email} onChange={(e) => setEmail(e.target.value)} placeholder=' stockatlas@gmail.com' className='text-sm w-56 h-9 px-1 font-merriweather'/>
                </div>              
                <label className='font-normal text-base mt-4 mb-2 w-52 flex font-merriweather '>Password</label>
                <div className='flex flex-row items-center divide-x border'>
                  <img src={lock_img} alt="Lock" className='w-4 h-4 mx-1'></img>
                  <input type="password" required="required" value={mailpassword} onChange={(e) => setMailPassword(e.target.value)} placeholder=' password' className='text-sm w-56 h-9 px-1 font-merriweather'/>
                </div>
                <Link to='/home'><button className='flex m-auto px-8 py-1 mt-10 bg-[#083453] rounded-full text-[#ffffff] font-merriweather'>Login</button></Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
