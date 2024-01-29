import React,{useState,useEffect,useContext} from 'react'
import Card from '../../components/Card/Card';
import SidebarBoot from '../../components/SidebarBoot/SidebarBoot';
import AuthContext from '../../utils/authContext';
import BrandContext from '../../utils/brandContext';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Button from "@mui/material/Button";

export default function SortRate() {
    function valuetext(value) {
        return `${value}°C`;
      }



  const [products,setProducts]=useState([])
  const [error,setError]=useState()
  const {price}=useContext(AuthContext)
  const {setPrice}=useContext(AuthContext)
  const [currentPage, setCurrentPage] = useState(1);//for showing limited products in each page
  const pageSize = 50
  const {brand}=useContext(BrandContext)
  const {rate}=useContext(AuthContext)
  const {setRate}=useContext(AuthContext)

  const marks = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 5,
      label: "5",
    },
  ];

  useEffect(() => {
    fetch(`http://localhost:3001/edges?node.name_like=${brand}&_sort=node.sku&_page=${currentPage}&_limit=${pageSize}`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      setProducts(data)})
    .catch((err) => setError(err.message))
  }, [currentPage]);
  const totalPages = Math.ceil(products.length / pageSize);
 // Handler for navigating to the next page
 const goToNextPage = () => {
  setCurrentPage(prevPage => prevPage + 1);
};
const goToPreviousPage = () => {
  setCurrentPage(prevPage => prevPage - 1);
};

  let rateProducts=products.filter((e)=>(e.node.rate>=rate[0] && e.node.rate<=rate[1]&&e.node.image!=="null"))
  let items=rateProducts?.map((e,index)=><Card id={e.node.id}
  name={e.node.name}
  price={e.node.price}
  image={e.node.image}
  rate={e.node.rate}
  key={index}
  />)

  let src;
  let logosrc;
  switch (brand) {
    case "Mr. Pen":
      src = "https://m.media-amazon.com/images/I/91lpe8WA5BL._AC_SL1500_.jpg";
      logosrc="https://imgurl.ir/uploads/l959943_download-removebg-preview.png"
      break;
    case "Bates":
      src = "https://m.media-amazon.com/images/I/81RCrjPwRBL._AC_SL1500_.jpg";
      logosrc="https://imgurl.ir/uploads/n63057_Bates-removebg-preview.png"
      break;
    case "UNCO":
      src = "https://m.media-amazon.com/images/I/810Dl6DoTYL._AC_SL1500_.jpg";
      logosrc="https://imgurl.ir/uploads/j418496_UNCO-removebg-preview.png"
      break;
    case "Slick":
      src = "https://m.media-amazon.com/images/I/81R4XKuYVhL._AC_SL1500_.jpg";
      logosrc="https://imgurl.ir/uploads/k43718_Slick_Solution_Final.png"
      break;
    default:
      break;
  }
  return (
    
    <div className='container-fluid'>
      {console.log("rate:",rate)}
      <div className="row topProduct">
          <img
            className="topProductImage"
            src={src}
            style={{ height: "500px" }}
          />
          <div className="triangle"></div>
          <img className="logoImage"
            src={logosrc}
            style={{ height: "100px", width: "100px" }}
          />
          <h4 className="imgtxt">Affordable Products</h4>
          <p className="imgtxt2">Please tell your friends about our website</p>
        </div>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-3'>
        <SidebarBoot/>
        </div>
        <div className='col-lg-9'>
            <div className='row '>
                <div className=' d-flex flex-column'>
                <p className=' mt-2 w-25  '>Sort by Rate</p> 
        <Box sx={{ width: 300 }}>
       

      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={rate}
        onChange={(e)=>setRate(e.target.value)}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        step={0.1}
        min={0}
        max={5}
        marks={marks}
      />
    </Box>

                </div>

          
            </div>

        <div className='container-fluid d-flex flex-row justify-content-center flex-wrap mt-3'>
      {items}
    </div>
    <div>
    <Button
                  color="secondary"
                  variant="contained"
                  disabled={currentPage === 1}
                  onClick={goToPreviousPage}
                >
                  {" "}
                  Previous
                </Button>
                <Button
                  color="secondary"
                  variant="contained"
                  disabled={currentPage === totalPages}
                  onClick={goToNextPage}
                >
                  {" "}
                  Next
                </Button>
    </div>
        </div>
      </div>
    </div>

      </div>
  )
}
