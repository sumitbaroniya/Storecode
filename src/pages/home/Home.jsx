import React from 'react'
import Input from '../../components/input/Input'
import Faq from '../../components/faq/Faq'
import Influencers from '../../components/influencers/Influencers'
import Join from '../../components/join/Join'
import './home.css'

function Home() {
  return (
    <div>
      <div className='inputWrapper'><Input/></div>
      <div className='illustrationWrapper'></div>
      <div className=''><Influencers/></div>
      <div className='faqWrapper'><Faq/></div>
      <div><Join/></div>
    </div>
  )
}

export default Home