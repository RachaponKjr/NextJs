"use client";
import { Box, Button, Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import ReactSwipe from "react-swipe";

import img1 from "../../imgs/img1.jpg";


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import {  Navigation } from 'swiper/modules';
const Living = () => {
    let reactSwipeEl;
  return (
    <>
    <Stack display={{base:"none",md:"flex"}} py={4}>

      {/* Size 1024 */}
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box as="h4" color={"#14B99A"} fontSize={18} fontWeight={300}>
          LivingInsider Channels
        </Box>
        <Box
          as="h4"
          textDecoration={"underline"}
          display={"flex"}
          alignItems={"center"}
          color={"#0091FD"}
        >
          วีดีโออื่นๆ
        </Box>
      </Box>
      {/* ประกาศบ้านยอดนิยม */}
      <Stack >
        <Grid templateColumns={"repeat(3, 1fr)"} gap={2} templateRows={"repeat(2, 1fr)"}>
            <GridItem colSpan={2} rowSpan={2} bg={"rgb(166, 166, 166,0.2)"} />
            <GridItem h={"12rem"} bg={"rgb(166, 166, 166,0.2)"} />
            <GridItem h={"12rem"} bg={"rgb(166, 166, 166,0.2)"} />
        </Grid>
         {/* Swiper */}
      <Box h={"min-content"} w={"100%"} position={"relative"} my={2}>
        <ReactSwipe
          swipeOptions={{ continuous: false }}
          ref={(el) => (reactSwipeEl = el)}
        >
          <Stack display={"flex"} flexDirection={"row"} justifyContent={"space-between"}>
            <Box w={"18rem"} h={"15rem"} cursor={"pointer"}>
                <Image src={img1} alt="Image 1" style={{width:"100%", height:"8rem",objectFit:"cover"}} />
                <Box as="h4" fontSize={14}  mt={2} h={"2.5rem"} lineHeight={1.2}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, odio.</Box>
                <Text fontSize={12} py={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptates dolorem odio ipsa, numquam autem?</Text>
            </Box>
            <Box w={"18rem"} h={"15rem"} cursor={"pointer"}>
                <Image src={img1} alt="Image 1" style={{width:"100%", height:"8rem",objectFit:"cover"}} />
                <Box as="h4" fontSize={14}  mt={2} h={"2.5rem"} lineHeight={1.2}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, odio.</Box>
                <Text fontSize={12} py={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptates dolorem odio ipsa, numquam autem?</Text>
            </Box>
            <Box w={"18rem"} h={"15rem"} cursor={"pointer"}>
                <Image src={img1} alt="Image 1" style={{width:"100%", height:"8rem",objectFit:"cover"}} />
                <Box as="h4" fontSize={14}  mt={2} h={"2.5rem"} lineHeight={1.2}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, odio.</Box>
                <Text fontSize={12} py={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptates dolorem odio ipsa, numquam autem?</Text>
            </Box>
            <Box w={"18rem"} h={"15rem"} cursor={"pointer"}>
                <Image src={img1} alt="Image 1" style={{width:"100%", height:"8rem",objectFit:"cover"}} />
                <Box as="h4" fontSize={14}  mt={2} h={"2.5rem"} lineHeight={1.2}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, odio.</Box>
                <Text fontSize={12} py={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptates dolorem odio ipsa, numquam autem?</Text>
            </Box>
          </Stack>
        </ReactSwipe>
        <Button onClick={() => reactSwipeEl.prev()} position={"absolute"} top={"20%"} left={-5} p={0} w={"3rem"} h={"3rem"} borderRadius={100} cursor={"pointer"} color={"white"} bg={"#14B99A"} ><RiArrowDropLeftLine size={40}/></Button>
        <Button onClick={() => reactSwipeEl.next()} position={"absolute"} top={"20%"} right={-5} p={0} w={"3rem"}  h={"3rem"} borderRadius={100} cursor={"pointer"} color={"white"} bg={"#14B99A"}><RiArrowDropRightLine  size={40}/></Button>
      </Box>
      </Stack>
    </Stack>

    {/* // Mobile */}
    <Stack display={{base:"flex",md:"none"}} mt={2} px={2}>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box as="h4" color={"#14B99A"} fontSize={18} fontWeight={300}>
          LivingInsider Channels
        </Box>
        <Box
          as="h4"
          textDecoration={"underline"}
          display={"flex"}
          alignItems={"center"}
        >
          วีดีโออื่นๆ
        </Box>
      </Box>
      <Box h={"min-content"} w={"100%"}>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        style={{ width: "100%", height: "100%" }}
      >
        <SwiperSlide><Box w={"100%"} h={"min-content"}  cursor={"pointer"}>
                <Box w={"100%"} h={"5rem"}>
                <Image src={img1} alt="Image 1" style={{width:"100%", height:"100%",objectFit:"cover",borderRadius:"0.5rem"}} />
                </Box>
                <Box as="h4" fontSize={12}  mt={2} h={"2.5rem"} >Lorem ipsum dolor sit amet.</Box>
            </Box></SwiperSlide>
            <SwiperSlide><Box w={"100%"} h={"min-content"}  cursor={"pointer"}>
                <Box w={"100%"} h={"5rem"}>
                <Image src={img1} alt="Image 1" style={{width:"100%", height:"100%",objectFit:"cover",borderRadius:"0.5rem"}} />
                </Box>
                <Box as="h4" fontSize={12}  mt={2} h={"2.5rem"} >Lorem ipsum dolor sit amet.</Box>
            </Box></SwiperSlide><SwiperSlide><Box w={"100%"} h={"min-content"}  cursor={"pointer"}>
                <Box w={"100%"} h={"5rem"}>
                <Image src={img1} alt="Image 1" style={{width:"100%", height:"100%",objectFit:"cover",borderRadius:"0.5rem"}} />
                </Box>
                <Box as="h4" fontSize={12}  mt={2} h={"2.5rem"} >Lorem ipsum dolor sit amet.</Box>
            </Box></SwiperSlide>
      </Swiper>
      </Box>
    </Stack>
    </>
  );
};

export default Living;
