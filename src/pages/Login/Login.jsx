import React, { use } from "react";
import gardenImg from "../../assets/login-garden.jpg"; // Your background image
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";

const Login = () => {
  const { signIn, googleSignIn,setUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
    signIn(email, password)
      .then((result) => {
        // Signed in
        const user = result.user;
        console.log(user);
        navigate("/");
        
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage)
      });
  };

const handleGoogleLogIn = () => {
  googleSignIn()
    .then((result) => {
      console.log("User signed in with Google:", result.user);
      setUser(result.user); 
      navigate('/'); // redirect to home page
    })
    .catch((error) => {
      console.error("Google Sign-In Error:", error);
    });
};
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${gardenImg})`,
      }}
    >
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl p-10 max-w-sm w-full text-white">
        <h2 className="text-3xl font-bold text-center text-lime-100 mb-6 drop-shadow">
          🌿 Welcome Back to Garden Glee
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg bg-white/70 text-green-900 placeholder:text-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 shadow"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold mb-1">Password</label>
            <input
              name="password"
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg bg-white/70 text-green-900 placeholder:text-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 shadow"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <a
              href="#"
              className="text-sm text-green-100 hover:text-lime-200 transition underline"
            >
              Forgot password?
            </a>
          </div>

          {/* Google Login Button */}
          <button onClick={handleGoogleLogIn}
            
            type="button"
            className="cursor-pointer w-full py-2 bg-white/90 hover:bg-white text-green-800 hover:text-green-900 font-semibold rounded-lg shadow-md flex items-center justify-center gap-2 transition duration-200"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>

          {/* Email Login Button */}
          <button
            type="submit"
            className="w-full py-2 bg-green-600 hover:bg-green-700 transition text-white font-semibold rounded-lg shadow-md"
          >
            🌸 Login
          </button>

          {/* Register Redirect */}
          <div className="text-center text-green-100 text-sm mt-4">
            Don’t have an account?
            <Link
              to="/signup"
              className="ml-1 underline hover:text-lime-200 transition"
            >
              Register here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
