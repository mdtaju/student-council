import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  signInWithPopup,
} from "firebase/auth";
import { useDispatch } from "react-redux";
// import firebase from "../config/cofig.firebase";
import { firebase } from "../config/cofig.firebase";
import {
  useRegisterMutation,
  useUserLoginMutation,
} from "../features/auth/authApi";
import { userLoggedOut } from "../features/auth/authSlice";
const provider = new GoogleAuthProvider();

export default function useFirebaseLogin() {
  const [register] = useRegisterMutation();
  const [userLogin] = useUserLoginMutation();
  const dispatch = useDispatch();

  const authConfig = getAuth(firebase);

  const SignOutAccount = () => {
    dispatch(userLoggedOut());
    localStorage.removeItem("auth");
  };

  const CreateNewAccount = async (email, password) => {
    let result;
    await createUserWithEmailAndPassword(authConfig, email, password)
      .then(async (userCredential) => {
        // Send email verification
        // Signed in
        const user = userCredential.user;
        const makingInfo = {
          uid: user?.uid,
          email: user?.email,
          password,
          provider: "Email",
          isVerified: user?.emailVerified,
          role: "Lead",
        };
        register(makingInfo)
          .unwrap()
          .then((data) => {
            result = {
              status: 200,
              message: "Your account has been successfully created.",
            };
          })
          .catch((err) => {
            result = {
              status: err?.status,
              message: err?.data?.message,
            };
          });
      })
      .catch((error) => {
        result = {
          status: 400,
          message: error.code,
        };
        // ..
      });
    if (authConfig?.currentUser) {
      await sendEmailVerification(authConfig.currentUser)
        .then(() => {
          console.log("Verification email sent");
        })
        .catch((error) => {
          console.error("Error sending verification email:", error);
        });
    }
    return result;
  };

  const SignInAuthUser = async (email, password) => {
    let result;
    await userLogin({
      email,
      password,
    })
      .unwrap()
      .then((d) => {
        result = {
          status: 200,
          message: "Successfully logged-in",
          role: d?.user,
        };
      })
      .catch((err) => {
        result = {
          status: err?.status,
          message: err?.data?.message,
        };
      });

    return result;
  };

  const SignInWithGoogle = async () => {
    let result;
    await signInWithPopup(authConfig, provider)
      .then(async (data) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        const user = data.user;
        const makingInfo = {
          name: user?.displayName,
          photoUrl: user?.photoURL,
          uid: user?.uid,
          email: user?.email,
          provider: "Google",
          isVerified: user?.emailVerified,
          role: "Lead",
        };
        await register(makingInfo)
          .unwrap()
          .then((d) => {
            result = {
              status: 200,
              message: "Successfully login with Goggle",
              role: "Lead",
            };
            // navigate("/");
          })
          .catch((error) => {
            result = {
              status: error?.status,
              message: error?.data?.message,
            };
          });
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        result = {
          status: errorCode,
          message: errorMessage,
        };
      });
    return result;
  };

  return {
    CreateNewAccount,
    SignInAuthUser,
    SignOutAccount,
    SignInWithGoogle,
  };
}
