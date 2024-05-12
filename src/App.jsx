import { useState, useEffect } from 'react'
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import './App.css'

function App() {
  const [text1, settext1] = useState('')
  const [text2, settext2] = useState('')
  const [register, setregister] = useState(0)

  const registers = () => {
    setregister(1)
    settext1('')
  }

  const logins = () => {
    setregister(0)
    settext1('')
  }

  if (register === 1){
    return(
      <>
      <div >
        <div className='top'>  
       <h2 className='mail'>📬 mail</h2>
       <div className='buttons'>
        <Button onClick={logins} className='log' variant='light'>login</Button>
        <Button onClick={registers} variant="light">register</Button>
       </div>
        </div >
        <div className='wholeboard'>
        <div className='login'>
        <h6>email</h6>
        <input 
        className='input' 
        type='text'
        value={text1}
        onChange={(e) => settext1(e.target.value)}/>      
        <h6>password</h6>
        <input 
        className='input' 
        type='text'
        value={text2}
        onChange={(e) => settext2(e.target.value)}/>
        <h6>confirm password</h6>
        <input 
        className='input' 
        type='text'
        value={text2}
        onChange={(e) => settext2(e.target.value)}/>
        <div>alredy have an account?
        <Button onClick={logins} className='register' variant="link">login</Button>
        <Button onClick={() => setregister(2)} className='register' variant="dark">register</Button> </div> 
        </div>
        </div>
      </div>
    </>
    )
  }

  if (register === 2){
    return(
      <>
      <div >
      <div className='top'>  
       <h2 className='mail'>📬 mail</h2>
       <div className='buto'>
        <Button className='bw' onClick={() => setregister(2)} variant="light">inbox</Button>
        <Button className='bw' variant="light">sent</Button>
        <Button className='bw' variant="light">archived</Button>
        <Button className='bww'variant="light">compose</Button>
        <h5 className='logo'>{text1}</h5>
        <Button className='b' onClick={logins} variant="light">logout</Button>
       </div>
        </div >
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
        <Button onClick={logins} className='log' variant='light'>login</Button>
        <Button onClick={registers} variant="light">register</Button>
       </div>
        </div >
        <div className='wholeboard'>
        <div className='login'>
        <h6>email</h6>
        <input 
        className='input' 
        type='text'
        value={text1}
        onChange={(e) => settext1(e.target.value)}/>      
        <h6>password</h6>
        <input 
        className='input' 
        type='text'
        value={text2}
        onChange={(e) => settext2(e.target.value)}/>
        <div>dont you have an account?
        <Button onClick={registers} className='register' variant="link">register</Button>
        <Button onClick={() => setregister(2)} className='register' variant="dark">login</Button> </div> 
        </div>
        </div>
      </div>
    </>
  )
}

export default App