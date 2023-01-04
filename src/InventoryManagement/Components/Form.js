import Style from './Form.module.css';
import React, { useState } from "react";
import { Button } from 'react-bootstrap';
// import axios from 'axios';

function Form(){
  const [formData, setFormData] = useState({
    AppID: "",
    AppCategory:"",
    AppDemoURL:"",
    AppDescription: "",
    AppDocURL: [],
    AppLogo:"",
    AppName: "",
    AppPoster:"",
    AppScreenshotURL: [],
    AppURL: "",
    PublishedBy: "",
    PublishedInfo: "",
    ReleaseDate: "",
    
    
    
    
    
  });

  const config = {
    method: "POST",
    headers: {
      
      'content-type': 'application/json',
    },
    body: JSON.stringify(formData)

  };

  const submitHandler = async(event) => {
    event.preventDefault();
    // try{
    //   const res = await fetch('http://localhost:5000/api/postAppDetails', config, formData)
    //   // const res = await axios.get('http://localhost:5000/api/HelloWorld')
     
    //   console.log(res.data);

    // }
    // catch (e) {
    //  console.log(e);
    // }

    fetch('http://localhost:5000/api/postAppDetails',config)
    .then(response => console.log(response))
    // alert('Registered Successfully!!')

    console.log(formData);
    
  };
  
  
 const formHandler = (e) =>{
   
      setFormData({ ...formData, [e.target.name]: e.target.value });
    
 }

  async function  readFileDataAsBase64(e) {
    
    
    let  file  = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      let { result } = reader;
      let index = result.indexOf("base64") + 7;
    let data = result.slice(index);
      console.log(result);
      setFormData({ ...formData, [e.target.name]: data});
    };
    reader.readAsDataURL(file);
    
}

async function  readFileDataAsBase64DocArray(e) {
  console.log(e.target.files.length);
  for (var i=0; i<e.target.files.length;i++){
  
  let  file  = e.target.files[i];
  const reader = new FileReader();
  reader.onload = () => {
    let { result } = reader;
    let index = result.indexOf("base64") + 7;
    let data = result.slice(index);
    console.log(result.toString());
    setFormData({ ...formData, [e.target.name]: [...formData.AppDocURL,data] });
  };
  reader.readAsDataURL(file);
}

  
}

