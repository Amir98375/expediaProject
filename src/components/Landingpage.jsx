import { Box,Button,Heading,Image } from "@chakra-ui/react"
import { PackageShow } from "../ProductPages/Package"

export const LandingPage=()=>{
    return(
       <Box marginTop={"2rem"}>
         <Box as="div" height={"500px"} width={"96%"} margin={"auto"} border={'1px solid grey'}
        backgroundImage={"https://www.bcdme.com/wp-content/uploads/2019/08/Corinthia.gif"}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"100% 500px"}
        borderRadius={"30px"}>
          <Box
         height={"100%"}  width={"100%"} borderRadius={"30px"} >
            <Box as="div" marginRight={"500px"}marginTop={"100px"}>
            <Heading color={"white"}>Save instantly with</Heading>
            <Heading marginRight={"38px"}color={"white"}>Expedia Rewards</Heading>
            <Box as="p" marginLeft={"30px"}
            color={"white"}>
            You can enjoy access to perks like Member Prices,
            </Box>
            <Box as="p" marginLeft={"10px"}
            color={"white"}>
            saving you 10% or more on select hotels. Terms
            </Box>
            <Box as="p" marginRight={"250px"}
            color={"white"} >
            may apply.
            </Box>
            </Box>
            <Button bg={"#3662d8"} marginRight={"42rem"} marginTop={"2rem"} 
            color={"white"}>See members price</Button>
         </Box>
         
        </Box>
        <PackageShow/>
        <Box as="div" height={"200px"} width={"96%"} margin={"auto"} marginTop={"6rem"} border={'1px solid grey'}
        backgroundImage={"https://a.travel-assets.com/travel-assets-manager/gmvd-1482-bookearly-emea/667x320.jpg"}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"100% 200px"}
        borderRadius={"30px"}>
          <Box
         height={"100%"}  width={"100%"} borderRadius={"30px"} >
            <Box as="div" marginRight={"500px"}marginTop={"8rem"}>
            
            <Box as="p" marginRight={"24.5rem"}
            color={"white"} fontSize={"1.2rem"} cursor={"pointer"}>
            plan Ahead and save
            </Box>
            <Box as="p" marginRight={"10rem"}
            color={"white"} fontSize={"1.2rem"} cursor={"pointer"}>
            Book 60 days in advance for 20% off select stays
            </Box>
           
            </Box>
         
         </Box>
         
        </Box>
       </Box>
    )
}
