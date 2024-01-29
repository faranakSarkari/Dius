import React, { useContext,useState } from "react";
import Slider1 from "../../components/Slider1/Slider1";
import Slider2 from "../../components/Slider2/Slider2";
import "../Main/style.css";
import { Link } from "react-router-dom";
import BrandContext from "../../utils/brandContext";
import PureCounter from "@srexi/purecounterjs"
import AnimatedCountUp from "../../components/CountUp/CountUp";
import LoginRegister from "../LoginRegister/LoginRegister";
import Move from "../../components/Move/Move";
import Dot from "../../components/Dot/Dot";


export default function Main() {
  const { setBrand } = useContext(BrandContext);
  const pure = new PureCounter();

  return (
    <>
      <Slider1 />
      <Slider2 />
      {/* sectio3 */}
      <section className="sec3">
      <div className="  container-fluid" >
        <div className="row  mt-5 mb-5">
          <div className="col-lg-3 col-12 hover">
            <Link className="nav-link txt " to="/mrPen">
              <img
                src="https://imgurl.ir/uploads/l959943_download-removebg-preview.png"
                className="img-fluid imgHover mx-auto"
              />
            </Link>
          </div>
          <div className="col-lg-3 col-12 hover">
            <Link className="nav-link txt " to="/bates">
              <img
                src="https://imgurl.ir/uploads/n63057_Bates-removebg-preview.png"
                className="img-fluid imgHover mx-auto"
              />
            </Link>
          </div>
          <div className="col-lg-3 col-12 hover">
            <Link className="nav-link txt " to="/unco">
              <img
                src="https://imgurl.ir/uploads/j418496_UNCO-removebg-preview.png"
                className="img-fluid imgHover mx-auto"
              />
            </Link>
          </div>
          <div className="col-lg-3 col-12 hover">
            <Link className="nav-link txt" to="/slick">
              <img
                src="https://imgurl.ir/uploads/k43718_Slick_Solution_Final.png"
                className="img-fluid imgHover mx-auto "
              />
            </Link>
          </div>
        </div>
      </div>
      </section>

      {/* section4 */}
      <AnimatedCountUp/>  
      {/* section5 */}
      <LoginRegister/>
      <Move/>
      <Dot/>
     
    </>
  );
}
