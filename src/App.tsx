import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import imagePath from "./assets/AE.png";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./screens/Home";
import CompaniesPage from "./screens/Companies.tsx";
import UsersPage from "./screens/Users.tsx";
import QuestionsPage from "./screens/Questions.tsx";

function App() {
  let items = ["Home","Users", "Companies", "Questions"];
  let pages = ["/", "/users", "/companies", "/questions"];

  return (
    <BrowserRouter>
      <NavBar
        brandName="AceEffects"
        imageSrcPath={imagePath}
        navItems={items}
        pages={pages}
      />
      <div>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/users" element={<UsersPage/>} />
          <Route path="/companies" element={<CompaniesPage/>} />
          <Route path="/questions" element={<QuestionsPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
