import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import ProtectedRoute from './ProtectedRoute'
import { AuthProvider } from './hooks/Auth'

function App() {

  return (
    <>
      <AuthProvider>
        <Routes> <Route path="/home" element={<ProtectedRoute> <Home /> </ProtectedRoute>}> </Route></Routes>
        <Routes> <Route path="/login" element={<Login />}></Route> </Routes>
        <Routes> <Route path="/" element={<ProtectedRoute> <Home /> </ProtectedRoute>}></Route> </Routes>
      </AuthProvider>
    </>
  )
}

export default App
