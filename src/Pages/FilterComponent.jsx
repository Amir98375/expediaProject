
import { Box ,Text ,VStack , Checkbox,
    MenuButton,MenuOptionGroup,Button,
    MenuList,MenuItemOption,
    Menu,
    MenuDivider,
     CheckboxGroup} from "@chakra-ui/react"
     import {useSearchParams} from 'react-router-dom'
     import { useDispatch } from "react-redux"
     import { useState ,useEffect } from "react"
     import { fetchData, fetchGoaData } from '../Redux/Action';
// import DelhiDataShow from "./DelhiData"
export const FilterComponent =({area,area1,Near,Near1,type,type1,Facility})=>{
  const [searchParams,setsearchParams] =  useSearchParams()
  const [categoryvalue,setcategoryvalue] =useState(
    searchParams.getAll(" ")||[])

    const dispatch=useDispatch() 

    
    const categoryHandler=(values)=>{
      setcategoryvalue(values)
      // console.log(values)
    }
    
   

    useEffect(()=>{
      if(categoryvalue[categoryvalue.length-1]=="Saket"||categoryvalue[categoryvalue.length-1]=="Nehru Palace"
      ||categoryvalue[categoryvalue.length-1]=="Airport"|| 
      categoryvalue[categoryvalue.length-1]=="India Gate")
      {
       if(categoryvalue[categoryvalue.length-1]=="Saket" || 
       categoryvalue[categoryvalue.length-1]=="Nehru Palace"){
        setsearchParams({Area:categoryvalue})
        // console.log(searchParams)
        var params={
            Area:searchParams.getAll("Area"),
        }
       }else if(categoryvalue[categoryvalue.length-1]=="Airport"|| 
       categoryvalue[categoryvalue.length-1]=="India Gate"){
        setsearchParams({Near:categoryvalue})
        // console.log(searchParams)
        var params={
            Near:searchParams.getAll("Near"),
        }
       }
       else if(categoryvalue[categoryvalue.length-1]=="fully refundable"
      ){
        setsearchParams({Refundable:categoryvalue})
        // console.log(searchParams)
        var params={
            Refundable:searchParams.getAll("Refundable"),
        }
       }
        
          // console.log(params)
          dispatch(fetchData(params))
         
      }
      else  if(categoryvalue[categoryvalue.length-1]=="San Teodoro"
      ||categoryvalue[categoryvalue.length-1]=="Pegli"
      ||categoryvalue[categoryvalue.length-1]=="Calangute Beach"|| 
      categoryvalue[categoryvalue.length-1]=="Mandovi River")
      {
        if(categoryvalue[categoryvalue.length-1]=="San Teodoro" || 
        categoryvalue[categoryvalue.length-1]=="Pegli"){
         setsearchParams({Area:categoryvalue})
        //  console.log(searchParams)
         var params={
             Area:searchParams.getAll("Area"),
         }
        }else if(categoryvalue[categoryvalue.length-1]=="Calangute Beach"|| 
        categoryvalue[categoryvalue.length-1]=="Mandovi River"){
         setsearchParams({Near:categoryvalue})
        //  console.log(searchParams)
         var params={
             Near:searchParams.getAll("Near"),
         }
        }
        else if(categoryvalue[categoryvalue.length-1]=="fully refundable"
       ){
         setsearchParams({Refundable:categoryvalue})
        //  console.log(searchParams)
         var params={
             Refundable:searchParams.getAll("Refundable"),
         }
        }
         
          //  console.log(params)
           dispatch(fetchGoaData(params))
        
      }
      
  },[ categoryvalue,setsearchParams,searchParams,dispatch])
  // console.log(searchParams)
    return(
        <Box>
        <Box display={{base:"none" , md:"block"}}>
           <Text fontSize="3xl">Filters</Text>
           
           <CheckboxGroup 
           defaultValue={categoryvalue}
           onChange={categoryHandler}

          >
           <VStack spacing={1} direction='column' alignItems={"baseline"}>
           <Text fontSize={"2xl"}>Filter By Area</Text>
  <Checkbox value={area} >{area}</Checkbox>
  <Checkbox value={area1} >{area1}</Checkbox>
  <Text fontSize={"2xl"}>Filter By Popularity</Text>
  <Checkbox value={Near} >{Near}</Checkbox>
  <Checkbox value={Near1} >{Near1}</Checkbox>
  <Text  fontSize={"2xl"}> Filter Payment Type</Text>
  <Checkbox value={type} >{type}</Checkbox>
  <Checkbox value={type1} >{type1}</Checkbox>
  <Text  fontSize={"2xl"}> Filter Facility</Text>
  <Checkbox value={Facility} >{Facility}</Checkbox>
    
 
</VStack>
           </CheckboxGroup>
        </Box>
        <Box display={{base:"block",md:"none"}}>
        <Menu closeOnSelect={false}>
  <MenuButton as={Button} colorScheme='blue'>
    MenuItem
  </MenuButton>
  <MenuList minWidth='240px'>
    <MenuOptionGroup defaultValue='asc' title='Order' type='radio'>
      <MenuItemOption value='asc'>Ascending</MenuItemOption>
      <MenuItemOption value='desc'>Descending</MenuItemOption>
    </MenuOptionGroup>
    <MenuDivider />
    <MenuOptionGroup title='Country' type='checkbox'>
      <MenuItemOption value='email'>Email</MenuItemOption>
      <MenuItemOption value='phone'>Phone</MenuItemOption>
      <MenuItemOption value='country'>Country</MenuItemOption>
    </MenuOptionGroup>
  </MenuList>
</Menu>
        </Box>
       </Box>
    )
}