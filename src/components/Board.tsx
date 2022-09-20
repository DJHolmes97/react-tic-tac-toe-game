import { Col } from 'react-bootstrap'
import * as Styled from './Board.styles'

const Square = () => {
	return <Styled.Square>x</Styled.Square>
}

const Board = () => {
	return (
		<Styled.BoardContainer>
			<Styled.BoardRow>
				<Col xs={4}>
					<Square />
				</Col>
				<Col xs={4}>
					<Square />
				</Col>
				<Col xs={4}>
					<Square />
				</Col>
			</Styled.BoardRow>
			<Styled.BoardRow>
				<Col xs={4}>
					<Square />
				</Col>
				<Col xs={4}>
					<Square />
				</Col>
				<Col xs={4}>
					<Square />
				</Col>
			</Styled.BoardRow>
			<Styled.BoardRow>
				<Col xs={4}>
					<Square />
				</Col>
				<Col xs={4}>
					<Square />
				</Col>
				<Col xs={4}>
					<Square />
				</Col>
			</Styled.BoardRow>
		</Styled.BoardContainer>
	)
}

export default Board
