
import {
 
  Box,
  Image,
  Button

} from '@chakra-ui/react';
import {

} from 'react-icons/fi';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect,useState } from 'react';
import { fetchData } from '../Redux/Action';
import { FilterComponent } from '../Pages/FilterComponent';
import { ProductSimple } from '../Pages/ShowProduct';

import { PaginationComponent } from '../Pages/pagination';




export default function DelhiDataShow({ children }) {

  const [page,setPage] =useState(1)
  const dispatch=useDispatch()
  const delhiData=useSelector((state)=>state.productReducer.products)
  const laoding=useSelector((state)=>state.productReducer.laoding)
  // console.log(laoding)

// console.log(page)
  useEffect(()=>{
    dispatch(fetchData())
   if(delhiData?.length!==0){
   }
  },[dispatch])
  // console.log(delhiData)
  const handlePage=()=>(setPage(page))
  return (
  
    <Box display={"flex"}
   bgColor={"lightGrey"}
    
    marginTop={"30px"}>
<Box width={"20%"} 
marginRight={"30px"}
bgColor={"white"}
>
 {<FilterComponent area={"Saket"} area1={"Nehru Palace"} 
 Near={"Airport"} Near1={"India Gate"}
  type={"fully refundable"}
 type1={"reserve now pay later"}
 Facility={"dinner"}/>} 
</Box>
<Box width={"65%"} 
bgColor={"white"}>
 {laoding && <Box><img src="https://media1.tenor.com/images/d6cd5151c04765d1992edfde14483068/tenor.gif?itemid=5662595"></img></Box>}
 
{
  delhiData?.map((el)=>  <ProductSimple name={el.Name} price={el.price} image={el.image}
  id={el.id} area={el.Area} location={el.location} rating={el.rating}/>)}
    
      <Box display={"flex"}>
      <Button disabled={page===1} onClick={()=>setPage((p)=>p-1)}>Prev</Button>
            
            <PaginationComponent currentpage={page} lastpage={5} onpagechange={setPage}></PaginationComponent>
            <Button onClick={()=>setPage((p)=>p+1)}>Next</Button>
      </Box>
</Box>
<Box width={"15%"}  marginLeft={"30px"}
bgColor={"white"}>
  <Image width={"100%"}
  
  height={"100%"} src='https://tpc.googlesyndication.com/simgad/3300578970834289968?' />

</Box>
<Box>
      
            </Box>
      
    </Box>
  );
};