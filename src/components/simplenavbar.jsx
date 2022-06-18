
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


} from '@chakra-ui/react';
import { MoonIcon, SunIcon ,ChevronDownIcon } from '@chakra-ui/icons';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



export const SimpleNavbar =()=>{
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isAuthenticated,setAuth] = useState(false)

   const [changeData,SetChangeData] =useState('')
   const navigate=useNavigate()


    return (
     <Box>
         <Box>
             <Box bg={useColorModeValue('white', 'white.300')} px={4}
             borderBottom={"1px solid grey"} >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Flex as ="div">
        <Box margin={'auto'} cursor={"pointer"} onClick={()=>navigate('/')}><Image src="https://www.expedia.co.in/_dms/header/logo.svg?locale=en_GB&siteid=27&2"></Image>
       
          </Box>
        </Flex>

       
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
            
          

             {isAuthenticated?
              <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={'https://avatars.dicebear.com/api/male/username.svg'}
                />
              </MenuButton>
              <MenuList alignItems={'center'}>
                <br />
                <Center>
                  <Avatar
                    size={'2xl'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </Center>
                <br />
                <Center>
                  <p>Username</p>
                </Center>
                <br />
                <MenuDivider />
                <MenuItem>Your Servers</MenuItem>
                <MenuItem>Account Settings</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
            :
            <button onClick={()=>navigate('/signup')}>Register</button>
            
            }
            </Stack>
          </Flex>
        </Flex>
      </Box>
 
      
       </Box>
        
     </Box>
    )
}


