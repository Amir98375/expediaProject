
import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Avatar,
    Image,
  
  } from '@chakra-ui/react';


  import { useEffect } from "react"
  import { useDispatch, useSelector } from "react-redux"
  import { fetchPackageData } from "../Redux/Action"

export const PackageShow=({children})=>{
    const dispatch=useDispatch()
    const data=useSelector((state)=>state.productReducer.products)
    const laoding=useSelector((state)=>state.productReducer.laoding)
   
    useEffect(()=>{
        dispatch(fetchPackageData())
    },[dispatch])
  // console.log(data)
    return(
    <Box display={"grid"} gridTemplateColumns={"auto auto auto auto"} >

{data?.map((el)=><Template image={el.image} title={el.Explore} reserve={el.reserve}
location={el.location} price={el.price}/>)}


    </Box>
    )
}

 const Template =({image,title,location ,price,reserve}) =>{
    return (
     <Box >
         <Center py={12}   >
        <Box
        display={"grid"}
      
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
         
       
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box  
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: "red",
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'contain'}
              src={image}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
              {location}
            </Text>
            <Heading fontSize={'1xl'} fontFamily={'body'} fontWeight={500}>
              {title}
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={800} fontSize={'xl'}>
              ₹{price}
              </Text>
              <Text  color={'gray.600'}>
               {reserve}
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Center>
     </Box>
    );
  }
  