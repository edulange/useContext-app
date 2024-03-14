//então cara, o usecontext é algo que tu vai passando de pagina em pagina
import { createContext, useState } from 'react'
//o create context eu vou utilizar para utilizar o contexto e o useState para cudiar do estado dele.

export const ThemeContext = createContext()
// aqui foi criado o contexto, mas ainda não há nada.
//todo context vai ter um provider.
/* AQUI ESTARIA PRONTO, só que eu não tenho o que fazer/valor ainda
export const ThemeProvider = ({ children }) => {
    return (
        <ThemeContext.Provider>{children}</ThemeContext.Provider>
        )
    } */

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState('light') //meu default = 'light'

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
	}
	return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
        </ThemeContext.Provider>
    )
}
// AQUI O MEU CONTEXTO ESTA CRIADO, agora eu preciso COMPARTILHA-lO, como eu quero compartilhar ele na minha aplicação inteira, eu envio para o meu main.jsx