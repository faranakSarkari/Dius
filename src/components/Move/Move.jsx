import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./style.css"

export default function Move() {
    useEffect(() => {
        AOS.init()

    }, []);
  return (
   <>
    <section>
        <div className='container-fluid move mt-5 '>
            <div className='row'>
                <div className='col-lg-6 col-12 move_left'>
                    <img src='https://imgurl.ir/uploads/k449947_1.jpg' width={"100%"} data-aos="fade-right" data-aos-duration="1000"/>
                </div>
                <div 
                className='col-lg-6 col-12 bg-dark move_right d-flex flex-column aligh-items-center justify-content-center'
                 data-aos="fade-left" data-aos-duration="1000">
                    <h2 className='text-center mb-3' data-aos="fade-down" data-aos-duration="1000"  data-aos-delay="500" >
                    Bullet Journaling For Beginners
                    </h2>
                    <h5 className='text-center m-2'>
                    An inspiring and flexible way to organize tasks and to-do lists 
                    </h5>
                </div>
            </div>
        </div>
    </section>
   </>
  )
}
