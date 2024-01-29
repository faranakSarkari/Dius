import React, { useState,useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import "../CountUp/style.css"

const AnimatedCountUp = ({ endValue, startValue, duration }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
  });

  // Set isVisible when the element comes into view
  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <>
    <section>
    <div className='container-fuild section_color mt-1'>
     <div className='row'>
      <div className='col-lg-6 col-12 pe-0'>
         <img src='https://imgurl.ir/uploads/d1535_family.png' style={{width:"100%"}}></img>
      </div>
      <div className='col-lg-6 col-12 bg-dark '>
        <div className='row '>
          <div className='small_section mt-5'>
          <h2>
          WHY BUY FROM US?
          </h2>
          <ul>
            <li >
            <h5>
           SMALL FAMILY OWNED BUSINESS
          </h5>
            </li>
            <li>
            <h5>
            FOUNDED BY TEACHERS IN LOUISIANA
          </h5>
            </li>
            <li>
            <h5>
            OUR PRODUCTS ARE AMAZING!
          </h5>
            </li>
          </ul>
          </div>
         
        </div>
        <div className='row'>
          <div className='small_section mt-4'>
            <h2>
              Our Products:
            </h2>
            <div ref={ref}>
        {console.log(isVisible)}
        {isVisible && <CountUp end={1000} start={1} duration={9} className='counter'/>}
    </div>
          </div>
        </div>
         </div>
     </div>
    </div>
    </section>

    </>

  );
};

export default AnimatedCountUp;

