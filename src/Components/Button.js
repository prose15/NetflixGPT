import { signOut } from 'firebase/auth'
import React, { useState } from 'react'
import { IoMdArrowDropdown , IoMdArrowDropup } from 'react-icons/io'
import { auth } from '../utilities/firebase'
import { useSelector } from 'react-redux'



const Button = () => {

    const [icon,setIcon] = useState(<IoMdArrowDropdown size={25}/>)
    const [dropDown,setDropDown] = useState(false)
    const selector = useSelector(store => store.userReducer)
   const  setHover = () =>{
    setIcon(<IoMdArrowDropup size={25}/> )
    }

  return (
    <div  onMouseOver={()=>{setHover()}}
    onMouseLeave={()=>{
    setIcon(<IoMdArrowDropdown size={25}/>
    )
    }}>
          <div className='text-white cursor-pointer ml-2 ' onClick={()=>{setDropDown(!dropDown)}}>
            {icon}
          </div>
          {dropDown &&
          <div className='bg-black text-white absolute left-[86%] max-sm:left-[60%] max-sm:top-[100%] top-14 p-4'>
            <div className='flex border-b border-white py-4'>
                <img src={selector?.photoURL} alt='User_Photo' className='w-8 h-8 rounded-lg'/>
              <p className='mx-4'>{selector?.displayName}</p>
            </div>    
            <button className='py-4' onClick={()=>{signOut(auth).then(() => {
       }).catch((error) => {
       });}}>Sign out of netflix</button>
          </div>
          }
    </div>
  )
}

export default Button