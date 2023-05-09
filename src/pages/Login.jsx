import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { useAuth } from '../context/AuthProvider';

const Login = () => {
    const {signIn, signInWithGoogle} = useAuth()

    const hendleForm = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value;
        const password = form.password.value


        if(!email || !password) {
            return
        } 
        
        if(password.length < 6) {
            return
        }

        signIn(email, password) 
        .then (() => {
            form.reset()
        }) 
        .catch(error => {
            
        })
    }
    return (
        <section className='border rounded-xl p-[25px] max-w-[500px] mx-auto mt-10 shadow-3xl'>
        <h2 className='text-center text-3xl'>Login</h2>
        <form onSubmit={hendleForm}>
            <div className='flex flex-col my-4'>
                <label htmlFor="email" className='text-[17px]'>Email</label>
                <input type="email" name="email" id="email" className='border rounded p-2 text-base' autoComplete='off' placeholder='email' />
            </div>
            <div className='flex flex-col my-4'>
                <label htmlFor="password" className='text-[17px]'>Password</label>
                <input type="password" name="password" id="password" className='border rounded p-2 text-base' autoComplete='off' placeholder='password' />
            </div> 
            <button type='submit' className='bg-[#ff99004c] w-full p-4 text-[21px] rounded mt-[10px]'>Login</button>         
            <p className='mt-[8px] text-center'>New to Ema-john? <Link to="/Sign-up" className='text-[#FF9900]'>Create New Account</Link></p>     
            <div className='flex items-center justify-between mt-[25px] '>
                <hr className='w-[45%] bg-[#95A0A7]'/>
                <p className='text-[#95A0A7]'>Or</p>
                <hr className='w-[45%] bg-[#95A0A7]'/>
            </div>   
            <button onClick={signInWithGoogle} className='p-[10px] border rounded w-full flex justify-center items-center gap-[6px] mt-[33px]'><FcGoogle className='text-[32px]'/><span>Continue with Google</span></button>
        </form>
    </section>
    );
};

export default Login;