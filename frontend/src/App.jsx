import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

import Collections from "./pages/Collections";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";

import Pricing from "./pages/Pricing";
import { ToastContainer } from "react-toastify";

import Terms from "./components/Terms";
import Blog from "./pages/Blog";
import OurPolicy from "./components/OurPolicy";
import Testinomials from "./components/Testimonials";

// 👇 ADD THIS LINE
import { MantineProvider } from "@mantine/core";
import CaseSubmissionForm from "./components/CaseSubmissionForm";
import TermsAndPolicy from "./components/TermsAndPolicy";

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      {" "}
      {/* ✅ Required wrapper */}
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <ToastContainer />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collections />} />
          <Route path="about/" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/login" element={<Login />} />

          <Route path="/privacyPolicy" element={<OurPolicy />} />
          <Route path="/termsconditions" element={<Terms />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/testimonials" element={<Testinomials />} />
          <Route path="/casesubmissionform" element={<CaseSubmissionForm />} />
          <Route path="/termspolicy" element={<TermsAndPolicy />} />
        </Routes>
        <Footer />
      </div>
    </MantineProvider>
  );
};

export default App;
