import { useContext, useState } from "react";
// import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
  
const Login = () => {
  const [show, setShow] = useState(false);
const { logInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    logInUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location?.state : "/");
        return Swal.fire({
          icon: "success",
          title: " Successfully Login",
          text: "Thank you!",
        });
      })
      .catch((error) => {
        console.log(error.user);
        return Swal.fire({
          icon: "error",
          title: "Invalid Email or password",
          text: "Give correct information!",
        });
      });
  };

  return (
    <div className="mx-5">
      <div className="my-10   bg-gray-100 md:p-10 md:w-3/5 lg:w-1/2 mx-auto rounded-xl ">
        <h2 className="text-3xl font-bold text-slate-600 mt-5 mb-3 text-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-700">
             Login Now
          </span>
        </h2>
        <div className=" ">
          <div className="hero-content flex-col lg:flex-row-reverse mx-auto ">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
              <form onSubmit={handleLogin} className="card-body text-black">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email <span className="text-red-500 text-xl" >*</span></span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text">Password <span className="text-red-500 text-xl" >*</span></span>
                  </label>
                  <span
                    onClick={() => setShow(!show)}
                    className=" absolute cursor-pointer right-4 bottom-4 "
                  >
                    {show ? <p>Hide</p> : <p>Show</p>}
                  </span>
                  <input
                    name="password"
                    type= {show ? "text" : "password"}
                    placeholder="Password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <label className="label">
                </label>
                <div className="form-control mt-3">
                  <button className="btn btn-primary">Login</button>
                </div>
                <p>
                  New here? please{" "}
                  <Link
                    to={"/register"}
                    className="text-blue-600 underline font-semibold"
                  >
                    Register
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

export default Login;
