import { ColorContextMode, useMode } from "./theme.js";
import { Routes, Route } from "react-router-dom";
// import { useState } from "react";
import  Topbar  from "./scenes/global/Topbar.jsx";
import  Sidebar  from "./scenes/global/Sidebar.jsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Dashboard from "./scenes/dashboard/index.jsx";
import Team from "./scenes/team/index.jsx";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Form from "./scenes/form";
import Calendar from "./scenes/calendar/calendar.jsx";
import Bar from "./scenes/bar/index";
import Line from "./scenes/Line/line.jsx";
import Pie from "./scenes/pie/Pie.jsx";
import FAQ from "./scenes/faq/faq.jsx";
import Geography from "./scenes/geography/Geography.jsx";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorContextMode.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app">
          <Sidebar></Sidebar>
          <main className="content">
            <Topbar/>
            <Routes>
              <Route path="/" element={<Dashboard />}></Route>
              <Route path="/team" element={<Team />}></Route>
              <Route path="/contacts" element={<Contacts />}></Route>
              <Route path="/invoices" element={<Invoices/>}></Route>
              <Route path="/form" element={<Form/>}></Route>
              <Route path="/calendar" element={<Calendar/>}></Route>
              <Route path="/bar" element={<Bar/>}></Route>
              <Route path="/pie" element={<Pie/>}></Route>
              <Route path="/line" element={<Line/>}></Route>
              <Route path="/faq" element={<FAQ/>}></Route>
              <Route path="/geography" element={<Geography/>}></Route>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorContextMode.Provider>
  );
}

export default App;
