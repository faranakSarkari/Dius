import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RemoveOne, RemoveItem, RemoveAll } from "../../store/slices/shopSlice";
import { Button } from "@mui/material";

export default function ProductTable() {
  const dispatch = useDispatch();
  const { name, quantity, price } = useSelector((state) => state.shop);
  let sum=0
 const totalPrice = price?.map((e,index)=>e*quantity[index] ) 
 totalPrice.forEach(element => {
    sum=sum+element
 }); 
  console.log("sum:",sum)

  return (
    <>
      <table className="table  table-hover">
        <thead className="table-success">
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total Price</th>
            <th>Remove One</th>
            <th>Remove Item</th>
          </tr>
        </thead>
        <tbody>
        <td >
            {name?.map((e, index) => (
              <tr >{e}</tr>
            ))}
          </td>
          <td>
            {quantity?.map((e, index) => (
              <tr>{e}</tr>
            ))}
          </td>
          <td>
            {price?.map((e, index) => (
              <tr>{e}</tr>
            ))}
          </td>
          <td>
            {price?.map((e, index) => (
              <tr>{quantity[index] * e}</tr>
            ))}
          </td>
        
        
          <td>
            {name?.map((e, index) => (
              <tr>
                <Button variant="outlined" 
                sx={{color:"var(--first-color)",borderColor:"var(--first-color)",height:"25px"}}
                  onClick={() =>
                    dispatch(RemoveOne({ name: e }))
                  }
                >
                  Remove One
                </Button>{" "}
              </tr>
            ))}
          </td>
          <td>
            {name?.map((e,index)=><tr>
                <Button variant="outlined" 
                sx={{color:"var(--first-color)",borderColor:"var(--first-color)", height:"25px"}}
                     onClick={()=>dispatch(RemoveItem({name:e}))}>Remove Item</Button>
            </tr>)}
          </td>
        </tbody>
       
          <tfoot>
            <tr>
                <td className="fw-bold">sum</td>
                <td>{sum}</td>
            </tr>
          </tfoot>
      </table>
    </>
  );
}
