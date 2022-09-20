import { Col, Container, Row } from 'react-bootstrap'
import Board from './components/Board'
import './styles.css'

export default function App() {
	return (
		<div className="App">
			<Container>
				<Row>
					<Col xs={2} />
					<Col xs={8}>
						<h1>Hello CodeSandbox</h1>
						<h2>This is a Tic Tac Toe example game</h2>
					</Col>
					<Col xs={2} />
				</Row>
				<Row>
					<Board />
				</Row>
			</Container>
		</div>
	)
}