async function  readFileDataAsBase64SrcArray(e) {
  for (var i=0; i<e.target.files.length;i++){
  let  file  = e.target.files[i];
  const reader = new FileReader();
  reader.onload = () => {
    let { result } = reader;
    let index = result.indexOf("base64") + 7;
    let data = result.slice(index);
    console.log(result);
    setFormData({ ...formData, [e.target.name]: [...formData.AppScreenshotURL,data] });
  };
  reader.readAsDataURL(file);
}
  
}

 return (
   <div className={Style.formContainer}>
      <form onSubmit={submitHandler}>
        <div className={Style.Title}>
        <h1>APP INFO</h1>
          </div>
          <div>
          <div className={Style.label}><label >AppID</label></div>
             <div >
               <input className={Style.FName}
                       value={formData.AppID}
                       onChange={formHandler}
                       type="text"
                       name="AppID"
                       placeholder="App ID"
                       required
                     />
                  
                   </div>

                   <div className={Style.label}><label >App Name</label></div>
             <div >
               <input className={Style.FName}
                       value={formData.AppName}
                       onChange={formHandler}
                       type="text"
                       name="AppName"
                       placeholder="App Name"
                       required
                     />
                  
                   </div>

                   <div className={Style.label}><label >App URL</label></div>
             <div >
               <input className={Style.FName}
                       value={formData.AppURL}
                       onChange={formHandler}
                       type="text"
                       name="AppURL"
                       placeholder="App URL"
                       required
                     />
                  
                   </div>

                   <div className={Style.label}><label >App Description</label></div>
             <div >
               <input className={Style.FName}
                       value={formData.AppDescription}
                       onChange={formHandler}
                       type="text"
                       name="AppDescription"
                       placeholder="App Description"
                       required
                     />
                  
                   </div>

                   <div className={Style.label}><label >App Category</label></div>
             <div >
               <input className={Style.FName}
                       value={formData.AppCategory}
                       onChange={formHandler}
                       type="text"
                       name="AppCategory"
                       placeholder="App Category"
                       required
                     />
                  
                   </div>

                   <div className={Style.label}><label >App Screenshots</label></div>
             <div >
               <input className={Style.FName}
                       
                       onChange={readFileDataAsBase64SrcArray}
                       type="file" 
                       name="AppScreenshotURL"
                       placeholder="App Screenshots"
                       multiple
                       required
                     />
                  
                   </div>

                   <div className={Style.label}><label >App Documents</label></div>
             <div >
               <input className={Style.FName}
                       
                       onChange={readFileDataAsBase64DocArray}
                       type="file"
                       name="AppDocURL"
                       placeholder="App Documents"
                       multiple
                       required
                     />
                  
                   </div>

                   <div className={Style.label}><label >App Logo</label></div>
             <div >
               <input className={Style.FName}
                       
                       onChange={readFileDataAsBase64}
                       type="file"
                       name="AppLogo"
                       placeholder="App Logo"
                       required
                     />
                  
                   </div>

                   <div className={Style.label}><label >App Demo Video</label></div>
             <div >
               <input className={Style.FName}
                      
                       onChange={readFileDataAsBase64}
                       type="file"
                       name="AppDemoURL"
                       placeholder="App Demo Video"
                      
                       required
                     />
                  
                   </div>

                   <div className={Style.label}><label >App Poster</label></div>
             <div >
               <input className={Style.FName}
                      
                       onChange={readFileDataAsBase64}
                       type="file"
                       name="AppPoster"
                       placeholder="App Poster"
                      
                       required
                     />
                  
                   </div>

                   <div className={Style.label}><label >Published By</label></div>
             <div >
               <input className={Style.FName}
                       value={formData.PublishedBy}
                       onChange={formHandler}
                       type="text"
                       name="PublishedBy"
                       placeholder="Published By"
                       required
                     />
                  
                   </div>

                   <div className={Style.label}><label >Published Info</label></div>
             <div >
               <input className={Style.FName}
                       value={formData.PublishedInfo}
                       onChange={formHandler}
                       type="text"
                       name="PublishedInfo"
                       placeholder="Published By"
                       required
                     />
                  
                   </div>

                   <div className={Style.label}><label >Release Date</label></div>
             <div >
               <input className={Style.FName}
                       value={formData.ReleaseDate}
                       onChange={formHandler}
                       type="date"
                       name="ReleaseDate"
                       placeholder="Release Date"
                       required
                     />
                      <Button variant="secondary" className="mr-2 submitButton" type="submit" value="Submit">Submit</Button> 
                  
                   </div>


                   

                   {/* <div>
                   <input className={Style.FName}
                       value={formData.firstName}
                       onChange={formHandler}
                       type="text"
                       name="firstName"
                       placeholder="First Name"
                       required
                     />
                   </div> */}
                   </div>
                   
                   
                   {/* <div className={Style.label}><label>Address</label></div>
                   <div>
                   <input className={Style.Address}
                       value={formData.streetAddress}
                       onChange={formHandler}
                       type="text"
                       name="streetAddress"
                       placeholder="Street Address"
                       required
                     />
                   </div>
                   <div>
                   <input className={Style.Address}
                       value={formData.streetAddressLine2}
                       onChange={formHandler}
                       type="text"
                       name="streetAddressLine2"
                       placeholder="Street Address Line 2"
                     />
                   </div>
                   <div>
                   <input className={Style.city}
                       value={formData.city}
                       onChange={formHandler}
                       type="text"
                       name="city"
                       placeholder="City"
                       required
                     />
                     <input className={Style.city}
                       value={formData.state}
                       onChange={formHandler}
                       type="text"
                       name="state"
                       placeholder="State"
                       required
                     />
                     <input className={Style.zipcode}
                       value={formData.zipCode}
                       onChange={formHandler}
                       type="text"
                       name="zipCode"
                       placeholder="Zip Code"
                       required
                     />
                   </div>
                   
                   
                   <div className={Style.label}><label>Email</label></div>
                <div >
                 <input className={Style.Address}
                    value={formData.email}
                    onChange={formHandler}
                    type="email"
                    name="email"
                    placeholder="example@gmail.com"
                    required
                  />
                </div>
                <div className={Style.label}><label>Mobile Number</label></div>
                <div>
                
                 <input className={Style.Address}
                    value={formData.mobilenumber}
                    onChange={formHandler}
                    type="Number"
                    name="mobilenumber"
                    placeholder="+91 8248365519"
                    required
                  />
                </div>
               
                <div className={Style.Title}>
        <h2>BOOKING INFORMATION</h2>
          </div>
          <div>
          <div className="label"><label>Check-in Date</label></div>
                    <input className={Style.Address}
                    type="date" 
                    name="checkindate" 
                    value={formData.checkindate} 
                    onChange={formHandler}  
                    required/>
                  <div className="label"><label>Check-out Date</label></div>
                    <input className={Style.Address}
                    type="date" 
                    name="checkoutdate"
                    value={formData.checkoutdate} 
                    onChange={formHandler} 
                    required/>
                </div>
               
                <div className="label"><label>Number of Guests in Room</label></div>
                <div>
                
                 <input className={Style.Address}
                    value={formData.guestCount}
                    onChange={formHandler}
                    type="Number"
                    name="guestCount"
                    placeholder="Guest Count"
                    required
                  />
                </div> 
                <div className="label">
                  <select className={Style.Address}
                    name="roomType"
                    value={formData.roomType}
                    onChange={formHandler}
                    required
                  >
                    <option>Select a Room Type</option>
                    <option value="Single $100">Single $100</option>
                    <option value="Double $150">Double $150</option>
                    <option value="Queen $200">Queen $200</option>
                    <option value="King $250">King $250</option>
                    <option value="2-Bedroom $350">2-Bedroom $350</option>
                    <option value="Suite $500">Suite $500</option>
                  </select>
                  </div>
                
                <div>
                <div className={Style.labelOp}><label>Lease Pocket Wifi $5</label></div>
                <div>
                
                  <div>
                  <input
                    value="Yes"
                    onChange={formHandler}
                    type="radio"
                    name="wifi"
                    id="op1"
                    
                  />
                  <label className={Style.option} for="op1">Yes</label>
                  </div>
                  <div>
                  <input
                    value="No"
                    onChange={formHandler}
                    type="radio"
                    name="wifi"
                    id="op2"
                  />
                  <label className={Style.option} for="op2">No</label>
                  </div>
               
                </div>
                </div>
                <div>
                  <div className={Style.labelOp}><label>Free Shuttle Service</label></div>
                
                  <div>
                  <input
                    value="Yes"
                    onChange={formHandler}
                    type="radio"
                    name="shuttleService"
                    id="op11"
                  />
                  <label className={Style.option} for="op11">Yes</label>
                  </div>
                  <div>
                  <input
                    value="No"
                    onChange={formHandler}
                    type="radio"
                    name="shuttleService"
                    id="op12"
                  />
                  <label className={Style.option} for="op12">No</label>
                  </div>
               
                </div>
                <div >
                  <div className={Style.label}>
        <label>Notes/Special requirements</label></div>
        <textarea className={Style.txtArea}
         rows="10" 
          value={formData.notes}
          onChange={formHandler}
          name= "notes"
        
        />
      </div >
      <div className={Style.infoTxt}>
          <p>The submission of this form makes a reservation for the type of room selected in the form. Any changes prior the scheduled occupancy should be communicated to us at least 24 hours prior, which may be subject to availability of request.</p>
          <p>Check-in time shall be at 2:00PM and checkout time shall be at 12:00NN.</p> </div> */}
          {/* <Button variant="secondary" className="mr-2 submitButton" type="submit" value="Submit">Submit</Button>  */}
              </form>
            </div>
           
       
  );
};

export default Form;