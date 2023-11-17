'use client';
import { Box, Grid, GridItem, Stack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// ICONS
import { MdOutlineHomeWork } from "react-icons/md";
import { AiOutlineCaretUp,AiOutlineCaretDown } from "react-icons/ai";

const ListSelect = () => {
const [active,setActive] = useState(false)
  return (
    <>
      <Stack
        spacing={"3rem"}
        maxW={"100%"}
        display={{ base: "none", md: "flex" }}
      >
        {/* Main Select */}
        <Stack direction={"row"} justifyContent={"center"} spacing={"4rem"}>
          <Box
            className="boxkondo"
            position={"relative"}
            display={"flex"}
            cursor={"pointer"}
            bg={"white"}
            shadow={"md"}
            w={"12rem"}
            h={"2.5rem"}
            borderRadius={50}
            justifyContent={"end"}
            alignItems={"center"}
          >
            <Box
              w={"4rem"}
              bg={"white"}
              shadow={"md"}
              h={"4rem"}
              position={"absolute"}
              borderRadius={100}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              left={0}
            >
              <MdOutlineHomeWork size={30} />
            </Box>
            <Box
              className="hoverkondo"
              as="h5"
              fontSize={22}
              fontWeight={500}
              h={"100%"}
              w={"100%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"end"}
              borderRadius={50}
              transitionDuration={"0.3s"}
              _hover={{ bg: "#20B699", color: "white" }}
              pr={"3rem"}
            >
              คอนโด
            </Box>
          </Box>
          <Box
            className="boxkondo"
            position={"relative"}
            display={"flex"}
            cursor={"pointer"}
            bg={"white"}
            shadow={"md"}
            w={"12rem"}
            h={"2.5rem"}
            borderRadius={50}
            justifyContent={"end"}
            alignItems={"center"}
          >
            <Box
              w={"4rem"}
              bg={"white"}
              shadow={"md"}
              h={"4rem"}
              position={"absolute"}
              borderRadius={100}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              left={0}
            >
              <MdOutlineHomeWork size={30} />
            </Box>
            <Box
              className="hoverkondo"
              as="h5"
              fontSize={22}
              fontWeight={500}
              h={"100%"}
              w={"100%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"end"}
              borderRadius={50}
              transitionDuration={"0.3s"}
              _hover={{ bg: "#20B699", color: "white" }}
              pr={"3rem"}
            >
              คอนโด
            </Box>
          </Box>
          <Box
            className="boxkondo"
            position={"relative"}
            display={"flex"}
            cursor={"pointer"}
            bg={"white"}
            shadow={"md"}
            w={"12rem"}
            h={"2.5rem"}
            borderRadius={50}
            justifyContent={"end"}
            alignItems={"center"}
          >
            <Box
              w={"4rem"}
              bg={"white"}
              shadow={"md"}
              h={"4rem"}
              position={"absolute"}
              borderRadius={100}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              left={0}
            >
              <MdOutlineHomeWork size={30} />
            </Box>
            <Box
              className="hoverkondo"
              as="h5"
              fontSize={22}
              fontWeight={500}
              h={"100%"}
              w={"100%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"end"}
              borderRadius={50}
              transitionDuration={"0.3s"}
              _hover={{ bg: "#20B699", color: "white" }}
              pr={"3rem"}
            >
              คอนโด
            </Box>
          </Box>
        </Stack>
        {/* Sub Select */}
        <Box display={"flex"} justifyContent={"center"} gap={"1rem"} flexWrap={"wrap"}>
          {/* Link Product */}
          <Link href="/">
            <Box
              _hover={{ bg: "rgb(32, 182, 153,0.4)" }}
              transitionDuration={"0.3s"}
              px={6}
              py={4}
              borderRadius={10}
            >
              <Box
                bg={"white"}
                shadow={"lg"}
                w={"3.5rem"}
                h={"3.5rem"}
                borderRadius={100}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <MdOutlineHomeWork size={30} />
              </Box>
              <Box
                as="h5"
                textAlign={"center"}
                lineHeight={1.2}
                pt={4}
                fontSize={14}
              >
                ทาวน์เฮ้าส์ <br></br> ทาวน์โฮม
              </Box>
            </Box>
          </Link>
          <Link href="/">
            <Box
              _hover={{ bg: "rgb(32, 182, 153,0.4)" }}
              transitionDuration={"0.3s"}
              px={6}
              py={4}
              borderRadius={10}
            >
              <Box
                bg={"white"}
                shadow={"lg"}
                w={"3.5rem"}
                h={"3.5rem"}
                borderRadius={100}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <MdOutlineHomeWork size={30} />
              </Box>
              <Box
                as="h5"
                textAlign={"center"}
                lineHeight={1.2}
                pt={4}
                fontSize={14}
              >
                ทาวน์เฮ้าส์ <br></br> ทาวน์โฮม
              </Box>
            </Box>
          </Link>
          <Link href="/">
            <Box
              _hover={{ bg: "rgb(32, 182, 153,0.4)" }}
              transitionDuration={"0.3s"}
              px={6}
              py={4}
              borderRadius={10}
            >
              <Box
                bg={"white"}
                shadow={"lg"}
                w={"3.5rem"}
                h={"3.5rem"}
                borderRadius={100}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <MdOutlineHomeWork size={30} />
              </Box>
              <Box
                as="h5"
                textAlign={"center"}
                lineHeight={1.2}
                pt={4}
                fontSize={14}
              >
                ทาวน์เฮ้าส์ <br></br> ทาวน์โฮม
              </Box>
            </Box>
          </Link>
          <Link href="/">
            <Box
              _hover={{ bg: "rgb(32, 182, 153,0.4)" }}
              transitionDuration={"0.3s"}
              px={6}
              py={4}
              borderRadius={10}
            >
              <Box
                bg={"white"}
                shadow={"lg"}
                w={"3.5rem"}
                h={"3.5rem"}
                borderRadius={100}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <MdOutlineHomeWork size={30} />
              </Box>
              <Box
                as="h5"
                textAlign={"center"}
                lineHeight={1.2}
                pt={4}
                fontSize={14}
              >
                ทาวน์เฮ้าส์ <br></br> ทาวน์โฮม
              </Box>
            </Box>
          </Link>
          <Link href="/">
            <Box
              _hover={{ bg: "rgb(32, 182, 153,0.4)" }}
              transitionDuration={"0.3s"}
              px={6}
              py={4}
              borderRadius={10}
            >
              <Box
                bg={"white"}
                shadow={"lg"}
                w={"3.5rem"}
                h={"3.5rem"}
                borderRadius={100}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <MdOutlineHomeWork size={30} />
              </Box>
              <Box
                as="h5"
                textAlign={"center"}
                lineHeight={1.2}
                pt={4}
                fontSize={14}
              >
                ทาวน์เฮ้าส์ <br></br> ทาวน์โฮม
              </Box>
            </Box>
          </Link>
          <Link href="/">
            <Box
              _hover={{ bg: "rgb(32, 182, 153,0.4)" }}
              transitionDuration={"0.3s"}
              px={6}
              py={4}
              borderRadius={10}
            >
              <Box
                bg={"white"}
                shadow={"lg"}
                w={"3.5rem"}
                h={"3.5rem"}
                borderRadius={100}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <MdOutlineHomeWork size={30} />
              </Box>
              <Box
                as="h5"
                textAlign={"center"}
                lineHeight={1.2}
                pt={4}
                fontSize={14}
              >
                ทาวน์เฮ้าส์ <br></br> ทาวน์โฮม
              </Box>
            </Box>
          </Link>
          <Link href="/">
            <Box
              _hover={{ bg: "rgb(32, 182, 153,0.4)" }}
              transitionDuration={"0.3s"}
              px={6}
              py={4}
              borderRadius={10}
            >
              <Box
                bg={"white"}
                shadow={"lg"}
                w={"3.5rem"}
                h={"3.5rem"}
                borderRadius={100}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <MdOutlineHomeWork size={30} />
              </Box>
              <Box
                as="h5"
                textAlign={"center"}
                lineHeight={1.2}
                pt={4}
                fontSize={14}
              >
                ทาวน์เฮ้าส์ <br></br> ทาวน์โฮม
              </Box>
            </Box>
          </Link>
          <Link href="/">
            <Box
              _hover={{ bg: "rgb(32, 182, 153,0.4)" }}
              transitionDuration={"0.3s"}
              px={6}
              py={4}
              borderRadius={10}
            >
              <Box
                bg={"white"}
                shadow={"lg"}
                w={"3.5rem"}
                h={"3.5rem"}
                borderRadius={100}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <MdOutlineHomeWork size={30} />
              </Box>
              <Box
                as="h5"
                textAlign={"center"}
                lineHeight={1.2}
                pt={4}
                fontSize={14}
              >
                ทาวน์เฮ้าส์ <br></br> ทาวน์โฮม
              </Box>
            </Box>
          </Link>
        </Box>
      </Stack>

      {/* // Mobile */}
      <Stack className="noneP" display={{ base: "flex", md: "none" }} position={"relative"} bg={"white"}  borderRadius={20} w={"100%"} h={active ? "17.5rem" : "12rem"} transitionDuration={"0.3s"}>
        <Box w={"100%"} h={"100%"} position={"relative"} top={-5} overflow={"hidden"}>
          <Grid templateColumns={"repeat(4, 1fr)"} rowGap={4}  w={"100%"}>
            <GridItem><ListItme/></GridItem>
            <GridItem><ListItme/></GridItem>
            <GridItem><ListItme/></GridItem>
            <GridItem><ListItme/></GridItem>
            <GridItem><ListItme/></GridItem>
            <GridItem><ListItme/></GridItem>
            <GridItem><ListItme/></GridItem>
            <GridItem><ListItme/></GridItem>
            <GridItem><ListItme/></GridItem>
          </Grid>
        </Box>
          <Box onClick={()=> setActive(!active)} display={"flex"} justifyContent={"center"} gap={2} alignItems={"center"} as="h4" position={"absolute"} bottom={0} w={"100%"} fontWeight={500} cursor={"pointer"} color={"#20B699"}  textAlign={"center"} fontSize={12}>อสังหาฯ ประเภทอื่นๆ {active ?<AiOutlineCaretUp/> :<AiOutlineCaretDown/>}</Box>
      </Stack>
    </>
  );
};

const ListItme = () => {
    return (
        <>
        <Box w={"100%"} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
            <Box
            boxShadow={"sm"}
              bg={"white"}
              shadow={"lg"}
              w={"3rem"}
              h={"3rem"}
              borderRadius={100}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <MdOutlineHomeWork size={25} />
              
            </Box>
            <Box
                as="h5"
                textAlign={"center"}
                lineHeight={1.2}
                pt={1}
                fontSize={12}
              >
                ทาวน์เฮ้าส์ <br></br> ทาวน์โฮม
              </Box>
        </Box>
            </>
    )
}

export default ListSelect;
