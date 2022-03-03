import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Wallet } from "../pages/index";

export default function RouteWrapper() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Wallet />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
