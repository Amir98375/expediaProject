
import {
 
  Box,
  Image

} from '@chakra-ui/react';
import {

} from 'react-icons/fi';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {  fetchGoaData} from '../Redux/Action';
import { FilterComponent } from '../Pages/FilterComponent';
import { ProductSimple } from '../Pages/ShowProduct';



export default function GoaHotels({ children }) {
  

  const dispatch=useDispatch()
  const delhiData=useSelector((state)=>state.productReducer.products)
  const laoding=useSelector((state)=>state.productReducer.laoding)

  useEffect(()=>{
    dispatch(fetchGoaData())
  },[dispatch])
  // console.log(delhiData)

  return (
    <Box display={"flex"}
   bgColor={"lightGrey"}
    
    marginTop={"30px"}>
<Box width={"20%"} 
marginRight={"30px"}
bgColor={"white"}
>
 {<FilterComponent area={"San Teodoro"} area1={"Pegli"} 
 Near={"Calangute Beach"} Near1={"Mandovi River"} 
 type={"fully refundable"}  type1={"reserve now pay later"}
 Facility={"Dinner"}/>} 
</Box>
<Box width={"65%"} 
bgColor={"white"}>
  {laoding && <Box><img src="https://media1.tenor.com/images/d6cd5151c04765d1992edfde14483068/tenor.gif?itemid=5662595"></img></Box>}
{delhiData?.map((el)=>  <ProductSimple name={el.Name} price={el.price} rating={el.rating}
image={el.image} area={el.Area} location={el.location}/>)}

</Box>
<Box width={"15%"}  marginLeft={"30px"}
bgColor={"white"}>
  <Image width={"100%"}
  
  height={"100%"} src='https://tpc.googlesyndication.com/simgad/3300578970834289968?' />

</Box>
    </Box>
  );
};