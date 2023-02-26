import React from 'react'
import Style from './SearchCardItem.module.css'
import { BsFillFileEarmarkFill } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { Light, Dark, Toggle, ThemeState } from "../Redux/ThemeSlice";


function SearchCardItem({fileName,dataBase64,type}) {
  const theme = useSelector(ThemeState);
    console.log(dataBase64)
    let fileString = {
        file_name: fileName,
        file:`data:${type};base64,${dataBase64}`
      }
    function downloadPDF(file) {
        const pdfLink = file.file;
        const anchorElement = document.createElement('a');
        const fileName = `${file.file_name}`;
        anchorElement.href = pdfLink;
        anchorElement.download = fileName;
        anchorElement.click();
    }

    function dataURLtoFile(dataurl, filename) {
 
      var arr = dataurl.split(','),
          mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]), 
          n = bstr.length, 
          u8arr = new Uint8Array(n);
          
      while(n--){
          u8arr[n] = bstr.charCodeAt(n);
      }
      
      return new File([u8arr], filename, {type:mime});
  }

    function previewFile() {
      var files = dataURLtoFile(fileString.file,fileString.file_name);
      console.log(files)
      // var base64 = "data:"+type+";base64,"+dataBase64  ;
      var fileURL = URL.createObjectURL(files);
      window.open(fileURL);
    }

    
  return (
    <>
    <div className={theme === "Light" ? Style.cont_Light : Style.cont_Dark}  >
    <FiDownload className='ml-36 hover:cursor-pointer hover:bg-slate-100 hover:rounded-md' size={20} onClick={()=>downloadPDF(fileString)}/>

    <BsFillFileEarmarkFill className='hover:cursor-pointer' color="#80AFE7" size={100} onClick={previewFile}/>

    <h1 className='text-center'>{fileName}</h1>

    </div>

    
    </>
  )
}

export default SearchCardItem
