import React from 'react'
import Style from './SearchCardItem.module.css'
import { BsFillFileEarmarkFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { Light, Dark, Toggle, ThemeState } from "../Redux/ThemeSlice";


function SearchCardItem({fileName,dataBase64,type}) {
  const theme = useSelector(ThemeState);
    console.log(dataBase64)
    let fileString = {
        file_name: fileName,
        file:dataBase64
      }
    function downloadPDF(file) {
        const pdfLink = `${file.file}`;
        const anchorElement = document.createElement('a');
        const fileName = `${file.file_name}`;
        anchorElement.href = pdfLink;
        anchorElement.download = fileName;
        anchorElement.click();
    }

    const base64toBlob = (data) => {
      const base64WithoutPrefix = data.substr(`data:${type};base64,`.length);

      const bytes = atob(base64WithoutPrefix);
      let length = bytes.length;
      let out = new Uint8Array(length);

      while (length--) {
          out[length] = bytes.charCodeAt(length);
      }

      return new Blob([out], { type: type });
  };

    function previewFile() {
      var base64 = "data:"+type+";base64,"+dataBase64  ;
      var fileURL = URL.createObjectURL(base64toBlob(base64));
      window.open(fileURL);
    }

    
  return (
    <>
    <div className={theme === "Light" ? Style.cont_Light : Style.cont_Dark} onClick={()=>(downloadPDF(fileString))} >

    <BsFillFileEarmarkFill color="#80AFE7" size={100} />

    <h1>{fileName}</h1>

    </div>

    
    </>
  )
}

export default SearchCardItem
