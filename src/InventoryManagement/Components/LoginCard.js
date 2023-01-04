import React, {useState} from 'react'
import axios from 'axios'
import Style from './LoginCard.module.css'
const url = axios.create({
	baseURL: 'http://localhost:5000/api/add_user',
});

function LoginCard() {
	const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [Date, setDate] = useState('');
  const [Time, setTime] = useState('');
  const postQuery = async (Username,Password,Date,Time) => {
    		try {
    			let response = await url.post('', {
    				Username: Username,
            Password:Password,
            Date:Date,
            Time:Time
    			});
    			setUsername('');
          setPassword('');
          setDate('');
          setTime('');
    		} catch (error) {
    			console.log(error);
    		}
    	};
  const submitHandler = (event) => {
    event.preventDefault();
    // toast.success("Submitted Successfully!");
    console.log(Username,Password,Date,Time);
    postQuery(Username,Password,Date,Time);
  };
  return (
    <>
		<form onSubmit={submitHandler}>
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
      {/* <div className={Style.username}>
			<input type="text" placeholder="Username"/>
      </div> */}
			<div className={Style.username}>
			<input className="name"
                       value={Username}
                       onChange={(e) => setUsername(e.target.value)}
                       type="text"
                       name="Username"
                       placeholder="Username"
                       required
                     />
										 </div>
		  {/* <div>
			<input type="password" placeholder="Password"/>
      </div> */}
			<div className={Style.username}>
			<input className="name"
                       value={Password}
                       onChange={(e) => setPassword(e.target.value)}
                       type="password"
                       name="Password"
                       placeholder="Password"
                       required
                     />
										 </div>
										 {/* <div className={Style.username}>
			<input className="name"
                       value={Date}
                       onChange={(e) => setDate(e.target.value)}
                       type="date"
                       name="Date"
                       placeholder="Date"
                       required
                     />
										 </div>
										 <div className={Style.username}>
			<input className="name"
                       value={Time}
                       onChange={(e) => setTime(e.target.value)}
                       type="time"
                       name="Time"
                       placeholder="Time"
                       required
                     />
										 </div> */}
		</div>
    	<br></br>
			{/* <a className={Style.signIn}  href="/"  */}
        {/* // onClick={onClick} */}
        {/* >Sign In</a> */}
				<button variant="secondary" className= "SignInButton" type="submit" value="Submit">SignIn</button>
		
			
		
	</div>
  </div>
	</form>
    </>
  )
}

export default LoginCard