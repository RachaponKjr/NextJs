import { Grid, GridItem, Stack } from "@chakra-ui/react";
import img from "../../imgs/img.png";
import Image from "next/image";


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const Advert = () => {
  return(
  <Stack h={"min-content"} w={"100%"} py={4} px={{base:2,md:0}}>
    <Grid h={"min-content"} w={"100%"} templateColumns="repeat(2, 1fr)" gap={2} templateRows={"repeat(auto, 1fr)"}>
      <AdvertItem/>

      <GridItem colSpan={1} shadow={"md"}  borderRadius={10} overflow={"hidden"} display={{base:"none",md:"flex"}} h={{base:"auto",md:"17rem"}} w={"100%"}>
      <Image src={img} alt="img" style={{width:"100%", height:"100%",objectFit:"cover"}}/>
      </GridItem>
      <GridItem colSpan={1} shadow={"md"}borderRadius={10} overflow={"hidden"} display={{base:"none",md:"flex"}} h={{base:"auto",md:"17rem"}} w={"100%"}>
      <Image src={img} alt="img" style={{width:"100%", height:"100%",objectFit:"cover"}}/>
      </GridItem>

    <GridItem colSpan={2} shadow={"md"}borderRadius={10} overflow={"hidden"} h={"auto"} w={"100%"} display={{base:"flex",md:"none"}}>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Image src={img} alt="img" style={{width:"100%", height:"100%",objectFit:"cover"}}/></SwiperSlide>
        <SwiperSlide><Image src={img} alt="img" style={{width:"100%", height:"100%",objectFit:"cover"}}/></SwiperSlide>
      </Swiper>
    </GridItem>
      
    <AdvertItem/>
    <GridItem colSpan={2} shadow={"md"} borderRadius={10} overflow={"hidden"} h={"auto"} w={"100%"} display={{base:"flex",md:"none"}}>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Image src={img} alt="img" style={{width:"100%", height:"100%",objectFit:"cover"}}/></SwiperSlide>
        <SwiperSlide><Image src={img} alt="img" style={{width:"100%", height:"100%",objectFit:"cover"}}/></SwiperSlide>
      </Swiper>
    </GridItem>
    <AdvertItem/>
    <AdvertItem/>
      
      </Grid>

  </Stack>
  )
};

const AdvertItem = () => {
  return(
    <GridItem colSpan={2} shadow={"md"} borderRadius={10} overflow={"hidden"} h={{base:"auto",md:"15rem"}} w={"100%"}>
      <Image src={img} alt="img" style={{width:"100%", height:"100%",objectFit:"cover"}}/>
      </GridItem>
  )
}

export default Advert;
