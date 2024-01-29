import React, { useState, useEffect } from "react";
import "../Dot/style.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Dot() {
  const [message, setMessage] = useState();
  const [src, setSrc] = useState();
  const [box, setbox] = useState(false);
  const [box2, setbox2] = useState(false);
  const [box3, setbox3] = useState(false);
  const [id, setId] = useState();
  
  useEffect(() => {
    AOS.init()

}, []);

  function showProduct(msg, src, id) {
    setMessage(msg);
    setSrc(src);
    setId(id);
  }

  function closeBox() {
    setbox(false);
  }
  return (
    <>
     <div className="container-fluid dotBox mt-3">
        <div className="row">
            <div className="col-lg-8 col-12 mb-3" >
            <div className="dotM mt-3">

            <button className="iconButton" style={{ position: "absolute" }}
          onClick={() =>
 {           showProduct(
              "Mr. Pen- Erasers for Kids, 6 Pack, Pastel Colors",
              "https://imgurl.ir/uploads/q62386_71Jge11TBKL._AC_SL1500_.jpg",
              "dfaa86ee-4dba-42d3-8004-78792d8b181a"
            )
            setbox(true)}
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-record-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          </svg>
        </button>
        {box && (
          <div class="card cardBox">
                  <Button onClick={closeBox}>
        <CloseIcon className="close"></CloseIcon>
      </Button>
            <img src={src} class="card-img-top" className="srcClass" />
            <div class="card-body">
              <p class="card-text" className="txt">
                {message}
              </p>
              <Button
                variant="contained"
                sx={{ width: "100%", backgroundColor: "primary" }}
              >
                <Link
                  to={`/product-details/${id}`}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  more details
                </Link>
              </Button>
            </div>
          </div>
        )}
      {/*  dot2 */}
      <button
          className="iconButton2"
          onClick={() =>
  {          showProduct(
              "Mr. Pen- Pencil Box, 3 Pack",
              "https://i5.walmartimages.com/asr/f52479fe-1da1-45e8-b5d2-55ae0f75593f.eeea8c4835f81ec65f3128beb8a1d21c.jpeg",
              "a2d9db1d-4107-4fb6-ba26-4ef13b1136f7"
            )
            setbox2(true)}
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-record-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          </svg>
        </button>
        {box2 && (
          <div class="card cardBox2">
                  <Button onClick={()=>setbox2(false)}>
        <CloseIcon className="close"></CloseIcon>
      </Button>
            <img src={src} class="card-img-top" className="srcClass" />
            <div class="card-body">
              <p class="card-text" className="txt">
                {message}
              </p>
              <Button
                variant="contained"
                sx={{ width: "100%", backgroundColor: "primary" }}
              >
                <Link
                  to={`/product-details/${id}`}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  more details
                </Link>
              </Button>
            </div>
          </div>
        )}
         {/*  dot3 */}
         <button
          className="iconButton3"
          onClick={() =>
  {          showProduct(
              "Mr. Pen- Colored Pencils, 36 Pack",
              "https://i5.walmartimages.com/asr/263576ea-dbfe-4856-a356-0d4d88c4141d.9ce230c9130fc59cb4ef8c79b1e948df.jpeg",
              "8feb7d43-daaa-44ad-a2e0-2ff2a9fd3f43"
            )
            setbox3(true)}
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-record-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          </svg>
        </button>
        {box3 && (
          <div class="card cardBox2">
                  <Button onClick={()=>setbox3(false)}>
        <CloseIcon className="close"></CloseIcon>
      </Button>
            <img src={src} class="card-img-top" className="srcClass" />
            <div class="card-body">
              <p class="card-text" className="txt">
                {message}
              </p>
              <Button
                variant="contained"
                sx={{ width: "100%", backgroundColor: "primary" }}
              >
                <Link
                  to={`/product-details/${id}`}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  more details
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
            </div>
            <div className="col-lg-4 col-12 rightDot" data-aos="flip-up" data-aos-duration="1000" >
            <div className='movedCircle2'></div>
            <p className="txtDotRight">Innovative Solutions </p>
            <p className="txtDotRight2 mt-1">  to maximize efficiency  </p>
            <p className="txtDotRight3 mt-1">  and learning  </p>
            </div>
        </div>
     </div>


    </>
  );
}
