import React from 'react'
import { Link } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { GoogleAuthProvider } from "firebase/auth";
import { app } from '../FirebaseConfig';

export default function Register() {

  const registerUser = (event) => {
    event.preventDefault();
    // console.log(event);
    const name = event.target.name.value
    const email = event.target.email.value
    const password = event.target.password.value

    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        console.log("userregister");
        toast.success("User creatted successfully")
        // ...
      })
      .catch((error) => {
        console.error("❌ Registration failed:");
        console.error("Error Code:", error.code);
        console.error("Error Message:", error.message);
        toast.error("User not creatted ")
      });



    // console.log(event.target.name.value);
    // console.log(event.target.email.value);
    // console.log(event.target.password.value);
  }


  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();


    const auth = getAuth(app);
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        setUser(user.accessToken)
        navigate("/")
        toast.success("Successfully Login")



      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });

  }
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Register</title>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    .fade-in {\n      animation: fadeIn 1s ease-out;\n    }\n    @keyframes fadeIn {\n      from { opacity: 0; transform: translateY(30px); }\n      to { opacity: 1; transform: translateY(0); }\n    }\n    canvas#fireworks {\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100vw;\n      height: 100vh;\n      pointer-events: none;\n      z-index: 50;\n    }\n  "
        }}
      />
      <canvas id="fireworks" />
      <main className="flex items-center justify-center min-h-screen w-full  z-10">
        <div className="max-w-md w-full bg-red-200 rounded-3xl shadow-2xl p-10 fade-in space-y-6">
          <h1 className="text-4xl font-bold text-center text-pink-700">Register</h1>
          <form onSubmit={registerUser} className="space-y-5">
            <input
              type="text"
              name='name'
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-lg border focus:ring-4 focus:ring-pink-300 transition duration-300"
              required=""
            />
            <input
              name='email'
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg border focus:ring-4 focus:ring-pink-300 transition duration-300"
              required=""
            />
            <input
              name='password'
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg border focus:ring-4 focus:ring-pink-300 transition duration-300"
              required=""
            />
            <button
              type="submit"
              className="w-full bg-pink-700 text-white font-semibold py-3 rounded-lg hover:bg-pink-800 transform hover:scale-105 transition duration-300"
            >
              Register
            </button>
            <div className="flex justify-center">
              <button
                onClick={loginWithGoogle}
                type="button"
                className="bg-white text-black font-semibold py-3 px-3 rounded-2xl flex items-center justify-center gap-4 transform hover:scale-105 transition duration-300"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google logo"
                  className="w-5 h-5"
                />
                Login with Google
              </button>
            </div>
          </form>
          <p className="text-sm text-center text-gray-600">
            Already have an account?{" "}
            <Link to={"/login"} className="text-pink-600 font-semibold">
              Login
            </Link>
          </p>
        </div>
      </main>
    </>

  )
}
