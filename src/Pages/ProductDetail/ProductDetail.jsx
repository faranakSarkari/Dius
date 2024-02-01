import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { order } from "../../store/slices/shopSlice";
import LoginContext from "../../utils/loginContext";
import { Button } from "@mui/material";
import "../ProductDetail/style.css"
import BrandContext from "../../utils/brandContext";

export default function ProductDetail() {
  const { productId } = useParams(); //slag
  const [data, setData] = useState("");
  const [orderQuantity, setOrderQuantity] = useState(1);
  const { name, quantity, price } = useSelector((state) => state.shop);
  const dispatch = useDispatch();
  const { login } = useContext(LoginContext);
  const [message, setMessage] = useState();
  const [className, setClassName] = useState();
  const {brand}=useContext(BrandContext)

  useEffect(() => {
    fetch(`https://api.github.com/repos/faranakSarkari/dius/contents/db.json.id=${productId}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  {
    console.log(("name:", name));
    console.log("quantity:", quantity);
    console.log("price:", price);
  }
  function showMessage(className, message) {
    setMessage(message);
    setClassName(className);
    setTimeout(() => {
      setMessage();
    }, 3000);
  }
  return (
    <>
      <div className="conteiner">
        <div className="row">
          <div className="col-lg-6 col-12">
            <img src={data[0]?.node.image} alt="..." style={{ width: "90%" }} />
          </div>
          <div className="col-lg-6 col-12">
            <p class="card-text mt-4">{data[0]?.node.name}</p>
            <p class="card-text mt-4 cardDetailPrice" >${data[0]?.node.price}</p>
            <input
              type="number"
              value={orderQuantity}
              onChange={(e) => setOrderQuantity(Number(e.target.value))}
            ></input>
            {login ? (
              <Button
                variant="contained"
                onClick={() =>
                  dispatch(
                    order({
                      name: `${data[0]?.node.name.slice(0, 30)}...`,
                      num: orderQuantity,
                      price: data[0]?.node.price,
                    })
                  )
                }
              >
                order
              </Button>
            ) : (
              <Button
                variant="contained"
                sx={{ backgroundColor: "gray" }}
                onClick={() =>
                  showMessage("text-warning", "Please login first")
                }
              >
                order
              </Button>
            )}
            <p className={className}>{message}</p>
            <Button  variant="contained">
            <Link className="removeDecor" to={brand=="Mr. Pen" ?"/mrPen": `/${brand}`}>Back</Link>
            </Button>
      {console.log(brand)}
          </div>
        </div>
      </div>

    </>
  );
}
