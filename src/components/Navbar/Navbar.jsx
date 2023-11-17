"use client";

import Image from "next/image";

import {  Box, Button, Container, Stack } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
// Icons
import { LiaHomeSolid } from "react-icons/lia";
import { FaHeart } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";


import { useEffect } from "react";
import img from "../../imgs/img.png";
import MobileNavbar from "./MobileNavbar";
const Navbar = () => {
  // เปลี่ยนสีพื้น Navbar
  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY > 0) {
          const navbar = document.getElementById("navbar");
          navbar.style.background =
            "linear-gradient(90deg, rgba(13,190,153,1) 45%, rgba(74,144,226,1) 100%, rgba(0,212,255,1) 100%)";
        } else {
          document.getElementById("navbar").style.background = "transparent";
        }
        return () => {
          document.getElementById("navbar").style.background = "transparent";
        };
      },
      []
    );
  });
  return (
    <>
    {/* // Navbar Component */}
    <Stack
      position={"fixed"}
      w={"100%"}
      zIndex={2}
      id="navbar"
      transitionDuration={"0.5s"}
      display={{ base: "none", md: "flex" }}
    >
      <Container maxW="container.xl">
        <Stack
          direction="row"
          align="center"
          h={"6rem"}
          py={"1rem"}
          justifyContent={"space-between"}
          
        >
          {/* Logo imges */}
          <Box  bg={"rgb(166, 166, 166,0.2)"} w={"30%"} h={"100%"} display={{md:"none",lg:"flex"}}>
          
            <Image src={img} alt="logo" style={{width:"100%",height:"100%",objectFit:"contain"}}  />
          </Box>
          {/* Manu Navbar */}
          <Stack w={{md:"100%",lg:"70%"}}>
            {/* TOP */}
            <Stack
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"end"}
              height={"1rem"}
              spacing={0}
              color={"white"}
              fontSize={"14px"}
              position={"relative"}
            >
              <Box bg={"rgb(166, 166, 166,0.2)"} position={"absolute"} left={0} w={"40%"} h={"4rem"} display={{md:"flex",lg:"none"}}>
          <Image src={img} alt="logo" style={{width:"100%",height:"100%",objectFit:"contain"}}  />
        </Box>
              {/* Login and Register */}
              <Box display={"flex"} gap={2} mx={2}>
                <Box
                  as="h4"
                  cursor={"pointer"}
                  px={2}
                  py={0.5}
                  borderRadius={50}
                  _hover={{ bg: "#ffffff", color: "#20B699" }}
                >
                  เข้าสู่ระบบ
                </Box>
                <Box as="span">/</Box>
                <Box
                  as="h4"
                  cursor={"pointer"}
                  px={2}
                  py={0.5}
                  borderRadius={50}
                  _hover={{ bg: "#ffffff", color: "#20B699" }}
                >
                  สมัครสมาชิกฟรี
                </Box>
              </Box>

              <Box
                display={"flex"}
                alignItems={"center"}
                px={2}
                borderLeft={"1px solid white"}
                h={"100%"}
                gap={2}
              >
                <LiaHomeSolid size={20} cursor={"pointer"} />
                <FaHeart size={18} fill="red" cursor={"pointer"} />
              </Box>
              <Box
                borderLeft={"1px solid white"}
                h={"100%"}
                display={"flex"}
                alignItems={"center"}
              >
                <Select
                  outline={"none"}
                  _focus={{ outline: "none" }}
                  border={"none"}
                  h={"100%"}
                  size="md"
                  cursor={"pointer"}
                >
                  <option>TH</option>
                  <option>EN</option>
                </Select>
              </Box>
              <Box display={"flex"} h={"100%"} alignItems={"center"}>
                <Box
                  as="h6"
                  px={2}
                  height={"100%"}
                  display={"flex"}
                  alignItems={"center"}
                  cursor={"pointer"}
                >
                  คู้มือการใช้งาน
                </Box>
                <Box
                  as="h6"
                  px={2}
                  height={"100%"}
                  borderLeft={"1px solid white"}
                  display={"flex"}
                  alignItems={"center"}
                  cursor={"pointer"}
                >
                  ติดต่อเรา
                </Box>
              </Box>
            </Stack>
            {/* Bottom */}
            <Stack display={"flex"} justifyContent={"end"} flexDirection={"row"} w={"100%"} mt={"0.5rem"}>
              {/* ManuBar */}
              <ManuBtn text={"หน้าเเรก"} />
              <ManuBtn text={"รายการ ขาย เช่า"} />
              <ManuBtn text={"รายการเเนะนำ"} />
              <ManuBtn text={"ขายราคาทุน"} />
              <ManuBtn text={"AgentClub"} />
              <ManuBtn text={"Looking"} />
              <Button
                leftIcon={<FaPlusCircle size={16} />}
                borderRadius={50}
                fontSize={"13px"}
                color={"white"}
                bg={"#F5A623"}
                _hover={{ bg: "white", color: "#F5A623" }}
                size={"sm"}
                w={"min-content"}
              >
                สร้างประกาศ
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>


    {/* Mobile */}
    <MobileNavbar/>
</>
  );
};
const ManuBtn = ({ text }) => {
  return (
    <>
      <Box
        as={"p"}
        cursor={"pointer"}
        fontSize={"13px"}
        display={"flex"}
        alignItems={"center"}
        transitionDuration={"0.3s"}
        fontWeight={300}
        color={"white"}
        px={2}
        py={1}
        _hover={{ bg: "white", color: "#20B699" }}
        borderRadius={50}
      >
        {text}
      </Box>
    </>
  );
};


export default Navbar;
