import React from 'react'
import Head from 'next/head'
import { NavbarNova } from '../react-bricks/bricks/NavbarNova'
import HeroNova from '../react-bricks/bricks/HeroNova'
import { FooterNova } from '../react-bricks/bricks/FooterNova'

const NovaTestPage = () => {
  return (
    <>
      <Head>
        <title>NOVA IMPÉRIA - Test Components</title>
        <meta name="description" content="Test des composants React Bricks NOVA IMPÉRIA" />
      </Head>

      <div style={{ fontFamily: 'Inter, sans-serif' }}>
        {/* Navbar */}
        <NavbarNova 
          backgroundColor="rgba(128, 128, 128, 0.1)"
          textColor="#000000"
          logoMaxWidth={150}
        />

        {/* Hero */}
        <HeroNova 
          backgroundColor="#ffffff"
          textColor="#000000"
          accentColor="#FCEB23"
          layout="left-right"
          showStats={true}
        />

        {/* Footer */}
        <FooterNova 
          backgroundColor="#000000"
          textColor="#ffffff"
          accentColor="#FCEB23"
          borderColor="#333333"
        />
      </div>
    </>
  )
}

export default NovaTestPage