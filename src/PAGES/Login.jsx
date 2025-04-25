import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { app } from '../FirebaseConfig';
import { ToastContainer, toast } from 'react-toastify';
import { Context } from './MainContext';
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
export default function Login() {


  const { user, setUser } = useContext(Context)
  const navigate = useNavigate()



  const loginUser = (event) => {
    event.preventDefault();
    // console.log(event);
    // const name = event.target.name.value
    const email = event.target.email.value
    const password = event.target.password.value
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)

      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        toast.success("Successfully Login")

        setUser(user.accessToken);
        navigate("/")


      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error("User not found ")
        console.log(error);

      });
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
      <title>Login</title>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    .fade-in {\n      animation: fadeIn 1s ease-out;\n    }\n    @keyframes fadeIn {\n      from { opacity: 0; transform: translateY(30px); }\n      to { opacity: 1; transform: translateY(0); }\n    }\n    canvas#fireworks {\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100vw;\n      height: 100vh;\n      pointer-events: none;\n      z-index: 50;\n    }\n  "
        }}
      />
      <canvas id="fireworks" />
      <main className="flex items-center justify-center min-h-screen w-full z-10">
        <div className=" max-w-md w-full rounded-3xl bg-gray-400  shadow-2xl px-10 py-20 fade-in space-y-6">
          <h1 className="text-4xl font-bold text-center text-blue-800">Login</h1>
          <form onSubmit={loginUser} className="space-y-5">
            <input
              name='email'
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg border focus:ring-4 focus:ring-blue-300 transition duration-300"
              required=""
            />
            <input
              name='password'
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg border focus:ring-4 focus:ring-blue-300 transition duration-300"
              required=""
            />
            <button
              type="submit"
              className="w-full bg-blue-700 text-white font-semibold py-3 rounded-lg hover:bg-blue-800 transform hover:scale-105 transition duration-300">
              Login
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
            Don't have an account?{" "}
            <Link to={"/register"} className="text-blue-600 font-semibold">
              Register
            </Link>
          </p>
        </div>
      </main>
    </>

  )
}
