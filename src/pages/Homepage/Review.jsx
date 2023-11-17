'use client'
import { Box, Stack } from '@chakra-ui/react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

import img from "../../imgs/img.png"

 const Review = () => {
  return (
    <Stack py={4} px={2} display={"flex"} flexdirection={"column"} h={"min-content"} spacing={2}>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box as="h4" color={"#14B99A"} fontSize={18} fontWeight={300}>
        Review คอนโด & บ้าน
        </Box>
        <Box
          as="h4"
          textDecoration={"underline"}
          display={{base:"none",md:"flex"}}
          alignItems={"center"}
          color={"#0091FD"}
        >
          Review อื่นๆ (605)
        </Box>
      </Box>
      {/* Tags */}
      <Box w={"100%"} h={{base:"1.5rem",md:"min-content"}} overflowX={"scroll"} display={"flex"} gap={2}>
      <Box as="h3" px={"1.5rem"} display={"flex"}  alignItems={"center"} py={"0.30rem"} bg={"rgb(0, 145, 253,0.3)"} borderRadius={50} color={"#0091FD"}  fontSize={14} fontWeight={500} whiteSpace={"nowrap"}>เกษตรศาสตร์ รัชโยธิน</Box>
      </Box>
      {/* Review */}
      <Stack display={"flex"}  overflow={"hidden"} flexDirection={{base:"column",md:"row"}} w={"100%"}>
        <Box bg={"rgb(166, 166, 166,0.2)"} w={{base:"100%",md:"65%"}} h={{base:"15rem",md:"25rem"}}>
        <Swiper pagination={true} modules={[Pagination]} style={{ width: "100%", height: "100%"}}>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
        </Box>
        <Stack w={{base:"100%",md:"35%"}} h={{ base:"min-content",md:"25rem"}} display={"flex"} justifyContent={{ base:"start",md:"space-between"}} flexDirection={"column"}>

            <Box cursor={"pointer"}  w={"100%"} h={"7rem"} display={"flex"} p={"0.5rem"} gap={"0.5rem"}>
                <Image src={img} alt="image" style={{ width: "10rem", height: "100%", objectFit: "cover",borderRadius:"10px",boxShadow: "1px 0px 11px -1px rgba(0,0,0,0.37)" }} />
                <Box display={"flex"} flexDirection={"column"} justifyContent={"space-between"}>
                    <Box as='h3' color={"#14B99A"} fontSize={{base:12,md:14}} fontWeight={500}>Livinginsider - Weekly Insight Report [05-11 Nov 2023]</Box>
                    <Box display={"flex"} flexDirection={"column"} fontSize={{base:10,md:12}}>
                        <Box as='span'>LivingInsider Report</Box>
                        <Box as='span'>2023-11-14</Box>
                    </Box>
                </Box>
            </Box>
            <Box cursor={"pointer"}  w={"100%"} h={"7rem"} display={"flex"} p={"0.5rem"} gap={"0.5rem"}>
                <Image src={img} alt="image" style={{ width: "10rem", height: "100%", objectFit: "cover",borderRadius:"10px",boxShadow: "1px 0px 11px -1px rgba(0,0,0,0.37)" }} />
                <Box display={"flex"} flexDirection={"column"} justifyContent={"space-between"}>
                    <Box as='h3' color={"#14B99A"} fontSize={{base:12,md:14}} fontWeight={500}>Livinginsider - Weekly Insight Report [05-11 Nov 2023]</Box>
                    <Box display={"flex"} flexDirection={"column"} fontSize={{base:10,md:12}}>
                        <Box as='span'>LivingInsider Report</Box>
                        <Box as='span'>2023-11-14</Box>
                    </Box>
                </Box>
            </Box>
            <Box cursor={"pointer"}  w={"100%"} h={"7rem"} display={"flex"} p={"0.5rem"} gap={"0.5rem"}>
                <Image src={img} alt="image" style={{ width: "10rem", height: "100%", objectFit: "cover",borderRadius:"10px",boxShadow: "1px 0px 11px -1px rgba(0,0,0,0.37)" }} />
                <Box display={"flex"} flexDirection={"column"} justifyContent={"space-between"}>
                    <Box as='h3' color={"#14B99A"} fontSize={{base:12,md:14}} fontWeight={500}>Livinginsider - Weekly Insight Report [05-11 Nov 2023]</Box>
                    <Box display={"flex"} flexDirection={"column"} fontSize={{base:10,md:12}}>
                        <Box as='span'>LivingInsider Report</Box>
                        <Box as='span'>2023-11-14</Box>
                    </Box>
                </Box>
            </Box>
            
           
        </Stack>
      </Stack>
      </Stack>
  )
}

export default Review