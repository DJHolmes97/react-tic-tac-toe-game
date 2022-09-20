import * as Styled from './Board.styles'
import { Circle } from 'react-feather'

const Square = () => {
	return (
		<Styled.Square>
			<Circle size={56} color={'#643A71'} />
		</Styled.Square>
	)
}

const Board = () => {
	return (
		<Styled.BoardContainer>
			<Styled.BoardRow>
				<Styled.BoardCol xs={4}>
					<Square />
				</Styled.BoardCol>
				<Styled.BoardCol xs={4}>
					<Square />
				</Styled.BoardCol>
				<Styled.BoardCol xs={4}>
					<Square />
				</Styled.BoardCol>
			</Styled.BoardRow>
			<Styled.BoardRow>
				<Styled.BoardCol xs={4}>
					<Square />
				</Styled.BoardCol>
				<Styled.BoardCol xs={4}>
					<Square />
				</Styled.BoardCol>
				<Styled.BoardCol xs={4}>
					<Square />
				</Styled.BoardCol>
			</Styled.BoardRow>
			<Styled.BoardRow>
				<Styled.BoardCol xs={4}>
					<Square />
				</Styled.BoardCol>
				<Styled.BoardCol xs={4}>
					<Square />
				</Styled.BoardCol>
				<Styled.BoardCol xs={4}>
					<Square />
				</Styled.BoardCol>
			</Styled.BoardRow>
		</Styled.BoardContainer>
	)
}

export default Board
