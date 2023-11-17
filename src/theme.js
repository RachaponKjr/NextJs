import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const sizes ={
    ss: defineStyle({
        p:'0',
    }),
    xl2: defineStyle({
        maxW: 'container.xl',
        p:'6',
    })
}

export const containerTheme = defineStyleConfig({ sizes })