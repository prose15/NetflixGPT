import React from 'react'
import Header from './Header'
import SecondaryContainer from './SecondaryContainer'
import MainContainer from './MainContainer'
import { useSelector } from 'react-redux'
import GPTPage from './GPTPage'

const Browse = () => {
  const selector = useSelector(store=>store.GPTSliceReducer.GPTSearchOption)
  return (
    <div>
      <div className=''>
      <Header/>
      {selector === true ? <GPTPage/> :
      <> <MainContainer/>
      <SecondaryContainer/></>}
      
      </div>      
    </div>
  )
}

export default Browse