
// Framer motion
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";

// React router
import { Routes, Route } from "react-router-dom"; 

// Components
import { Layout } from "@/components/Layout";

// Pages
import { Home } from "@/pages/Home";
import { NotFound } from "@/pages/NotFound";

// Helmet
import {HelmetProvider } from 'react-helmet-async';


const helmetContext = {};

function App() {
  return (
    <HelmetProvider context={helmetContext}>
      <LazyMotion features={domAnimation}>
        <AnimatePresence>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound/>} />
            </Routes>
          </Layout>
        </AnimatePresence>
      </LazyMotion>
    </HelmetProvider>
  )
}

export default App
