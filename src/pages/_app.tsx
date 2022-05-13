import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <AnimatePresence exitBeforeEnter>
                <Component {...pageProps} />
            </AnimatePresence>
        </>
    )
}

export default MyApp
