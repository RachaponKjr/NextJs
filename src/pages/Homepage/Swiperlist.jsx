'use client'
import { Box, Button, Stack } from "@chakra-ui/react"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Image from "next/image";

import img from "../../imgs/img.png";
import { useEffect, useState } from "react";


 const Swiperlist = ({tital1,tital2}) => {
  const [numShow, setNumShow] = useState(4)

// ตรวจสอบขนานหน้าจอเพื่อเเสดง
  function chack(params) {
    const w = window.innerWidth
    if (w < 768) {
      setNumShow(2)
    } else {
      setNumShow(4)
    }
  }
  useEffect(() => {
    window.addEventListener('resize', chack)
    return () => {
      window.removeEventListener('resize', chack)
    }
  },[])

  return (
    <Stack py={4} px={2} display={"flex"} flexdirection={"column"} h={"min-content"} spacing={2}>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box as="h4" color={"#14B99A"} fontSize={18} fontWeight={300}>
        {tital1}
        </Box>
        <Box
          as="h4"
          textDecoration={"underline"}
          display={{base:"none",md:"flex"}}
          alignItems={"center"}
          color={"#0091FD"}
        >
          {tital2}
        </Box>
      </Box>
      {/* Swiper */}
      <Box w={"100%"} h={"min-content"}>
      <Swiper
        slidesPerView={numShow}
        spaceBetween={30}
        navigation={true}
        modules={[ Navigation]}
        style={{ width: "100%", height: "100%" }}
      >
        <SwiperSlide style={{ width:"20rem" }}>
            <Box cursor={"pointer"}>
                <Image src={img} alt="img" style={{width:"100%",height:"100%",borderRadius:"10px"}}/>
                <Box as="h4" fontSize={{base:14,md:16}} cursor={"pointer"} _hover={{color:"#14B99A"}} mt={2} fontWeight={500}>อสังหาริมทรัพย์ ลุยเปิดโครงการใหม่ ทิ้งท้ายไตรมาส 4 ปี 2566</Box>
            </Box>
        </SwiperSlide>
        <SwiperSlide style={{ width:"20rem" }}>
            <Box cursor={"pointer"}>
                <Image src={img} alt="img" style={{width:"100%",height:"100%",borderRadius:"10px"}}/>
                <Box as="h4" fontSize={{base:14,md:16}} cursor={"pointer"} _hover={{color:"#14B99A"}} mt={2} fontWeight={500}>อสังหาริมทรัพย์ ลุยเปิดโครงการใหม่ ทิ้งท้ายไตรมาส 4 ปี 2566</Box>
            </Box>
        </SwiperSlide>
        <SwiperSlide style={{ width:"20rem" }}>
            <Box cursor={"pointer"}>
                <Image src={img} alt="img" style={{width:"100%",height:"100%",borderRadius:"10px"}}/>
                <Box as="h4" fontSize={{base:14,md:16}} cursor={"pointer"} _hover={{color:"#14B99A"}} mt={2} fontWeight={500}>อสังหาริมทรัพย์ ลุยเปิดโครงการใหม่ ทิ้งท้ายไตรมาส 4 ปี 2566</Box>
            </Box>
        </SwiperSlide>
        <SwiperSlide style={{ width:"20rem" }}>
            <Box cursor={"pointer"}>
                <Image src={img} alt="img" style={{width:"100%",height:"100%",borderRadius:"10px"}}/>
                <Box as="h4" fontSize={{base:14,md:16}} cursor={"pointer"} _hover={{color:"#14B99A"}} mt={2} fontWeight={500}>อสังหาริมทรัพย์ ลุยเปิดโครงการใหม่ ทิ้งท้ายไตรมาส 4 ปี 2566</Box>
            </Box>
        </SwiperSlide>
        <SwiperSlide style={{ width:"20rem" }}>
            <Box cursor={"pointer"}>
                <Image src={img} alt="img" style={{width:"100%",height:"100%",borderRadius:"10px"}}/>
                <Box as="h4" fontSize={{base:14,md:16}} cursor={"pointer"} _hover={{color:"#14B99A"}} mt={2} fontWeight={500}>อสังหาริมทรัพย์ ลุยเปิดโครงการใหม่ ทิ้งท้ายไตรมาส 4 ปี 2566</Box>
            </Box>
        </SwiperSlide>
        
      </Swiper>
      </Box>
      </Stack>
  )
}

export default Swiperlist
