import * as Styled from './Board.styles'

const Square = () => {
	return <Styled.Square>x</Styled.Square>
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
