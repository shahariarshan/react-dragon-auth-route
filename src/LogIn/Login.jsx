import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";



const Login = () => {

const signIn = useContext(AuthContext)
const location =useLocation()
const naviGate = useNavigate();

    const handelLogin = e =>{
        e.preventDefault()
        console.log(e.currentTarget)
        const form =new FormData(e.currentTarget)

        const email =form.get('email')
        const password =form.get('password')
      
        console.log(form)
        console.log(email,password)

        signIn()
        .then(result =>{
          console.log(result.user)


        // navigate 

        naviGate (location ?.state? location.state : '/')
        })
        .catch(error=>{
          console.error(error)
        })
        
    }
    return (
        <div className=" text-center ">
            <Navbar></Navbar>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto pt-10">
                <h2 className="text-2xl">Please Log In!!</h2>
      <form onSubmit={handelLogin} className="card-body mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>

          <input type="email" 
          name="email"
          placeholder="email" 
          className="input input-bordered" 
          required />

        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password"
          name="password"
           placeholder="password"
            className="input input-bordered"
             required />

          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="text-sm pb-10">Do not have an account? 
        <Link to='/register' className="text-blue-700 text-lg ">
        Register
        </Link>
      </p>
    </div>
  </div>
       
    );
};

export default Login;