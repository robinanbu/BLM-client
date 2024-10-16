import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Weblayout from "./layouts/Weblayout"
import Login from "./components/Login";
import Patientdashboard from"./pages/Patientdashboard";
import Employeedashboard from"./pages/Employeedashboard";
// import Test from "./pages/Test";

const App=() => {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<Weblayout />}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/test" element={<Test />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/patientdashboard" element={<Patientdashboard />} />
          <Route path="/employeedashboard" element={<Employeedashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
