import { Route, Routes, Navigate } from "react-router";
import React from "react";
// Components
import HomePage from "../pages/HomePage";
import InstructionsPage from "../pages/InstructionsPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/instructions" element={<InstructionsPage />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}

export default Router;
