import { Col, Container, Row } from 'react-bootstrap'
import * as Styled from './Board.styles'

const Square = () => {
	return <Styled.Square>x</Styled.Square>
}

const Board = () => {
	return (
		<Container>
			<Row>
				<Col xs={4}>
					<Square />
				</Col>
				<Col xs={4}>
					<Square />
				</Col>
				<Col xs={4}>
					<Square />
				</Col>
			</Row>
			<Row>
				<Col xs={4}>
					<Square />
				</Col>
				<Col xs={4}>
					<Square />
				</Col>
				<Col xs={4}>
					<Square />
				</Col>
			</Row>
			<Row>
				<Col xs={4}>
					<Square />
				</Col>
				<Col xs={4}>
					<Square />
				</Col>
				<Col xs={4}>
					<Square />
				</Col>
			</Row>
		</Container>
	)
}

export default Board
