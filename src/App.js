import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Page Components Imports
import { LoginIndex } from "./features/auth/login/LoginIndex";
import SignupIndex from "./features/auth/signup/SignupIndex";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginIndex />}/>
        <Route path="/signup" element={<SignupIndex />}/>
        <Route path="*" element={<LoginIndex />}/>
      </Routes>
    </Router>
  );
}

export default App;
