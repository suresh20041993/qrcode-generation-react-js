// import React from 'react'

import { useState } from "react";

// import PropTypes from 'prop-types'
const QrCode = () => {
 const [qrimg, setImg]=   useState("");
const [loading,setloading]=useState(false);
const [qrdata,setQrData]=useState("");
const [qrsize,setQrSize]=useState("")
// const [genBtnDisanble,setgenBtnDisanble]=useState(false)


//  console.log("img",qrimg);
 async  function generateQR () {
  console.log("qrsize",qrsize);
  console.log("qrdata",qrdata);


  setloading(true);
    // console.log("generateQR"); 
    // setImg("images/jpg_44-2.jpg") 
    // this.loading= false 

    try {
      const url =  `https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}*${qrsize}&data=${qrdata}`;
      setImg(url);
    } catch (error) {
      console.error("qrcode generate error",error)
    }finally{
      console.log("loading",loading)
      setloading(false );

    }

  }
  function downloadQR( ){  
    console.log("downloadQR");

    fetch(qrimg)
  .then(response => response.blob())
  .then(blob => {
    if (!blob) {
      // Handle error: QR image might not be found
      console.error("Failed to fetch QR image");
      return;
    }

    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'qrcode.jpg';
    link.click();

    // Revoke object URL after the click event is processed
    link.addEventListener('click', () => {
      window.URL.revokeObjectURL(url);
    });
  })
  .catch(error => {
    // Handle other errors during the process
    console.error("Error fetching or processing QR image:", error);
  });
  }
  
  return (
    <div className="app-container">
        <h1>QR CODE GENERATOR</h1>

        {loading && <p>please wait...</p>}
        {qrimg &&   <img src={qrimg} className="qr-code-image"/>}
        <div>
            <label htmlFor="datainput" className="input-label">Data for qrcode</label>
            <input type="text" id="datainput" value={qrdata} placeholder="Enter the Data For qrcode" onChange={(e)=>setQrData(e.target.value)} />
            <label htmlFor="sizeinput" className="input-label">Image Size (e.g.,150)</label>
            <input type="text" id="sizeinput" value={qrsize}  placeholder="Enter image size"  onChange={(e)=>setQrSize(e.target.value)}/>
            <button className="generate-btn" disabled={loading} onClick={()=>generateQR()}>Generate QrCode</button>
            <button className="download-btn" onClick={()=>downloadQR()}>Download QrCode</button>

        </div>

        </div>  
  ) 
} 

// QrCode.propTypes = {

// }

export default QrCode
