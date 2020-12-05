import React from "react"
//import { ColorModeProvider, CSSReset, ThemeProvider } from "@chakra-ui/core"
import { ChakraProvider, ColorModeProvider, CSSReset } from "@chakra-ui/react"
import { useTheme, ThemeProvider, withTheme } from '@emotion/react'
import { AppProps } from "next/app"

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <ChakraProvider>
                <CSSReset />
                <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default App