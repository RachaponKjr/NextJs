"use client";
const { Grid, GridItem, Box } = require("@chakra-ui/react");

import Image from "next/image";
import React from "react";

import img from "../../imgs/img.png";
const Card = () => {
  return (
    <GridItem rowSpan={1} borderRadius={10} h={"auto"} boxShadow={"md"} overflow={"hidden"}>
      <Box w={"100%"} h={"100%"} display={"flex"} flexDirection={{base:"column",md:"row"}}>
        <Box position={"relative"} bg={"linear-gradient(135deg, rgba(3,34,137,1) 19%, rgba(0,62,132,1) 69%, rgba(229,225,216,1) 100%)"} w={{base:"100%",md:"10rem",lg:"15rem"}} h={{base:"100%",md:"11rem",lg:"16rem"}} display={"flex"} py={6} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
          
          <Box as="h3" fontSize={16} color={"white"}>คอนโดใหม่</Box>
          <Box fontSize={14} textAlign={"center"} color={"white"}>
            รวมประกาศขายคอนโด<br></br> โครงการใหม่ มือหนึ่ง
          </Box>
          <Box
                  as={"h3"}
                  bg={"#26231E"}
                  textAlign={"center"}
                  w={"10rem"}
                  left={-10}
                  top={6}
                  color={"white"}
                  h={"2rem"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  transform={"rotate(-45deg)"}
                  position={"absolute"}
                  fontSize={18}
                >
                  Luxury
                </Box>
        </Box>
        
        <Box w={{base:"100%",md:"auto"}} h={"auto"}>
          <Image
            src={img}
            alt="img"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
      </Box>
    </GridItem>
  );
};

export default Card;
