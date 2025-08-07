import type { AppProps } from "next/app"
import { ThemeProvider } from "next-themes"
import ReactBricksApp from "../components/ReactBricksApp"
import Head from "next/head"

import "../css/nova.css"
import "../css/style.css"

const MyApp = (props: AppProps) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider attribute='class' storageKey='color-mode' enableSystem={false}
        defaultTheme="light">
        <ReactBricksApp {...props}></ReactBricksApp>
      </ThemeProvider>
    </>
  )
}

export default MyApp
