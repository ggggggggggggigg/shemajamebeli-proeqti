import { useState, useEffect } from 'react'
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


export default function Yle(){
  const [text1, settext1] = useState('')
  const [text2, settext2] = useState('')
  const [register, setregister] = useState(false)
  const [going, setgoing] = useState(false)

  if (register === true){
    return(
      <>
      <div >
        <div className='top'>  
       <h2 className='mail'>📬 mail</h2>
       <div className='buttons'>
        <Button onClick={() => setregister(false)} className='log' variant='light'>login</Button>
        <Button onClick={() => setregister(true)} variant="light">register</Button>
       </div>
        </div >
        <div className='wholeboard'>
        <div className='login'>
        <h6>email</h6>
        <input 
        className='input' 
        type='text'
        onChange={(e) => settext1(e.target.value)}/>      
        <h6>password</h6>
        <input 
        className='input' 
        type='text'
        onChange={(e) => settext2(e.target.value)}/>
        <h6>confirm password</h6>
        <input 
        className='input' 
        type='text'
        onChange={(e) => settext2(e.target.value)}/>
        <div>alredy have an account?
        <Button onClick={() => setregister(false)} className='register' variant="link">login</Button>
        <Button onClick={() => sethomepage(true)} className='register' variant="dark">register</Button> </div> 
        </div>
        </div>
      </div>
    </>
    )
  }

  if (register === false){
    return(
      <>
      <div >
        <div className='top'>  
       <h2 className='mail'>📬 mail</h2>
       <div className='buttons'>
        <Button className='log' variant='light'>login</Button>
        <Button onClick={() => setregister(true)} variant="light">register</Button>
       </div>
        </div >
        <div className='wholeboard'>
        <div className='login'>
        <h6>email</h6>
        <input 
        className='input' 
        type='text'
        onChange={(e) => settext1(e.target.value)}/>      
        <h6>password</h6>
        <input 
        className='input' 
        type='text'
        onChange={(e) => settext2(e.target.value)}/>
        <div>dont you have an account?
        <Button onClick={() => setregister(true)} className='register' variant="link">register</Button>
        <Button onClick={() => sethomepage(true)} className='register' variant="dark">login</Button> </div> 
        </div>
        </div>
      </div>
    </>
    )
  }
  return (
    <>
      <div >
        <div className='top'>  
       <h2 className='mail'>📬 mail</h2>
       <div className='buttons'>
        <Button className='log' variant='light'>login</Button>
        <Button onClick={() => setregister(true)} variant="light">register</Button>
       </div>
        </div >
        <div className='wholeboard'>
        <div className='login'>
        <h6>email</h6>
        <input 
        className='input' 
        type='text'
        onChange={(e) => settext1(e.target.value)}/>      
        <h6>password</h6>
        <input 
        className='input' 
        type='text'
        onChange={(e) => settext2(e.target.value)}/>
        <div>dont you have an account?
        <Button onClick={() => setregister(true)} className='register' variant="link">register</Button>
        <Button onClick={() => sethomepage(true)} className='register' variant="dark">login</Button> </div> 
        </div>
        </div>
      </div>
    </>
  )
}
