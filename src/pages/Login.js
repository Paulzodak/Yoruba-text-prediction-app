import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../firestore";
import google from "../assets/svg/google.svg";
import {
  setDoc,
  doc,
  query,
  getDocs,
  where,
  getDoc,
  collection,
} from "firebase/firestore";
import { db } from "../firestore";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading] = useSignInWithGoogle(auth);
  const handler = () => {
    console.log("clicked");
    signInWithGoogle([""], { prompt: "select_account" })
      .then((res) => {
        console.log(res);
        const getExists = async () => {
          const ref = doc(db, "users", res.user.uid);
          const docSnap = await getDoc(ref);
          if (docSnap.exists()) {
            console.log("exists");
            navigate("/home");
          } else {
            console.log("No such document!");
            const data = {
              email: res.user.email,
              uid: res.user.uid,
            };
            setDoc(ref, data)
              .then((res) => {
                navigate("/home");
              })
              .catch((e) => {
                console.log(e);
              });
          }
        };
        getExists();

        // const ref = collection(db, "users");
        // const userQuery = query(ref, where("email", "==", res.user.email));
        // getDocs(userQuery)
        //   .then((res) => res.exists())
        //   .catch((e) => console.log(e));
        // const docRef = doc(db, "users", res.user.uid);
        // const data = {
        //   email: res.user.email,
        //   uid: res.user.uid,
        // };
        // setDoc(docRef, data)
        //   .then((res) => {
        //     console.log(res);
        //   })
        //   .catch((e) => {
        //     console.log(e);
        //   });
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="h-[23rem] w-[20rem] bg-[white] rounded-lg shadow-xl mx-auto mt-[18%]">
      <button
        onClick={handler}
        className={`flex justify-center hover:bg-[#00000009] bg-white items-center border-[1px] mx-auto border-[#F1F1F1] h-[3rem] w-[80%] rounded-xl relative top-[3rem]`}
      >
        <span className="mr-2">
          <img src={google} alt="google icon" />
        </span>{" "}
        Continue with Google
      </button>
    </div>
  );
};

export default Login;
