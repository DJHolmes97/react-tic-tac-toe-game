import * as React from 'react'
import Board from './components/Board'
import './styles.css'

export default function App(): JSX.Element {
	return (
		<div className="App">
			<h1>Hello CodeSandbox</h1>
			<h2>Start editing to see some magic happen!</h2>
			<Board />
		</div>
	)
}
