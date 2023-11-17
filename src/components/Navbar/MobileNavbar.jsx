'use client'
import { Avatar, Box, Select, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { IoIosContacts, IoIosMedal, IoMdApps, IoMdHeartEmpty } from 'react-icons/io'
import { VscMegaphone } from 'react-icons/vsc'
import img from "../../imgs/img.png";

const MobileNavbar = () => {



    // เปลี่ยนสีพื้น Navbar
    useEffect(() => {
        window.addEventListener(
          "scroll",
          () => {
            if (window.scrollY > 0) {
              const navbar = document.getElementById("moblieNavbar");
              navbar.style.background =
                "linear-gradient(90deg, rgba(13,190,153,1) 45%, rgba(74,144,226,1) 100%, rgba(0,212,255,1) 100%)";
            } else {
              document.getElementById("moblieNavbar").style.background = "transparent";
            }
            return () => {
              document.getElementById("moblieNavbar").style.background = "transparent";
            };
          },
          []
        );
      });
  return (
    <Stack >
    {/* // Mobile */}
    <Stack id="moblieNavbar" zIndex={100} bg={"transparent"} position={"fixed"}  w={"100%"} top={0} display={{ base: "flex", md: "none" }} flexDirection={"row"} h={"3rem"} alignItems={"center"} justifyContent={"space-between"} px={2}>
      {/* Image */}
      <Box width={"5rem"}>
    <Image src={img} alt="logo" style={{overflow:"hidden",width:"100%",height:"100%",objectFit:"contain"}}  />
    </Box>
    <Stack display={"flex"} flexDirection={"row"} alignItems={"center"}>
    <Avatar src='https://bit.ly/broken-link'size={"sm"} />
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

    </Stack>
    </Stack>
    {/* Foot Navbar Mobile */}
    <Stack zIndex={2} w={"100%"} px={0} h={"4rem"} bg={"#20B699"} position={"fixed"} display={{ base: "flex", md: "none" }} flexDirection={"row"} alignItems={"center"} justifyContent={"space-around"}  bottom={0}>
      {/* Icon */}
      <Box display={"flex"} cursor={"pointer"} gap={1} flexDirection={"column"} color={"white"} alignItems={"center"} justifyContent={"center"}>
        <IoMdHeartEmpty size={30}/>
        <Text fontSize={"11px"} color={"white"}>รายการโปรด</Text>
      </Box>
      <Box display={"flex"} cursor={"pointer"} gap={1} flexDirection={"column"} color={"white"} alignItems={"center"} justifyContent={"center"}>
        <IoIosMedal size={30}/>
        <Text fontSize={"11px"} color={"white"}>รายการโปรด</Text>
      </Box>
      <Box display={"flex"} cursor={"pointer"} gap={1} flexDirection={"column"} color={"white"} alignItems={"center"} justifyContent={"center"}>
        <IoIosContacts size={30}/>
        <Text fontSize={"11px"} color={"white"}>รายการโปรด</Text>
      </Box>
      <Box display={"flex"} cursor={"pointer"} gap={1} flexDirection={"column"} color={"white"} alignItems={"center"} justifyContent={"center"}>
        <VscMegaphone size={30}/>
        <Text fontSize={"11px"} color={"white"}>รายการโปรด</Text>
      </Box>
      <Box display={"flex"} cursor={"pointer"} gap={1} flexDirection={"column"} color={"white"} alignItems={"center"} justifyContent={"center"}>
        <IoMdApps size={30}/>
        <Text fontSize={"11px"} color={"white"}>รายการโปรด</Text>
      </Box>
    </Stack>
    </Stack>
  )
}

export default MobileNavbar