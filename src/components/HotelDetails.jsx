import {Box ,Button,Grid,GridItem, Heading ,Image} from '@chakra-ui/react'
import {AiOutlineWifi} from "react-icons/ai"
import { MdSocialDistance ,MdCleaningServices ,MdOutlinePool,MdOutlineRestaurantMenu} from "react-icons/md"
import {FaHeadSideMask ,FaPumpSoap,FaParking,FaBed,FaCity} from "react-icons/fa"
import {GiCooler} from "react-icons/gi"
import {TbMassage} from "react-icons/tb"
import {BiArea} from "react-icons/bi"
import {RiReservedFill} from "react-icons/ri"

import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { Navigate } from 'react-router'

export const HotelDetail=(
  {image1,image2,image3,im1,im2,
  p1,p2,p3,title1,title2,reserve,rating,
  image4,image5,name}
  )=>{

    return (
        <Box bgColor={"#f8f5f4"}
        mt={"3rem"}>
            
<Box  display={"flex"}

bgColor={"#f8f5f4"}>
<Grid

bgColor={"#f8f5f4"}
w='80%'
ml={"4%"}

height={"300px"}
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(8, 1fr)'
  gap='1px'
 
>
  <GridItem  rowSpan={2} colSpan={4} >
    <img src={image5} alt=""   width={"100%"}/>
  </GridItem>
  <GridItem colSpan={2}  >
  <img src={image1} alt=""  height={"100%"} width={"100%"}/>
  </GridItem>
  <GridItem colSpan={2} bg='papayawhip' >
  <img src={image2} alt=""  height={"100%"} width={"100%"}/>
  </GridItem>
  <GridItem colSpan={2} >
  <img src={image3} alt=""  height={"100%"} width={"100%"}/>
  </GridItem>
  <GridItem colSpan={2} >
  <img src={image4} alt=""  height={"100%"} width={"100%"}/>
  </GridItem>
  
</Grid>

<Box width={"10%"} ml={"0.5%"}
height={"300px"}
mr={"3%"}

bgColor={"white"}
>
<img src="https://tpc.googlesyndication.com/simgad/4652945743188291985?" alt=""  height={"100%"} width={"100%"}/>

  

</Box>
</Box>
<Box display={"flex"} mt={"10px"}>
<Box height={"500px"} width={"80%"}
bgColor={"white"}
ml={"4%"}
display={"flex"}

>
  <Box width={"70%"} >

    <Box h={"40%"} >
      <Heading mr={"20rem"}>{name} </Heading>
      <Heading ml={"40px"} color={"#ff9529"} fontSize={"20px"}> <Rating rating={rating}/></Heading>
      <Heading mr={"20rem"} mt={"20px"} fontSize={"20px"}>Cleaning and Safety Practice </Heading>
    <Box mt={"20px"} justifyContent={"space-around"} display={"flex"}> <p mr={"20rem"} ><MdCleaningServices/>Cleaned with disinfectant</p>   <p mr={"20rem"}><FaHeadSideMask/>free personal sanitary equipment</p></Box>
    <Box mt={"20px"} justifyContent={"space-around"} display={"flex"}> <p mr={"20rem"}><FaPumpSoap/>Hand sanitiser provided !</p>  <p mr={"20rem"}><MdSocialDistance/>Social distancing maintain well ! </p></Box>
    </Box>
    
    <Box h={"60%"} >
    <Heading mr={"25.5rem"} mt={"30px"} fontSize={"20px"}>Popular Aminities </Heading>
    <Box mt={"20px"} justifyContent={"space-around"} display={"flex"}> <p mr={"20rem"}><AiOutlineWifi/>Free Wifi Ava</p>  <p mr={"20rem"}><GiCooler/>Air Condition</p></Box>
    <Box mt={"20px"} justifyContent={"space-around"} display={"flex"}> <p mr={"20rem"}><MdOutlinePool/>pool For Bath</p>  <p mr={"20rem"}><TbMassage/>Spa Facility!</p></Box>
    <Box mt={"20px"} justifyContent={"space-around"} display={"flex"}> <p mr={"20rem"}><FaParking/>Parking Enter</p>  <p mr={"20rem"}><MdOutlineRestaurantMenu/>Food Varities</p></Box>
   
    </Box>
  </Box>
  <Box width={"30%"} ></Box>
   
</Box>
<Box height={"500px"}
width={"10%"} ml={"0.5%"}
bgColor={"white"}
mr={"3%"}
>
  <Image src='https://tpc.googlesyndication.com/simgad/611061976946598058?'></Image>
</Box>
</Box>
<Box 

mt={"1rem"}
ml={"4.3%"}
height={"500px"}
width={"90%"}
display={"flex"}>
  <Box as="div" height={"100%"}
   width={"31.3%"} 
   backgroundColor={"white"}
   ml={"1%"}
   borderRadius={"30px"}
  >
     <Image borderTopRadius={"10px"} height={"30%"} width={"100%"} src={image4} alt="" />
   
   <Heading fontSize={"20px"}>{title1}</Heading>
<Box  textAlign={"left"} ml={"20px"} >
<Heading color={"#ff9529"} fontSize={"10px"}><Rating rating={rating}/></Heading>
<p fontSize={"10px"}><BiArea/>552 sqft</p>
   <p fontSize={"10px"}><FaCity/>City View</p>
   <p fontSize={"10px"}><FaBed/>1 king bed</p>
  <p><AiOutlineWifi/></p><p>free wifi</p>
   <p fontSize={"10px"}><FaParking/>free self-parking</p>
   <p ><RiReservedFill/>{reserve}</p>
</Box>
    <Box as={"div"} display={"flex"} justifyContent={"space-around"}>
    <Heading>₹{p1}</Heading> <Button backgroundColor={"blue"}
       color={"white"} mt={"10px"} >Reserve</Button>
    </Box>
   </Box>
   
  <Box height={"100%"}
  ml={"2%"}
   width={"31.3%"} 
   borderRadius={"30px"}
   backgroundColor={"white"}
   >     <Image borderTopRadius={"10px"}  height={"30%"} width={"100%"} src={im1} alt="" />
     <Heading fontSize={"20px"} mr={"10rem"}>Delux room , 1 king</Heading>
<Box mt={"27px"}  textAlign={"left"} ml={"20px"} >
<Heading color={"#ff9529"} fontSize={"10px"}><Rating rating={rating}/></Heading>
<p fontSize={"10px"}><BiArea/>552 sqft  </p>
   <p fontSize={"10px"}><FaCity/>City View</p>
   <p fontSize={"10px"}><FaBed/>1 king bed</p>
  <p><AiOutlineWifi/></p><p>free wifi</p>
   <p fontSize={"10px"}><FaParking/>free self-parking</p>
   <p ><RiReservedFill/>{reserve}</p>
</Box>
<Box as={"div"} display={"flex"} justifyContent={"space-around"}>
    <Heading>₹{p2}</Heading> <Button backgroundColor={"blue"}
       color={"white"} mt={"10px"} >Reserve</Button>
    </Box>

   </Box>
  <Box height={"100%"}
   width={"31.3%"} 
   borderRadius={"30px"}
   backgroundColor={"white"}
   ml={"2%"}
  >
     <Image borderTopRadius={"10px"} height={"30%"} width={"100%"} src={im2} alt="" />
     <Heading fontSize={"20px"}>{title2}</Heading>
<Box  textAlign={"left"} ml={"20px"} >
<Heading color={"#ff9529"} fontSize={"10px"}><Rating rating={rating}/></Heading>
<p fontSize={"10px"}><BiArea/>552 sqft</p>
   <p fontSize={"10px"}><FaCity/>City View</p>
   <p fontSize={"10px"}><FaBed/>1 king bed</p>
  <p><AiOutlineWifi/></p><p>free wifi</p>
   <p fontSize={"10px"}><FaParking/>free self-parking</p>
   <p ><RiReservedFill/>{reserve}</p>
</Box>
<Box as={"div"} display={"flex"} justifyContent={"space-around"}>
    <Heading>₹{p3}</Heading> <Button backgroundColor={"blue"}
       color={"white"} mt={"10px"} onClick={Navigate('expedia.com')} >Reserve</Button>
    </Box>

   </Box>

</Box>
        </Box>
    )

    
}


function Rating({ rating}) {
  return (
    <Box display="flex" >
      {Array(5)
        .fill('')
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: '1' }}
                color={i < rating ? 'teal.500' : 'gray.300'}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
          }
          return <BsStar key={i} style={{ marginLeft: '1' }} />;
        })}
      {/* <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && 's'}
      </Box> */}
    </Box>
  );
}