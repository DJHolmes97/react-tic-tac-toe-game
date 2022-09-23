import * as React from 'react'
import * as Styled from './Board.styles'
import { Circle, X } from 'react-feather'
import { useState } from 'react'
import { BoardPropTypes, CellEnum } from '../types/gameTypes'

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

const Board = ({
	gameState,
	setGameState,
	gameWinnerCheckHelper,
	winsCount,
}: BoardPropTypes) => {
	const handleClick = (event: any) => {
		const key: CellEnum = event.currentTarget.attributes['data-id'].value

		if (
			gameState.boardCells[key] === 'empty' &&
			!gameState.winners.player1 &&
			!gameState.winners.player2 &&
			gameState.turnCount < 9
		) {
			if (gameState.playerOneTurn) {
				gameState.boardCells[key] = 'nought'
				gameState.playerOneTurn = false
				setGameState((gameState) => ({
					...gameState,
				}))
			} else {
				gameState.boardCells[key] = 'cross'
				gameState.playerOneTurn = true
				setGameState((gameState) => ({
					...gameState,
				}))
			}
			gameWinnerCheckHelper(gameState, setGameState, winsCount)
			gameState.turnCount++
			setGameState((gameState) => ({
				...gameState,
			}))
		}
	}
	return (
		<Styled.BoardContainer>
			<Styled.BoardRow>
				<Styled.BoardCol
					xs={4}
					onClick={handleClick}
					data-id={CellEnum.A1}
				>
					<Square icon={gameState.boardCells.a1} />
				</Styled.BoardCol>
				<Styled.BoardCol
					xs={4}
					onClick={handleClick}
					data-id={CellEnum.A2}
				>
					<Square icon={gameState.boardCells.a2} />
				</Styled.BoardCol>
				<Styled.BoardCol
					xs={4}
					onClick={handleClick}
					data-id={CellEnum.A3}
				>
					<Square icon={gameState.boardCells.a3} />
				</Styled.BoardCol>
			</Styled.BoardRow>
			<Styled.BoardRow>
				<Styled.BoardCol
					xs={4}
					onClick={handleClick}
					data-id={CellEnum.B1}
				>
					<Square icon={gameState.boardCells.b1} />
				</Styled.BoardCol>
				<Styled.BoardCol
					xs={4}
					onClick={handleClick}
					data-id={CellEnum.B2}
				>
					<Square icon={gameState.boardCells.b2} />
				</Styled.BoardCol>
				<Styled.BoardCol
					xs={4}
					onClick={handleClick}
					data-id={CellEnum.B3}
				>
					<Square icon={gameState.boardCells.b3} />
				</Styled.BoardCol>
			</Styled.BoardRow>
			<Styled.BoardRow>
				<Styled.BoardCol
					xs={4}
					onClick={handleClick}
					data-id={CellEnum.C1}
				>
					<Square icon={gameState.boardCells.c1} />
				</Styled.BoardCol>
				<Styled.BoardCol
					xs={4}
					onClick={handleClick}
					data-id={CellEnum.C2}
				>
					<Square icon={gameState.boardCells.c2} />
				</Styled.BoardCol>
				<Styled.BoardCol
					xs={4}
					onClick={handleClick}
					data-id={CellEnum.C3}
				>
					<Square icon={gameState.boardCells.c3} />
				</Styled.BoardCol>
			</Styled.BoardRow>
		</Styled.BoardContainer>
	)
}

export default Board
