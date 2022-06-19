
import { ReactNode, useEffect } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  useColorMode,
  Center,
  Icon,
  Link,
  Input,

} from '@chakra-ui/react';
import { MoonIcon, SunIcon ,ChevronDownIcon } from '@chakra-ui/icons';
import { AiFillCar } from "react-icons/ai";
import { MdOutlineFlight } from "react-icons/md"
import { FaHotel } from "react-icons/fa"
import { GoPackage} from "react-icons/go"
import { MdHolidayVillage} from "react-icons/md"
import { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../Redux/GetUser/action';
import { logout } from '../Redux/Login/action';


export const Navbar =()=>{
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [searchData ,SetSearchData]=useState('')
    const [changeData,SetChangeData] =useState('')
    const navigate = useNavigate()
    const {isAuthenticate,token} = useSelector((store)=>store.login);
    const {email} = useSelector((store)=>store.user);

    const user = useSelector((store)=>store.user.username);
    
    const dispatch = useDispatch();
  useEffect(()=>{
    if(isAuthenticate){
        getUser(token,dispatch);
    }
  },[])

   const hnadleChange=()=>{
    if(changeData==='Stays' && searchData=="Delhi"||  searchData==="delhi"|| searchData==="del"){
      // console.log(searchData,changeData)
      SetSearchData('')
      SetChangeData('')
      navigate('/delhi');
    }
   else if(searchData=="Gujrat"||  searchData==="gujrat"|| searchData==="ahemadabad" && changeData=="Stays"){
      SetSearchData('')
      SetChangeData('')
      navigate('/guj')
          // console.log("hello")
    }
   else if(searchData=="Goa"||  searchData==="goa" && changeData=="Stays"){
     SetSearchData('')
     SetChangeData('')
     navigate('/goa')
          // console.log("hello")
    } else{
      navigate('/package')
    }
   }

   const handleLogout = ()=>{
    dispatch(logout());
   }

  //  console.log('authenti',user,email,isAuthenticate);
    return (
     <Box bgColor={"#f8f5f4"}>
         <Box>
             <Box bg={useColorModeValue('white', 'white.300')} px={4}
             borderBottom={"1px solid grey"} >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Flex as ="div">
        <Box cursor={"pointer"} onClick={()=>navigate('/')}><Image src="https://www.expedia.co.in/_dms/header/logo.svg?locale=en_GB&siteid=27&2"></Image>
       
          </Box>
        </Flex>
        <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}
   marginRight={"850px"} color={"blue"} 
  backgroundColor="#ffffff" 
  box-shadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}>
    More Travel
  </MenuButton>
  <MenuList backgroundColor={"#ffffff"} width={"400px"}>
    <MenuItem value={"Stays"} onClick={(e)=>SetChangeData(e.target.value)}><FaHotel/>Stays</MenuItem>
    <MenuItem  value={"Package"} onClick={(e)=>SetChangeData(e.target.value)}><GoPackage/>Package</MenuItem>
    <MenuItem><MdOutlineFlight/>Flight</MenuItem>
    <MenuItem><AiFillCar/>Cars</MenuItem>
    
    <MenuItem><MdHolidayVillage/>Holiday Activities</MenuItem>
    <MenuItem>Deals</MenuItem>
    <MenuItem>Mobile</MenuItem>
  </MenuList>
</Menu>
       
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
          

             {isAuthenticate?
              <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={'https://avatars.githubusercontent.com/u/97455128?v=4'}
                />
              </MenuButton>
              <MenuList alignItems={'center'}>
                <br />
                <Center>
                  <Avatar
                    size={'2xl'}
                    src={'https://avatars.githubusercontent.com/u/97455128?v=4'}
                  />
                </Center>
                <br />
                <Center>
                  <p>{user}</p>
                </Center>
                <br />
                <MenuDivider />
                <MenuItem>{email}</MenuItem>
                <MenuItem onClick={()=>navigate('/reset_password')}>Change Password</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </MenuList>
            </Menu>
            :
            <button onClick={()=>navigate('/login')}>Login</button>
            
            }
            </Stack>
          </Flex>
        </Flex>
      </Box>
    
        </Box>
       <Box marginTop={"2rem"}>
       <Box bgColor={"white"} width={"90%"} marginRight={"5%"} 
        marginLeft={"5%"} 
        height={"12rem"} 
        gap={"3rem"}
        borderRadius={"1rem"} p={"2rem"}
        border={"1px solid grey"}>
        <Input  width={"40%"} placeholder='Going to only for delhi, gujrat, goa route avilable now'
         onChange={(e)=>SetSearchData(e.target.value)}/>
        <Input type={"date"} width={"15%"} placeholder='Check in' marginLeft={"10px"}/>
        <Input type={"date"} width={"15%"} placeholder='Check out'marginLeft={"10px"}/>
        <Input  width={"25%"} placeholder='Travellers' marginLeft={"10px"} />
        <Button bg={"#3662d8"} width={"8rem"}
        color={"white"} height={"3rem"} marginTop={"2rem"}
        onClick={hnadleChange}>Search</Button>
        </Box>
      
       </Box>
        
     </Box>
    )
}


