import { Box,Image } from "@chakra-ui/react"
import { PackageShow } from "../ProductPages/Package"

export const PackageDetails=()=>{
    return(
        <Box display={"flex"} pt={"30px"} bgColor={"#f8f5f4"} width={"100%"}>
           <Box bgColor={"white"} ml={"2.5%"} borderRadius={"10px"} width={"10%"}>
            <Image height={"100%"} borderTopRadius={"10px"} src="https://tpc.googlesyndication.com/simgad/3300578970834289968?"></Image>
           </Box>
           <Box bgColor={"white"} ml={"2%"} width={"70%"} borderRadius={"10px"}>
            <PackageShow/>
           </Box>
           <Box bgColor={"white"} ml={"2%"} width={"10%"} borderRadius={"10px"}>
           <Image height={"100%"} borderTopRadius={"10px"} src="https://tpc.googlesyndication.com/simgad/4652945743188291985?"></Image>
           </Box>
        </Box>
    )
}