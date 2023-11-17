import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Input,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import Image from "next/image";
import img from "../../imgs/img.png";
import img1 from "../../imgs/img1.jpg";
import sold from "../../imgs/sold.png";
// ICONS
import { MdOutlineHomeWork, MdArrowOutward } from "react-icons/md";
import ListSelect from "./ListSelect";
import SwiperBox from "./SwiperBox";
import Advert from "./Advert";
import CardDeluxe from "./CardDeluxe";
import Announce from "./Announce";
import Living from "./Living";
import { Review } from "./Review";
import { Swiperlist } from "./Swiperlist";
import Card from "./Card";
import Footer from "./Footer";
import { IoIosArrowForward } from "react-icons/io";
import CardItem from "@/components/Card/CardItem";
const HomePage = () => {
  const listSearch = [
    {
      tital: "หาเช่า",
      icon: <MdOutlineHomeWork size={20} color="#4A90E2" />,
    },
    {
      tital: "บทความ",
      icon: <MdOutlineHomeWork size={20} color="#4A90E2" />,
    },
    {
      tital: "ประกันภัยให้เช่าหายห่วง",
      icon: <MdOutlineHomeWork size={20} color="#4A90E2" />,
    },
    {
      tital: "ทรัพย์ใกล้ฉัน",
      icon: <MdOutlineHomeWork size={20} color="#4A90E2" />,
    },
    {
      tital: "คอนโดใกล้ BTS",
      icon: <MdOutlineHomeWork size={20} color="#4A90E2" />,
    },
    {
      tital: "คอนโดใกล้ MRT",
      icon: <MdOutlineHomeWork size={20} color="#4A90E2" />,
    },
    {
      tital: "คอนโดใกล้มหาวิทยาลัย",
      icon: <MdOutlineHomeWork size={20} color="#4A90E2" />,
    },
  ];
  return (
    <>
    <Box bg={{ base: "transparent", md: "#F3FAFF" }}>
      <Box
        w={"100%"}
        h={"25rem"}
        bg={"#e0dfda"}
        zIndex={{ base: -1, md: 0 }}
        position={{ base: "absolute", md: "relative" }}
      >
        <Image
          src={img1}
          alt="hero"
          style={{ width: "100%", height: "100%" }}
        />
        {/* Input Search */}
      </Box>
      <Container size={{ base: "ss", md: "xl2" }} position={"relative"}>
        <Stack
          lineHeight={"1rem"}
          position={"relative"}
          top={"-8rem"}
          display={"flex"}
          pt={{ base: "4rem", md: "0" }}
          flexDirection={{ base: "column-reverse", md: "column" }}
          mb={{ base: "-4rem", md: "-4rem" }}
        >
          <Box
            display={"flex"}
            flexDirection={{ base: "column", md: "column" }}
            maxW={"100%"}
            w={"100%"}
          >
            <Box
              as="h1"
              display={{ base: "none", md: "flex" }}
              fontSize={"24px"}
              color={"white"}
            >
              เว็บประกาศ ขาย ให้เช่า คอนโด บ้าน ที่ดิน ยอดนิยม ดีที่สุด
              ลงประกาศฟรี
            </Box>

            {/* Mobile */}
            <Box
              as="h1"
              mt={{ base: "0rem", md: "0" }}
              display={{ base: "flex", md: "none" }}
              fontSize={"16px"}
              w={"100%"}
              justifyContent={"center"}
              textAlign={"center"}
              color={"white"}
            >
              เว็บประกาศ ขาย ให้เช่า คอนโด บ้าน ที่ดิน<br></br> ยอดนิยม ดีที่สุด
              ลงประกาศฟรี
            </Box>
            <Box display={{ base: "none", md: "flex" }} mt={{base:0,md:2}}>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  gap: "1rem",
                  fontSize: "16px",
                  color: "white",
                }}
              >
                <li>คอนโดหรู</li>
                <li>เช่าคอนโด</li>
                <li>ขายคอนโด</li>
                <li>เช้าบ้าน</li>
                <li>ขายบ้าน</li>
                <li>ขายที่ดิน</li>
              </ul>
            </Box>

            {/* Mobile */}
            <Box
              display={{ base: "flex", md: "none" }}
              my={2}
              w={"100%"}
              justifyContent={"center"}
            >
              <ul
                className="ullistname"
                style={{
                  listStyle: "none",
                  display: "flex",
                  fontSize: "16px",
                  color: "white",
                  gap: "0.2rem",
                  maxWidth: "25rem",
                  flexDirection: "row",
                  height: "min-content",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <li>คอนโดหรู</li>
                <li>เช่าคอนโด</li>
                <li>ขายคอนโด</li>
                <li>เช้าบ้าน</li>
                <li>ขายบ้าน</li>
                <li>ขายที่ดิน</li>
              </ul>
            </Box>
          </Box>
          {/* Box input */}
          <Stack
            bg={"white"}
            boxShadow="lg"
            p={"1.5rem"}
            spacing={4}
            borderRadius={20}
            display={{ base: "none", md: "flex" }}
          >
            {/* list in search bar */}
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                overflowX: "scroll",
              }}
            >
              <li>
                <BtnSearch
                  tital="หาซื้อ"
                  icon={<MdOutlineHomeWork size={20} color="#4A90E2" />}
                />
              </li>
              {listSearch.map((item, index) => {
                return (
                  <li
                    key={index}
                    style={{ borderLeft: "2px solid #BAC6DA" }}
                    _h
                  >
                    <BtnSearch tital={item.tital} icon={item.icon} />
                  </li>
                );
              })}
            </ul>
            <Box
              h={"2.5rem"}
              display={"flex"}
              alignItems={"center"}
              gap={"1rem"}
            >
              <Input
                placeholder="กรอกชื่อ ทำเล /โครงการ /รถไฟฟ้า"
                w={"calc(100% - 2rem)"}
                h={"100%"}
                borderRadius={50}
              />
              <Button
                rightIcon={<MdArrowOutward size={25} />}
                fontSize={18}
                w={"10rem"}
                h={"100%"}
                borderRadius={50}
                color={"white"}
                bg={"#4A90E2"}
                _hover={{ bg: "#4A90E2" }}
                display={"flex"}
                alignItems={"center"}
              >
                ค้นหา
              </Button>
            </Box>
          </Stack>

          {/* Mobile Input */}
          <Stack>
            <Box
              h={"2.5rem"}
              display={{ base: "flex", md: "none" }}
              alignItems={"center"}
              mt={"10rem"}
              mb={"2rem"}
              px={2}
            >
              <Input
                placeholder="กรอกชื่อ ทำเล /โครงการ /รถไฟฟ้า"
                w={"100%"}
                h={"100%"}
                borderRadius={50}
                bg={"white"}
              />
            </Box>
          </Stack>
        </Stack>

        {/* เมนูให้เลือก */}
        <ListSelect />
        {/* Swiper */}
        {/* <SwiperBox /> */}

        {/* อสังหาฯ ใหม่แนะนำ */}
        <Stack py={4} px={2} h={"auto"}>
          <Box as="h4" color={"#14B99A"} fontSize={18} fontWeight={500}>
            อสังหาฯ ใหม่แนะนำ
          </Box>
          {/* Card New Product */}
          <Grid templateColumns={"repeat(2, 1fr)"} gap={2} h={"auto"}>
            <Card />
            <Card />
          </Grid>
          {/* </Box> */}
        </Stack>

        {/* ค้นหาจากทำเลที่คุณต้องการ */}
        <Stack py={4} px={2} h="min-content">
          <Box as="h4" color={"#14B99A"} fontSize={18} fontWeight={500}>
            ค้นหาจากทำเลที่คุณต้องการ
          </Box>
          <Grid
            templateColumns={"repeat(2, 1fr)"}
            templateRows={{ base: "repeat(2, 1fr)", md: "repeat(1, 1fr)" }}
            w={"100%"}
            h={"15rem"}
            gap={2}
          >
            <GridItem
              rowSpan={{ base: 2, md: 1 }}
              borderRadius={10}
              h={"auto"}
              boxShadow={"md"}
              overflow={"hidden"}
            >
              <Box w={{ base: "100%", md: "auto" }} h={"auto"}>
                <Image
                  src={img}
                  alt="img"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
            </GridItem>
            <GridItem
              rowSpan={{ base: 2, md: 1 }}
              borderRadius={10}
              h={"auto"}
              boxShadow={"md"}
              overflow={"hidden"}
            >
              <Box w={{ base: "100%", md: "auto" }} h={"auto"}>
                <Image
                  src={img}
                  alt="img"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
            </GridItem>
          </Grid>
        </Stack>

        {/* โฆษนา */}
        <Advert />

        {/* Cards */}
        <Stack  py={4} px={{base:2,md:0}} w={"100%"} maxW={"100%"} h={"min-content"}>
          {/* Herder */}
          <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
            <Box as="h4" color={"#14B99A"} fontSize={18} fontWeight={300}>
              ประกาศล่าสุด
            </Box>
            <Box
              as="h4"
              textDecoration={"underline"}
              display={"flex"}
              alignItems={"center"}
              color={"#0091FD"}
            >
              ประกาศทั้งหมด
              <IoIosArrowForward />
            </Box>
          </Stack>
          {/* Item Card */}
          <SimpleGrid minChildWidth={{base:"10rem",md:"15rem",lg:"10rem"}} gap={2}>
              <CardItem/>
              <CardItem/>
              <CardItem/>
              <CardItem/>
          </SimpleGrid>
        </Stack>

        {/* บ้านและคอนโดหรู */}
        <CardDeluxe />

        {/* ประกาศ */}
        <Announce />

        {/* LivingInsider */}
        <Living />

        {/* Review */}
        <Review />

        {/* Swiper */}
        <Swiperlist
          tital1={"Knowledge ความรู้ดีๆเกี่ยวกับที่อยู่อาศัย"}
          tital2={"Knowledge อื่นๆ (1.1k)"}
        />
        <Swiperlist
          tital1={"News ข่าวอสังหาฯน่าสนใจ"}
          tital2={"News อื่นๆ (8.6k)"}
        />

        <Box
          w={"100%"}
          mt={"1rem"}
          h={{ base: "2rem", md: "2.5rem" }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Button
            fontSize={{ base: 14, md: 16 }}
            textDecoration={"underline"}
            bg={"#F5A623"}
            h={"100%"}
            _hover={{
              bg: "white",
              color: "#F5A623",
              border: "1px solid #F5A623",
            }}
            borderRadius={50}
            px={"3rem"}
            color={"white"}
          >
            ดูบทความทั้งหมด
          </Button>
        </Box>


        {/* ยอดขาย */}
        <Box
          gap={4}
          w={"100%"}
          my={"1rem"}
          borderRadius={10}
          
          p={{ base: 2, md: "2rem" }}
          h={{ base: "min-content" }}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          border={"1px solid #20B699"}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            w={"100%"}
            h={"100%"}
            textAlign={"center"}
          >
            <Box as="h4" fontSize={{ base: "18px", md: "3vw" }}>
              ทําไมผู้ใช้งานถึงเลือก{" "}
              <Box as="span" color={"#20B699"}>
                Livinginsider
              </Box>{" "}
              ?
            </Box>
            <Box as="h6" fontSize={{ base: "12px", md: "16px" }}>
              ( ม.ค. 62 - ปัจจุบัน )
            </Box>
          </Box>

          <Box
            w={"100%"}
            h={"auto"}
            maxW={"100%"}
            display={"flex"}
            flexDuration={"column"}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            <Box
              w={{ base: "30%" }}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box w={"60%"} h={"60%"}>
                <Image
                  src={sold}
                  alt="sold"
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                lineHeight={1.3}
              >
                <Box as="h6" fontSize={{ base: "12px", lg: "1.3vw" }}>
                  ปิดการขายได้
                </Box>
                <Box
                  as="h4"
                  color={"orange"}
                  fontSize={{ base: "20px", lg: "3vw" }}
                  fontWeight={"bold"}
                >
                  107,742
                </Box>
                <Box as="h6" fontSize={{ base: "12px", lg: "1.3vw" }}>
                  ยูนิต
                </Box>
              </Box>
            </Box>
            <Box
              w={{ base: "30%" }}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box w={"60%"} h={"60%"}>
                <Image
                  src={sold}
                  alt="sold"
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                lineHeight={1.3}
              >
                <Box as="h6" fontSize={{ base: "12px", lg: "1.3vw" }}>
                  ปิดการขายได้
                </Box>
                <Box
                  as="h4"
                  color={"orange"}
                  fontSize={{ base: "20px", lg: "3vw" }}
                  fontWeight={"bold"}
                >
                  107,742
                </Box>
                <Box as="h6" fontSize={{ base: "12px", lg: "1.3vw" }}>
                  ยูนิต
                </Box>
              </Box>
            </Box>
            <Box
              w={{ base: "30%" }}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box w={"60%"} h={"60%"}>
                <Image
                  src={sold}
                  alt="sold"
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                lineHeight={1.3}
              >
                <Box as="h6" fontSize={{ base: "12px", lg: "1.3vw" }}>
                  ปิดการขายได้
                </Box>
                <Box
                  as="h4"
                  color={"orange"}
                  fontSize={{ base: "20px", lg: "3vw" }}
                  fontWeight={"bold"}
                >
                  107,742
                </Box>
                <Box as="h6" fontSize={{ base: "12px", lg: "1.3vw" }}>
                  ยูนิต
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Footer */}
      <Footer />
    </Box>


    
    </>
  );
};

const BtnSearch = ({ tital, icon }) => {
  return (
    <Button
      as="h4"
      leftIcon={icon}
      mx={2}
      bg={"transparent"}
      cursor={"pointer"}
      h={"2rem"}
      fontSize={"13px"}
      p={2.5}
      borderRadius={50}
      _hover={{ bg: "rgb(	32, 182, 153,0.7)", color: "white" }}
    >
      {tital}
    </Button>
  );
};



export default HomePage;
