import './App.css'

import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'

//qq eu vou fazer? vou mudar o theme apartir do Apps
//vou fazer uma condicional para verificar qual é o contexto

//primeiro precisa consumir o contexto
import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'

function App() {
  const {theme} = useContext(ThemeContext)
	return (
		<div className={`App ${theme === 'dark' ? 'dark-theme' : ''}`}>
			<Navbar />
			<Outlet />
		</div>
	)
}

export default App
