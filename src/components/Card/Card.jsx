import React from 'react'
import { Link } from 'react-router-dom'
import { Button} from '@mui/material'
import "../Card/style.css"
import StarIcon from '@mui/icons-material/Star';

export default function Card({image,name,price,id,rate}) {
  return (
   <>
   <div className="card mt-3 mx-3 d-flex align-items-center cardBody" style={{width: "18rem"}}>
  <img src={image} class="card-img-top mt-2 cardImage" alt="..." style={{height:"200px",width:"200px"}} />
  <div class="card-body">
    <p class="card-title cardTitle">{name?.slice(0,25)}...</p>
    <p class="card-text text-center cardRate">{rate}<StarIcon sx={{color:"var(--star-color)", marginBottom:"6px"}}></StarIcon></p>
    <p class="card-text text-center cardPrice">{price}$</p>
  
    <Button variant="contained" sx={ {width: "100%" ,backgroundColor:"primary"}}>
    <Link to={`/product-details/${id}`} style={{textDecoration:"none", color:"white"}}>more details</Link>
    </Button>

  </div>
</div>
   </>
  )
}
