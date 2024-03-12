import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginForm from './Components/LoginForm'
import { Box } from '@mui/material'
import Welcome from './Components/Welcome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box sx={{height:"100vh",width:"100wh",display:"flex",}}>
    <Welcome/>
    <LoginForm/>
    </Box>
  )
}

export default App
