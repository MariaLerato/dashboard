import React from 'react';
import logo from './images/image.png'
import './StyleSheet.css'
import { useNavigate } from 'react-router-dom';

export const SignUp = () => {
    const navigate = useNavigate()
    const onSubmit = (e)=>{
        e.preventDefault()
        navigate('/signIn')
    }
  return (
    <div className='container'>
           <div className='header' >
                <div  className='semiheader' style={{paddingRight:'2%',display:'flex'}}>
                <h1 className='head'>Edu</h1>
               <h1 className='sharp'>Sharp</h1>
                </div>
               <h1 className='admin'>Admin System</h1>
           </div>
         <div className='content-container'>
                 <img src={logo} alt='image' className='image'/>
             <div className='content'>
               
                 <form className='Inputs'>
                     <h2 >Sign Up</h2>
                     <input type={'text'} placeholder='First Name' />
                     <input type={'text'} placeholder='Last Name' />
                     <input type={'text'} placeholder='Email Address' />
                     <input type={'text'} placeholder='New Password' />
                     <input type={'text'} placeholder='Confirm Password' />
                    
                 </form>
                 <button type={'submit'} className='button' onClick={onSubmit}> Sign Up </button>
             </div>
         </div>
         <footer className='footer'>
             <h2></h2>
         </footer>
    </div>
  );
};