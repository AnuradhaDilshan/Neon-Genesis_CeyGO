import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./screens/global/TopBar";
import Sidebar from "./screens/global/SideBar";
// import Team from "./screens/dashboard/Team";
// import Invoice from "./screens/dashboard/Invoice";
// import Contact from "./screens/dashboard/contact";
// import Bar from "./screens/dashboard/bar";
// import Form from "./screens/dashboard/form";
// import Line from "./screens/dashboard/line";
// import Pie from "./screens/dashboard/pie";
// import FAQ from "./screens/dashboard/faq";
// import Geography from "./screens/dashboard/geography";
// import Calender from "./screens/dashboard/calendar";
import Dashboard from "./screens/dashboard/Dashboard";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* <Route path="/team" element={<Team />} />
              <Route path="/invoice" element={<Invoice />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/form" element={<Form />} />
              <Route path="/line" element={<Line />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/calendar" element={<Calender />} /> */}
            </Routes>
          </main>
        </div>
        ;
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
