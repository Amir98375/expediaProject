import { Box } from "@chakra-ui/react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { HotelDetail } from "../components/HotelDetails"
import { fetchSingleDelhiData } from "../Redux/Action"


export const BookingDetails=()=>{
    const dispatch=useDispatch()
    const data=useSelector((state)=>state.productReducer.currentProduct)
    const laoding=useSelector((state)=>state.productReducer.laoding)

    const {id} = useParams();
    // console.log(id);
    useEffect(()=>{
        if(id){
            dispatch(fetchSingleDelhiData(id))
        }
    },[id,dispatch])
 
    return(
        
        <Box>
            {laoding && <Box><img src="https://media1.tenor.com/images/d6cd5151c04765d1992edfde14483068/tenor.gif?itemid=5662595"></img></Box>}
           <HotelDetail
         
image1={data.image1 }
image2={data.image2 }
image3={data.image3 }
image4={data.image4 }
image5={data.image5 }
name={data.Heading}
p1={data.price1}
p2={data.price2}
p3={data.price}
title1={data.Title2}
title2={data.Title1}
im1={data.image6}
im2={data.image7}
im3={data.image8}
reserve={data.reserve}
rating={data.rating}

           />
        </Box>
    )
}


