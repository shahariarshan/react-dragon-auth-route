import { useContext } from "react";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { AuthContext } from "../Providers/AuthProvider";


const Register = () => {

    const {createUser} =useContext(AuthContext)

    const handelRegister = e =>{
       

        e.preventDefault()
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const url = form.get('url')
        const email=form.get('email')
        const password =form.get('password')
        console.log(form);
        console.log(name,url,email,password)


        // create user 
        createUser(email,password)
        .then(result =>{
            console.log(result)
        })
        .catch(error =>{
            console.log(error)
        })

    }

    return (


        <div className=" text-center ">
        <Navbar></Navbar>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto pt-10">
            <h2 className="text-2xl">Please Register here!!</h2>
  <form onSubmit={handelRegister} className="card-body mx-auto">
    <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>

      <input
      type="text" 
      name="name"
      placeholder="Your Name" 
      className="input input-bordered" 
      required />

    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Photo URL</span>
      </label>

      <input
       type="photo" 
       name="url"

      placeholder="url" 
      className="input input-bordered" 
      />

    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>

      <input type="email" 
      name="email"
      placeholder=" enter your email" 
      className="input input-bordered" 
      required />

    </div>

    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password"
      name="password"
       placeholder="enter your password"
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
  </div>
  </div>
    );
};

export default Register;