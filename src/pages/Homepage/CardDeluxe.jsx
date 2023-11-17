import { Box, Grid, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'

import img from "../../imgs/img.png";
import Card from './Card';

const CardDeluxe = () => {
  return (

    <Stack py={4} px={2}>
          <Box
           as="h4" color={"#14B99A"} fontSize={18} fontWeight={500}>
            บ้านและคอนโดหรู
          </Box>
          <Grid templateColumns={"repeat(2, 1fr)"} gap={2} h={"auto"}>
            <Card/>
            <Card/>
            </Grid>
        </Stack>
  )
}

export default CardDeluxe