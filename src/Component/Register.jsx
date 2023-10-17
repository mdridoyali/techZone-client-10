import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import {
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase.config";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const googleProvider = new GoogleAuthProvider();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(name, email, photo, password);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .then((result) => console.log(result))
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.log(error);
        return alert("Already have an Account");
      });
  };

 const googleLogin = () => {
    signInWithPopup(auth, googleProvider)
    .then((result) => {
      console.log(result.user);
      return alert("Google Login Success");
    })
    .catch((error) => {
      console.log(error);
    });
 }

  return (
    <div className="mx-5">
      <div className="  rounded-xl  bg-gray-100 my-10 md:p-5 md:w-3/5 lg:w-2/2 mx-auto ">
        <h2 className="text-3xl font-bold text-slate-600 mt-5 text-center ">
          Register Form
        </h2>
        <div className=" my-5 mx-auto ">
          <div className="hero-content flex-col lg:flex-row-reverse mx-auto">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-200">
              <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="Photo URL"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <span
                    onClick={() => setShow(!show)}
                    className="absolute right-4 bottom-3"
                  >
                    {show ? <p>Hide</p> : <p>Show</p>}
                  </span>
                  <input
                    name="password"
                    type={show ? "text" : "password"}
                    placeholder="Password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </div>
                <div className="">
                  <div className="space-y-3 mt-2 gap-3 justify-between">
                    <button
                      className="btn w-full btn-sm md:px-8 px-4 "
                        onClick={googleLogin}
                    >
                      {"Continue with Google"}
                      <FaGoogle className="text-xl"></FaGoogle>{" "}
                    </button> <br/>
                    <button
                      className="btn w-full  btn-sm md:px-8 px-4 "
                      //   onClick={githubLogin}
                    >
                      {"Continue with Github"}
                      <FaGithub className="text-xl"></FaGithub>{" "}
                    </button>
                  </div>
                </div>
                <p className="text-center">
                  Already have an account?{" "}
                  <Link
                    to={"/login"}
                    className="text-blue-600 underline font-semibold"
                  >
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
