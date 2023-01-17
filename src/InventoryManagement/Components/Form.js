import Style from './Form.module.css';
import React, { useState } from "react";
import Button from '@mui/material/Button';
import { Input ,TextField }from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import axios from 'axios';

function Form(){
  const d = new Date();
  const [date,setDate] = useState(d)
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
    ReleaseDate: "09-01-2023",
    
    
    
    
    
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

 const dateHandler = (e) =>{
  setDate(e)
  var dateString = e.$D.toString()+ "/" + (e.$M + 1).toString() + "/" + e.$y.toString()
  setFormData({...formData, ReleaseDate: dateString})
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
  // for (var i=0; i<=e.target.files.length;i++){
  
  let  file  = e.target.files[2];
  const reader = new FileReader();
  reader.onload = () => {
    let { result } = reader;
    let index = result.indexOf("base64") + 7;
    let data = result.slice(index);
    console.log(result.toString());
    setFormData({ ...formData, [e.target.name]: [...formData.AppDocURL,data] });
  };
  reader.readAsDataURL(file);
// }

  
}

async function  readFileDataAsBase64SrcArray(e) {
  // for (var i=0; i<=e.target.files.length;i++){
  let  file  = e.target.files[2];
  const reader = new FileReader();
  reader.onload = () => {
    let { result } = reader;
    let index = result.indexOf("base64") + 7;
    let data = result.slice(index);
    console.log(result);
    setFormData({ ...formData, [e.target.name]: [...formData.AppScreenshotURL,data] });
  };
  reader.readAsDataURL(file);
// }
  
}

 return (
  // <div className={Style.bg}>
   <div className={Style.formContainer}>
   <div className={Style.Title}>
        <h1>REGISTER YOUR APPLICATION</h1>
          </div>
      <form onSubmit={submitHandler}>

            <div className={Style.section1}>
            <TextField name="AppID" label="App ID" className={Style.input_id}  value={formData.AppID} onChange={formHandler} required color="" />
            
                  
            <TextField name="AppName" label="App Name" className={Style.input}  value={formData.AppName} onChange={formHandler} required color="" />
            </div>
          
             
              
                  
            <div className={Style.section2}>
             <TextField name="AppDescription" className={Style.input2} label="App Description"  value={formData.AppDescription} onChange={formHandler} required color="" />
             <TextField name="AppCategory" className={Style.input2} label="App Category"  value={formData.AppCategory} onChange={formHandler} required color="" />
             <TextField name="AppURL" className={Style.input2} label="App URL"  value={formData.AppURL} onChange={formHandler} required color="" />
            </div> 

            <div className={Style.section2}>
            <TextField name="PublishedBy" className={Style.input2} label="Published By"  value={formData.PublishedBy} onChange={formHandler} required color="" />
            <TextField name="PublishedInfo" className={Style.input2} label="Publisher Info"  value={formData.PublishedInfo} onChange={formHandler} required color="" />   
           <LocalizationProvider dateAdapter={AdapterDayjs}>
           <DesktopDatePicker className={Style.input2}
           label="Release Date"
           inputFormat="DD/MM/YYYY"
           value={date}
           color=""
           onChange={dateHandler}
           renderInput={(params) => <TextField {...params} />}
           />
           </LocalizationProvider>
            </div>
           

           <div className={Style.upload_sec1}>
            <div className={Style.stack}>
            <div className={Style.label}><label >Drop Screenshots for your Application</label></div>
             <Button variant="contained" component="label">
                Browse File
              <input accept="image/*" hidden name="AppScreenshotURL" multiple type="file" onChange={readFileDataAsBase64SrcArray} required />
             </Button>
               {/* <input className={Style.FName}
                       
                       onChange={readFileDataAsBase64SrcArray}
                       type="file" 
                       name="AppScreenshotURL"
                       placeholder="App Screenshots"
                       multiple
                       required
                     /> */}
            </div>
            


            <div className={Style.stack}>
             <div className={Style.label}><label >Drop Your Application Documents</label></div>

             <Button variant="contained" component="label">
                Browse File
              <input accept="pdf/*" hidden name="AppDocURL" multiple type="file" onChange={readFileDataAsBase64DocArray} required />
             </Button>
               {/* <input className={Style.FName}
                       onChange={readFileDataAsBase64DocArray}
                       type="file"
                       name="AppDocURL"
                       placeholder="App Documents"
                       multiple
                       required
                     /> */}

              </div>
        
              </div>


              <div className={Style.upload_sec1}>
              <div className={Style.stack}>
              <div className={Style.label}><label >Drop your Application Logo</label></div>
             
             <Button variant="contained" component="label">
                Browse File
              <input accept="image/*" hidden name="AppLogo" type="file" onChange={readFileDataAsBase64} required />
             </Button>
               {/* <input className={Style.FName}
                       
                       onChange={readFileDataAsBase64}
                       type="file"
                       name="AppLogo"
                       placeholder="App Logo"
                       required
                     /> */}
            
              </div>

               

              <div className={Style.stack}>
              <div className={Style.label}><label >Drop your Application Demo Video</label></div>
             
             <Button variant="contained" component="label">
                Browse File
              <input accept="video/*" hidden name="AppDemoURL" type="file" onChange={readFileDataAsBase64} required />
             </Button>
               {/* <input className={Style.FName}
                      
                       onChange={readFileDataAsBase64}
                       type="file"
                       name="AppDemoURL"
                       placeholder="App Demo Video"
                      
                       required
                     /> */}
                  
              </div>
              </div>


              <div className={Style.upload_sec2}>
              <div className={Style.stack}>
              <div className={Style.label}><label >Drop your Application Poster</label></div>
           
             <Button variant="contained" component="label">
                Browse File
              <input accept="image/*" hidden name="AppPoster" type="file" onChange={readFileDataAsBase64} required />
             </Button>
               {/* <input className={Style.FName}
                      
                       onChange={readFileDataAsBase64}
                       type="file"
                       name="AppPoster"
                       placeholder="App Poster"
                      
                       required
                     /> */} 
              </div>
              </div>
                <div className={Style.upload_sec2}>
                      <Button variant="contained" color="success"> Submit</Button>
                      </div>
              </form>
            </div>
            // </div>
           
       
  );
};

export default Form;