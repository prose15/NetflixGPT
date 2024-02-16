import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateSignIn } from '../utilities/validation';
import { checkValidateSignUp } from '../utilities/validation';
import { auth } from '../utilities/firebase';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser} from '../store/userSlice';
import { BACKGROUND_IMAGES, USER_PROFILE } from '../utilities/constants';

const Login = () => {
  const [signInBtn,setSignInBtn]=useState(false);
  const [errorMsg,setErrorMsg] = useState(null)
  const email = useRef();
  const password = useRef();
  const name = useRef();
  const dispatch = useDispatch()

  const toggleSignInBtn =()=>{
    setSignInBtn(!signInBtn)
  }
  const handleSubmit = () => {
    const message = signInBtn ? (
      checkValidateSignUp(name.current.value, email.current.value , password.current.value))
    : (
      checkValidateSignIn( email.current.value , password.current.value))
      setErrorMsg(message)
      if(message)return

      if(signInBtn){
      createUserWithEmailAndPassword(auth,email.current.value, password.current.value).then((userCredential) => {
        const user = userCredential.user;
       updateProfile(user,{
        displayName : name.current.value , photoURL:USER_PROFILE
       }).then(()=>{
        const {uid,email,displayName,photoURL} = auth.currentUser;
        dispatch(addUser({uid : uid, email: email, photoURL: photoURL , displayName: displayName}))
       })
      }).catch((error) =>{
      }) 
    }
    else{
      signInWithEmailAndPassword(auth,email.current.value,password.current.value).then((userCredential)=>{
     
      }).catch((error)=>{
        const errorCode = error.code;    
        setErrorMsg(errorCode)
      })
    }
  }

  return (
    <div className=''>
      <Header/>
      <div className='absolute'>
      <img src={BACKGROUND_IMAGES} 
      alt='bgimg' className='max-xl:h-screen'/>
      </div>
      <form onSubmit={(e)=>{e.preventDefault()}} className='bg-black p-12 absolute  w-3/12 max-md:w-4/12 my-36 mx-auto right-0 left-0 bg-opacity-85'>
      <h1 className='text-white text-3xl py-4'>{signInBtn === true ? "SignUp" : "SignIn"}</h1>
      {signInBtn &&
      <input 
      ref={name}
      type='text'
      placeholder='Full name'
      className='my-4 w-[100%] p-2  rounded-md bg-gray-700 text-white'/>}
      <input 
      ref={email}
      type='text'
      placeholder='Enter email'
      className='my-4 w-[100%]  rounded-md bg-gray-700 text-white p-2'/>
      <input 
      ref={password}
      type='password' 
      placeholder='Enter password' 
      className='my-4 w-[100%] p-2 rounded-md bg-gray-700 text-white'/>
      <small className='text-orange-500'>{errorMsg}</small>
      <button 
      onClick={handleSubmit}
      type='submit' 
      className='text-white bg-red-700 my-4 py-2 w-[100%] rounded-md opacity-100'>{signInBtn === true ? "SignUp" : "SignIn"}</button>
      <p className='text-white cursor-pointer' onClick={toggleSignInBtn}>{signInBtn === true ? "Already having account ? then go back to Sign in" : "New to Netflix?Sign up now"}</p>
      </form>   
    </div>
  )
}

export default Login