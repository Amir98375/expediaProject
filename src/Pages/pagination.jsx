import { Button,Box } from "@chakra-ui/react"

export const PaginationComponent =({
    currentpage,
    lastpage,
    onpagechange
})=>{
    const arr = new Array(lastpage).fill(0)
    return (
        <Box>
            {arr.map((item,page)=><Button onClick={()=>onpagechange(page+1)} disabled={(page+1)===currentpage}>{page+1}</Button>)}
        </Box>
    )
}