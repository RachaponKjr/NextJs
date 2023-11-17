"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '../components/Navbar/Navbar'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import HomePage from '@/pages/Homepage/HomePage'
import { containerTheme } from '@/theme'

export default function Home() {
  const theme = extendTheme({
    components:{
      Container: containerTheme
    }
  })
  return (
    <ChakraProvider theme={theme}>
      <Navbar/>
      <HomePage/>
    </ChakraProvider>

  )
}
