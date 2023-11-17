import { Box, Divider, Stack, VStack } from '@chakra-ui/react'
import React from 'react'

import { AiOutlineGateway } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { LuBath,LuBedDouble } from "react-icons/lu";
const CardItem = () => {
  return (
    <>
    <Box height={"min-content"} boxShadow={"md"}>
        {/* Imge */}
        <Box bg={"rgb(166, 166, 166,0.2)"} w={"100%"} h={"8rem"}></Box>
        {/* Footer Box */}
        <Stack p={2} spacing={2}>
            {/* Tage */}
            <Stack direction={"row"} justifyContent={"space-between"}>
                <Stack fontSize={"10px"} direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                    <Box as='h6' textTransform={"uppercase"} bg={"rgb(255,0,0,0.7)"} fontWeight={500} color={"white"} borderRadius={50} py={0.5} px={2} display={"flex"} justifyContent={"center"} gap={1} alignItems={"center"}><AiOutlineGateway size={12}/>Hot</Box>
                    <Box as='h6' textTransform={"uppercase"} bg={"rgb(255,140,0,0.7)"} fontWeight={500} color={"white"} borderRadius={50} py={0.5} px={2} display={"flex"} justifyContent={"center"} gap={1} alignItems={"center"}><AiOutlineGateway size={12}/>pomotion</Box>
                    
                </Stack>
                <Box></Box>
            </Stack>
            {/* Tital Head */}
            <Stack h={"4rem"} direction={"row"} justifyContent={"space-between"} alignItems={"start"}>
                <Box as='h3' w={"70%"} fontWeight={700} fontSize={{base:20,md:24}} color={"#14B99A"}>นันทนา 1</Box>
                <Box boxShadow={"md"} w={"2.5rem"} h={'2.5rem'} bg={'white'} borderRadius={'50%'} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                    <FaRegHeart color='#14B99A' size={24}/>
                </Box>
            </Stack>
            <Box fontSize={{base:12,md:14}} color={"rgb(166, 166, 166)"} display={"flex"} alignItems={"center"} gap={1}><IoLocationOutline size={16} color={"rgb(166, 166, 166)"}/>สันทราย เชียงใหม่</Box>
            <Stack direction={"row"} justifyContent={"space-between"}>
            <Box fontSize={{base:12,md:14}} display={"flex"} color={"rgb(166, 166, 166)"} alignItems={"center"}>บ้านเดี่ยว</Box>
            <Box fontSize={{base:12,md:14}} display={"flex"} alignItems={"center"} color={"rgb(166, 166, 166)"}>รหัส 02-88-12885</Box>
            </Stack>
            <Stack direction={"row"} justifyContent={"space-between"}>
            <Box fontSize={{base:12,md:14}} display={"flex"} alignItems={"center"}>
            <Box color={"rgb(166, 166, 166)"} borderRight={"1px solid gray"} pr={2} display={"flex"} alignItems={"center"} gap={2}>
            <LuBedDouble size={16}/>
            <Box as='h6'>2</Box>
            </Box>
            <Box color={"rgb(166, 166, 166)"} pl={2} display={"flex"} alignItems={"center"} gap={2}>
            <LuBath size={16}/>
            <Box as='h6'>2</Box>
            </Box>
            
            </Box>
            <Box color={"rgb(166, 166, 166)"} fontSize={{base:12,md:14}} display={"flex"} alignItems={"center"} gap={1}>
                <AiOutlineGateway size={18}/>
            <Box as='h6'>59.00 ตร.ว.</Box>
            </Box>
            </Stack>
            <Divider py={2} />
            <Box as='h2' w={"100%"} color={"black"} fontSize={{base:20,md:24}} mt={2} mb={6} textAlign={"right"} fontWeight={700}>
                    1,028,000 บาท
            </Box>
        </Stack>
    </Box>
    </>
  )
}

export default CardItem