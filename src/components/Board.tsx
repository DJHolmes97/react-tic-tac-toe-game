import * as Styled from './Board.styles'
import { Circle, X } from 'react-feather'

interface GamePropTypes {
	playerOneTurn: boolean
	boardCells: {
		a1: 'nought' | 'cross' | 'empty'
		a2: 'nought' | 'cross' | 'empty'
		a3: 'nought' | 'cross' | 'empty'
		b1: 'nought' | 'cross' | 'empty'
		b2: 'nought' | 'cross' | 'empty'
		b3: 'nought' | 'cross' | 'empty'
		c1: 'nought' | 'cross' | 'empty'
		c2: 'nought' | 'cross' | 'empty'
		c3: 'nought' | 'cross' | 'empty'
	}
}
enum CellEnum {
	A1 = 'a1',
	A2 = 'a2',
	A3 = 'a3',
	B1 = 'b1',
	B2 = 'b2',
	B3 = 'b3',
	C1 = 'c1',
	C2 = 'c2',
	C3 = 'c3',
}
const GameProps: GamePropTypes = {
	playerOneTurn: true,
	boardCells: {
		a1: 'empty',
		a2: 'empty',
		a3: 'empty',
		b1: 'empty',
		b2: 'empty',
		b3: 'empty',
		c1: 'empty',
		c2: 'empty',
		c3: 'empty',
	},
}

const Square = ({ icon }: { icon: 'nought' | 'cross' | 'empty' }) => {
	const IconProps = {
		size: 56,
		color: '#643A71',
	}
	const Icon = () => {
		switch (icon) {
			case 'empty':
				return <></>
			case 'nought':
				return <Circle {...IconProps} />
			case 'cross':
				return <X {...IconProps} />
		}
	}
	return (
		<Styled.Square>
			<Icon />
		</Styled.Square>
	)
}

const Board = () => {
	const handleClick = (event: any) => {
		const key: CellEnum = event.currentTarget.attributes['data-id'].value
		console.log('', key)
		const oldValue = GameProps.boardCells[key]
		GameProps.boardCells[key] =
			GameProps.boardCells[key] === 'empty'
				? GameProps.playerOneTurn
					? 'nought'
					: 'cross'
				: GameProps.boardCells[key]
		GameProps.playerOneTurn =
			oldValue !== GameProps.boardCells[key]
				? !GameProps.playerOneTurn
				: GameProps.playerOneTurn
		console.log(GameProps.boardCells)
	}
	return (
		<Styled.BoardContainer>
			<Styled.BoardRow>
				<Styled.BoardCol
					xs={4}
					onClick={handleClick}
					data-id={CellEnum.A1}
				>
					<Square icon={GameProps.boardCells.a1} />
				</Styled.BoardCol>
				<Styled.BoardCol
					xs={4}
					onClick={handleClick}
					data-id={CellEnum.A2}
				>
					<Square icon={GameProps.boardCells.a2} />
				</Styled.BoardCol>
				<Styled.BoardCol
					xs={4}
					onClick={handleClick}
					data-id={CellEnum.A3}
				>
					<Square icon={GameProps.boardCells.a3} />
				</Styled.BoardCol>
			</Styled.BoardRow>
			<Styled.BoardRow>
				<Styled.BoardCol
					xs={4}
					onClick={handleClick}
					data-id={CellEnum.B1}
				>
					<Square icon={GameProps.boardCells.b1} />
				</Styled.BoardCol>
				<Styled.BoardCol
					xs={4}
					onClick={handleClick}
					data-id={CellEnum.B2}
				>
					<Square icon={GameProps.boardCells.b2} />
				</Styled.BoardCol>
				<Styled.BoardCol
					xs={4}
					onClick={handleClick}
					data-id={CellEnum.B3}
				>
					<Square icon={GameProps.boardCells.b3} />
				</Styled.BoardCol>
			</Styled.BoardRow>
			<Styled.BoardRow>
				<Styled.BoardCol
					xs={4}
					onClick={handleClick}
					data-id={CellEnum.C1}
				>
					<Square icon={GameProps.boardCells.c1} />
				</Styled.BoardCol>
				<Styled.BoardCol
					xs={4}
					onClick={handleClick}
					data-id={CellEnum.C2}
				>
					<Square icon={GameProps.boardCells.c2} />
				</Styled.BoardCol>
				<Styled.BoardCol
					xs={4}
					onClick={handleClick}
					data-id={CellEnum.C3}
				>
					<Square icon={GameProps.boardCells.c3} />
				</Styled.BoardCol>
			</Styled.BoardRow>
		</Styled.BoardContainer>
	)
}

export default Board
