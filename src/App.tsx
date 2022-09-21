import { Col, Container, Row } from 'react-bootstrap'
import Board from './components/Board'
import './styles.css'

export default function App() {
	return (
		<div className="App">
			<Container>
				<Row className="mb-5">
					<Col xs={2} />
					<Col xs={8}>
						<h1>Tic Tac Toe Game</h1>
						<h2>It is player ones turn.</h2>
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
