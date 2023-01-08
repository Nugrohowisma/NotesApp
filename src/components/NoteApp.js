import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AddPage from "../pages/AddPage";
import ViewPage from "../pages/ViewPage";
import NotFound from "./NotFound";

function ContactApp() {
  return (
    <>
      <nav>
        <h1 className="logo">Note!</h1>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/notes/:id" element={<ViewPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default ContactApp;
