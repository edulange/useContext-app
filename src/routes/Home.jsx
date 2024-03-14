import React from 'react'

//como vou fazer agora para mexer no themecontext ou consultar? por exemplo o usuário está logado?

//primeiro trazer o useContext
import { useContext } from 'react' //que o hook
//segundo trazer o contexto
import { ThemeContext } from '../context/ThemeContext'

const Home = () => {
	//terceiro iniciar o contexto = extrair as variaveis que vem do contexto
	const { theme, toggleTheme } = useContext(ThemeContext)
	//em outras palavras, eu vou pegar as variaveis que estão sendo passadas pelo .Provider, utilizar o hook com o nome do contexto.

	return (
		<div>
			<h1>Página Inicial</h1>
			<p>o tema atual é: {theme}</p>
			<button onClick={toggleTheme}>Click</button>
		</div>
	)
}

export default Home
