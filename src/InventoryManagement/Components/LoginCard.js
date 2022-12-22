import React from 'react'
import Style from './LoginCard.module.css'

function LoginCard() {
  return (
    <>
    <div className={Style.boxform}>
	<div className={Style.left}>
		<div className={Style.overlay}>
		<h1>Digiverz Inventory</h1>
		{/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
		Curabitur et est sed felis aliquet sollicitudin</p> */}
		{/* <span> */}
			{/* <p>login with social media</p>
			<a href="#"><i className ="fa fa-facebook" aria-hidden="true"></i></a>
			<a href="#"><i className="fa fa-twitter" aria-hidden="true"></i> Login with Twitter</a> */}
		{/* </span> */}
		</div>
	</div>

  <div className={Style.right}>
		<h5>Login</h5>
    <div>
		<p>Don't have an account? <a href="#">Creat Your Account</a> it takes less than a minute</p>
    </div>
		<div className={Style.inputs}>
      <div className={Style.username}>
			<input type="text" placeholder="Username"/>
      </div>
		  <div>
			<input type="password" placeholder="Password"/>
      </div>
		</div>
    	<br></br>
			<a className={Style.signIn}  href="/" 
        // onClick={onClick}
        >Sign In</a>
		
			
		
	</div>
  </div>
    </>
  )
}

export default LoginCard