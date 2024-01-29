import React, { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import SidebarBoot from "../../components/SidebarBoot/SidebarBoot";
import { useContext } from "react";
import BrandContext from "../../utils/brandContext";
import Button from "@mui/material/Button";
import "../products/style.css";

export default function MrPen() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState();
  const [currentPage, setCurrentPage] = useState(1); //for showing limited products in each page
  const pageSize = 12;
  const { brand } = useContext(BrandContext);
  useEffect(() => {
    fetch(`http://localhost:3001/edges`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.length);
        setProducts(data);
      })
      .catch((err) => setError(err.message));
  }, [currentPage]);
  const totalPages = Math.ceil(products.length / pageSize);
  {
    console.log(totalPages);
  }

  // Handler for navigating to the previous page
  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  // Handler for navigating to the next page
  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  {
    console.log(products);
  }
  //get products of each brand
  let brandProducts = products?.filter(
    (e) => e.node.name && e.node.name.startsWith(`${brand}`)
  );
  {
    console.log(brandProducts);
  }
  //show 20 products in each page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  let brandProduct20 = brandProducts?.slice(startIndex, endIndex);
  let items = brandProduct20?.map((e, index) => (
    <Card
      id={e.node.id}
      name={e.node.name}
      price={e.node.price}
      image={e.node.image}
      rate={e.node.rate}
      key={index}
    />
  ));
  //src related to each brand
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
    <>
      {console.log(brand)}
      <div className="container-fluid">
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
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <SidebarBoot />
            </div>
            <div className="col-lg-9">
              <div className="container-fluid d-flex flex-row justify-content-center flex-wrap mt-3">
                {items}
              </div>
              <div>
                {/* Show navigation controls */}
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
    </>
  );
}
