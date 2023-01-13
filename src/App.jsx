import React from 'react'
import "@/styles/tailwind.css";
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Contact from "@/components/Contact";
import Socials from "@/components/Socials";
import Choosing from "@/components/Choosing";
import Footer from "@/components/Footer";


function App() {

  return (
    <>
      <Header/>
      <main>
        <Hero />
        <Contact />
        <Socials />
        <Choosing />
        <Footer/>
      </main>
    </>
  )
}

export default App
