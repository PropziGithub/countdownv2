import React from "react";
import "@/styles/tailwind.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Socials from "@/components/Socials";
import Choosing from "@/components/Choosing";
import Footer from "@/components/Footer";
import { Routes, Route } from "react-router-dom";
import Rules from "./components/Rules";

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Contact />
        <Socials />
        <Choosing />
        <Footer />
      </main>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/rules" element={<Rules />} />
      <Route
        path="*"
        element={
          <div>
            <h1 className="font-bold">Not Found</h1>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
