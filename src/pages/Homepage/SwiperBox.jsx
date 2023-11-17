"use client";
import { Box, Button,Grid, GridItem, Stack } from "@chakra-ui/react";
import ReactSwipe from "react-swipe";
// ICON
import { IoIosArrowForward } from "react-icons/io";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";

const SwiperBox = () => {
  let reactSwipeEl;
  return (
    <Stack my={4}>
      {/* Hearder Swiper */}
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box as="h4" color={"#14B99A"} fontSize={18} fontWeight={300}>
          ทำเลยอดนิยม
        </Box>
        <Box
          as="h4"
          textDecoration={"underline"}
          display={"flex"}
          alignItems={"center"}
        >
          ทำเลอื่นๆ
          <IoIosArrowForward />
        </Box>
      </Box>
      {/* Swiper */}
      <Box h={"min-content"} w={"100%"} position={"relative"} >
        <ReactSwipe
          swipeOptions={{ continuous: false }}
          ref={(el) => (reactSwipeEl = el)}
          style={{ width: "100%", height: "100%",display:"flex",flexDirection:"row"}}
        >
          <SelectionOne />

        </ReactSwipe>
        <Button onClick={() => reactSwipeEl.prev()} position={"absolute"} top={"45%"} left={5} p={0} w={"3rem"} h={"3rem"} borderRadius={100} cursor={"pointer"} color={"white"} bg={"#14B99A"} ><RiArrowDropLeftLine size={40}/></Button>
        <Button onClick={() => reactSwipeEl.next()} position={"absolute"} top={"45%"} right={5} p={0} w={"3rem"}  h={"3rem"} borderRadius={100} cursor={"pointer"} color={"white"} bg={"#14B99A"}><RiArrowDropRightLine  size={40}/></Button>
      </Box>
    </Stack>
  );
};

const SelectionOne = () => {
  return (

    <Box w={"100%"} display={"block"}>
      <Grid
        h="400px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(6, auto)"
        gap={1}
        rowGap={4}
      >
        <GridItem colSpan={2} bg={"rgb(166, 166, 166,0.2)"} _hover={{bg:"black"}} borderRadius={20}/>
        <GridItem bg={"pink"} borderRadius={20}/>
        <GridItem colSpan={2} bg={"green"} borderRadius={20}/>
        <GridItem bg={"black"} borderRadius={20}/>
        <GridItem bg={"darkgrey"} borderRadius={20}/>
        <GridItem colSpan={2}bg={"rebeccapurple"} borderRadius={20}/>
        <GridItem bg={"orange"} borderRadius={20}/>
        <GridItem colSpan={2} bg={"lightblue"} borderRadius={20}/>

      </Grid>
    </Box>
  );
};

export default SwiperBox;
