import React, { useEffect } from 'react'
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utilities/firebase';
import { addUser, removeUser } from '../store/userSlice';
import { useNavigate } from 'react-router-dom';
import { LOGO, Supported_lang } from '../utilities/constants';
import { GPTState } from '../store/gptSlice';
import { LangOptions } from '../store/config';



const Header = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const GptActive = useSelector(store=>store.GPTSliceReducer.GPTSearchOption)
  
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) { 
        const {uid,email,displayName,phoneNumber,photoURL} = user;
        dispatch(addUser({uid : uid , email : email , phoneNumber : phoneNumber , displayName : displayName, photoURL : photoURL}));
        nav('/browse')
        
      } else {
        dispatch(removeUser())
        nav('/')
      }
    });
    },[])

  const user = useSelector(store => store.userReducer)
  return (
    <div className='absolute bg-gradient-to-b from-black z-10 w-[100%] flex justify-between flex-col md:flex-row '>
    <div className='mx-auto md:mx-0'>
      <img src={LOGO} alt='logo' className=' w-32 mx-8 my-2 '/>
    </div>
    <div className=' mt-4 mr-4'>
      {user && 
      <div className='flex md:justify-center justify-between'>
        <div>
        { GptActive && <select className='rounded-sm px-4 py-2 bg-yellow-500 ' onChange={(e)=>{dispatch(LangOptions(e.target.value))}}>{Supported_lang.map(option=>
            <option key={option.identifiers} value={option.identifiers}>{option.name}</option>)
            }</select>
          }
          <button 
          onClick={()=>dispatch(GPTState())}
          className='bg-rose-400 p-2 mx-8 text-white rounded-lg'>{GptActive ? "Home" : "GPTSearch"}</button>
        </div>
      <img src={user?.photoURL} className='w-8 h-8 rounded-lg hidden md:inline-block' alt='userphoto'/>
     <Button/>
      </div>
     }   
    </div>
    </div>
  )
}

export default Header