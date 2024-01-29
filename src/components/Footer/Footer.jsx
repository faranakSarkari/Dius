import React from 'react'
import "../Footer/style.css"

export default function Footer() {
  return (
    <>
    <div className='container-fluid footer bg-dark'>
     <div className='row'>
      <div className='col-lg-6 col-12  text-light footerLeft'>
        <p >
        © 2023 Mrpen.Com / All Rights Reserved
        </p>
      </div>
      <div className='col-lg-6 col-12 footerRight mx-auto'>
        <p className='text-light '>Design & Development by:&nbsp; </p>
        <p className='footerRightTxt2 '> Faranak Sarkari</p>
      </div>
     </div>
    </div>

    </>
  )
}
