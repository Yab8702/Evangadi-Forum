import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Section from "./components/Section";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes key={location.key} location={location}>
          <Route path="/" element={<Home />}>
            <Route element={<Section />}>
              <Route path="/" element={<SignIn />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
            </Route>
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
