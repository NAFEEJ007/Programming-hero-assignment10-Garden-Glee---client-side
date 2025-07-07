import React, { use } from "react";
import gardenImg from "../../assets/signup-garden.jpg"; // Use the same background as login
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";

const Signup = () => {
  const { createUser, setUser, updateUser,googleSignIn } = use(AuthContext);
  const navigate = useNavigate();
  // console.log(createUser);

  // googleSignIn
const handleGoogleLogIn = () => {
  googleSignIn()
    .then((result) => {
      console.log("User signed in with Google:", result.user);
      
      setUser(result.user); // Optional, since onAuthStateChanged should do this too
      navigate('/'); // redirect to home page
    })
    .catch((error) => {
      console.error("Google Sign-In Error:", error);
    });
};

  const handleSignUp = (e) => {
    e.preventDefault();
    // const form = e.target;
    // const name = form.name.value;
    // const email = form.email.value;
    // const password = form.password.value;
    // const url = form.url.value;
    // console.log({ name, email, password, url });
    // createUser(email, password)
    //   .then((userCredential) => {
    //     // Signed up
    //     const user = userCredential.user;
    //     console.log(user)
    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     alert(errorCode,errorMessage);
    //     // ..
    //   });

    const form = e.target;
    const formData = new FormData(form);
    const url = formData.get("url");
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(email, password);
    // createuser in the firebase
    createUser(email, password).then((result) => {
      const user = result.user;
      // console.log(result.user);
      updateUser({ displayName: name, photoURL: url })
        .then(() => {
          setUser({ ...user, displayName: name, photoURL: url });
        })
        .catch((error) => {
          console.log(error);
          setUser(user);
        });

      navigate("/");
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
        <h2 className="text-3xl font-bold text-center text-green-900 mb-6 drop-shadow">
          🌼 Create Your Garden Glee Account
        </h2>

        <form onSubmit={handleSignUp} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1 ">Name</label>
            <input
              name="Name"
              required
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg bg-white/70 text-green-900 placeholder:text-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 shadow"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/70 text-green-900 placeholder:text-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 shadow"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
              Photo URL
            </label>
            <input
              name="url"
              type="url"
              placeholder="https://your-photo.jpg"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/70 text-green-900 placeholder:text-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 shadow"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Password</label>
            <input
              name="password"
              type="password"
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$"
              placeholder="********"
              required
              title="Password must be at least 8 characters, with at least 1 uppercase, 1 lowercase, and 1 special character."
              className="w-full px-4 py-2 rounded-lg bg-white/70 text-green-900 placeholder:text-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 shadow"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-green-600 hover:bg-green-700 transition text-white font-semibold rounded-lg shadow-md"
          >
            🌱 Register
          </button>
        </form>

        <div className="mt-5">
          <button onClick={handleGoogleLogIn} className="cursor-pointer w-full py-2 bg-white/80 text-green-900 font-medium rounded-lg hover:bg-white transition flex items-center justify-center gap-2 shadow">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Sign Up with Google
          </button>
        </div>

        <div className="text-center text-green-100 text-sm mt-6">
          Already have an account?
          <Link
            to="/login"
            className="ml-1 underline hover:text-lime-200 transition"
          >
            Click here to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
