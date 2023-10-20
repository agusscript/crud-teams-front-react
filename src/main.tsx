import "./main.scss";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import Teams from "./pages/Teams/Teams.tsx";
import AddForm from "./pages/AddForm/AddForm.tsx";
import TeamDetails from "./pages/TeamDetails/TeamDetails.tsx";

const root = createRoot(document.getElementById("root")!);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/teams/:teamId" element={<TeamDetails />} />
      <Route path="/form/add" element={<AddForm />} />
    </Routes>
  </BrowserRouter>
);
