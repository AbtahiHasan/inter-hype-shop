import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { useAuth } from '../context/AuthProvider';
import { sendEmailVerification, updateProfile } from 'firebase/auth';

const Signup = () => {
    const {createUser, user, signInWithGoogle} = useAuth()
    const hendleForm = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value

        if(!name || !email || !password || !confirmPassword) {
            return
        } 
        
        if(password.length < 6) {
            return
        }
        if(!password === confirmPassword) {
            return
        }

        createUser(email, password) 
        .then ((result) => {
            updateProfile(result.user, {
                displayName: name
            })
            sendEmailVerificationLink(result.user)
           form.reset()
        }) 
        .catch(error => {
            
        })
    }

    const sendEmailVerificationLink = (user) => {
        sendEmailVerification(user)
        .then ((result) => {
            console.log(result.user)
        }) 
        .catch(error => {
            console.log(error)
        })
    }


    return (
        <section className='border rounded-xl p-[17px] max-w-[500px] mx-auto mt-1 shadow-3xl'>
            <h2 className='text-center text-2xl'>Sign Up</h2>
            <form onSubmit={hendleForm}>
                <div className='flex flex-col my-3'>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" className='border rounded p-2 text-base' autoComplete='off' placeholder='Name' />
                </div>
                <div className='flex flex-col my-3'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" className='border rounded p-2 text-base' autoComplete='off' placeholder='email' />
                </div>
                <div className='flex flex-col my-3'>
                    <label htmlFor="password" >Password</label>
                    <input type="password" name="password" id="password" className='border rounded p-2 text-base' autoComplete='off' placeholder='password' />
                </div> 
                <div className='flex flex-col my-3'>
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="password" name="confirmPassword" id="confirm-password" className='border rounded p-2 text-base' autoComplete='off' placeholder='Confirm Password' />
                </div>
                <button type='submit' className='bg-[#ff99004c] w-full p-2 text-[19px] rounded mt-[10px]'>Sign Up</button>         
                <p className='mt-[8px] text-center'>Already have an account? <Link to="/login" className='text-[#FF9900]'>Login</Link></p>     
                <div className='flex items-center justify-between mt-[15px] '>
                    <hr className='w-[45%] bg-[#95A0A7]'/>
                    <p className='text-[#95A0A7]'>Or</p>
                    <hr className='w-[45%] bg-[#95A0A7]'/>
                </div>   
                <button onClick={signInWithGoogle} className='p-[10px] border rounded w-full flex justify-center items-center gap-[6px] mt-[20px]'><FcGoogle className='text-[32px]'/><span>Continue with Google</span></button>
            </form>
        </section>
    );
};

export default Signup;