

import './App.css'
import welcome from '/welcome.png'

function App() {
  

  return (
    <>
    <div className='main_cont'>
      <div> <h1>Welcome </h1>
        <form className='signin'>
          <label htmlFor='userid' >UserID</label>
          <input type='text' id='userid' name='user'></input>
          <label htmlFor='pass'>Password</label>
          <input type='password' id='pass'></input><br />
          <button type='submit'>Sign In</button>
        </form>
               </div>
   
    <img src={welcome} alt="" />

    </div>
      
       
    </>
  )
}

export default App
