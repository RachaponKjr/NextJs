import { Box, Grid, GridItem, Stack } from "@chakra-ui/react"
import { IoIosArrowForward } from "react-icons/io"

const Announce = () => {
  return (
    <Stack py={4}>
    <Stack my={4} px={2}>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box as="h4" color={"#14B99A"} fontSize={18} fontWeight={300}>ประกาศคอนโดยอดนิยม</Box>
        <Box
          as="h4"
          textDecoration={"underline"}
          display={"flex"}
          alignItems={"center"}
          color={"#0091FD"}
        >
          คอนโดทั้งหมด
          <IoIosArrowForward />
        </Box>
      </Box>
      {/* ประกาศคอนโด */}
      <Stack p={"1rem"} border={"1px solid #14B99A"} borderRadius={10}>
        <Grid gap={"0.5rem"} templateColumns={{base:"repeat(3, 1fr)",md:"repeat(6, 1fr)"}} templateRows={{base:"repeat(4, 1fr)",md:"repeat(2, 1fr)"}}>
            <GridItem h={{base:"8rem",md:"11rem"}} bg={"rgb(166, 166, 166,0.2)"} borderRadius={10}/>
            <GridItem h={{base:"8rem",md:"11rem"}} bg={"rgb(166, 166, 166,0.2)"} borderRadius={10}/>
            <GridItem h={{base:"8rem",md:"11rem"}} bg={"rgb(166, 166, 166,0.2)"} borderRadius={10}/>
            <GridItem colSpan={3} h={{base:"8rem",md:"11rem"}} bg={"rgb(166, 166, 166,0.2)"} borderRadius={10}/>
            <GridItem h={{base:"8rem",md:"11rem"}} bg={"rgb(166, 166, 166,0.2)"} borderRadius={10}/>
            <GridItem colSpan={2} h={{base:"8rem",md:"11rem"}} bg={"rgb(166, 166, 166,0.2)"} borderRadius={10}/>
            <GridItem h={{base:"8rem",md:"11rem"}} bg={"rgb(166, 166, 166,0.2)"} borderRadius={10}/>
            <GridItem h={{base:"8rem",md:"11rem"}} bg={"rgb(166, 166, 166,0.2)"} borderRadius={10}/>
            <GridItem  h={{base:"8rem",md:"11rem"}} bg={"rgb(166, 166, 166,0.2)"} borderRadius={10}/>
        </Grid>
        <Stack w={"100%"} h={{base:"2rem",md:"auto"}} display={"flex"} overflowX={{base:"scroll",md:"unset"}} flexDirection={"row"} flexWrap={{base:"nowrap",md:"wrap"}}>
            <Box as="h3" minWidth={"min-content"} whiteSpace={"nowrap"} px={"1.5rem"} py={"0.30rem"} bg={"rgb(0, 145, 253,0.2)"} borderRadius={50} color={"#0091FD"}  fontSize={14} fontWeight={500}>บ้านใกล้ BTS</Box>
        </Stack>
      </Stack>
    </Stack>

    {/* บ้านยอดนิยม */}
    <Stack px={2}>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box as="h4" color={"#14B99A"} fontSize={18} fontWeight={300}>ประกาศบ้านยอดนิยม</Box>
        <Box
          as="h4"
          textDecoration={"underline"}
          display={"flex"}
          alignItems={"center"}
          color={"#0091FD"}
        >
          บ้านทั้งหมด 
          <IoIosArrowForward />
        </Box>
      </Box>
      {/* ประกาศบ้านยอดนิยม */}
      <Stack p={"1rem"} border={"1px solid #14B99A"} borderRadius={10}>
        <Grid gap={"0.5rem"} templateColumns={{base:"repeat(3, 1fr)",md:"repeat(6, 1fr)"}} templateRows={{base:"repeat(2, 1fr)",md:"repeat(1, 1fr)"}}>
            <GridItem colSpan={2} h={{base:"8rem",md:"11rem"}} bg={"rgb(	166, 166, 166,0.1)"} borderRadius={10}/>
            <GridItem h={{base:"8rem",md:"11rem"}} bg={"rgb(166, 166, 166,0.2)"} borderRadius={10}/>
            <GridItem h={{base:"8rem",md:"11rem"}} bg={"rgb(166, 166, 166,0.2)"} borderRadius={10}/>
            <GridItem h={{base:"8rem",md:"11rem"}} bg={"rgb(166, 166, 166,0.2)"} borderRadius={10}/>
            <GridItem  h={{base:"8rem",md:"11rem"}} bg={"rgb(166, 166, 166,0.2)"} borderRadius={10}/>

        </Grid>
        <Stack w={"100%"} h={{base:"2rem",md:"auto"}} display={"flex"} overflowX={{base:"scroll",md:"unset"}} flexDirection={"row"} flexWrap={{base:"nowrap",md:"wrap"}}>
            <Box as="h3" minWidth={"min-content"} whiteSpace={"nowrap"} px={"1.5rem"} py={"0.30rem"} bg={"rgb(0, 145, 253,0.2)"} borderRadius={50} color={"#0091FD"}  fontSize={14} fontWeight={500}>บ้านใกล้ BTS</Box>
        </Stack>
      </Stack>
    </Stack>
    </Stack>
  )
}

export default Announce