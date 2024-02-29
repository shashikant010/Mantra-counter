import React from 'react'
import Audio from './Audio'
import Counter from './Counter'
export default function Mantra() {
  return (
    <>
  
  <div className="bgimg"></div>
  <h1>Mantra counter</h1>
  <Audio />
    <div className='mantra' style={{textAlign:'center',fontSize:'30px',margin:'20px',fontWeight:'700'}}>
        
<p>ॐ भूर् भुवः स्वः।</p>
<p>तत् सवितुर्वरेण्यं।</p>
<p>भर्गो देवस्य धीमहि।</p>
<p>धियो यो नः प्रचोदयात् ॥</p>
    </div>
    <Counter/>
    </>
  )
}
