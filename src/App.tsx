import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Inicio from "./components/Inicio"
import Sobre from "./components/Sobre"
import Projetos from "./components/Projetos"
import Admin from "./routes/Admin.tsx"
import Login from "./routes/Login.tsx"
import ProtectedRoute from "./routes/ProtectedRoute"

function Home() {
  return (
    <div className='container'>
      <Header />
      <Inicio />
      <Sobre />
      <Projetos />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default App