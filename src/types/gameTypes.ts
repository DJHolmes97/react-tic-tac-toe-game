import * as React from 'react'

export enum CellEnum {
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

export interface BoardPropTypes {
	gameState: GamePropTypes
	setGameState: React.Dispatch<React.SetStateAction<GamePropTypes>>
	gameWinnerCheckHelper: (
		gameState: GamePropTypes,
		setGameState: React.Dispatch<React.SetStateAction<GamePropTypes>>,
		winsCount: WinsCountType
	) => void
	winsCount: WinsCountType
}

export interface GamePropTypes {
	playerOneTurn: boolean
	turnCount: number
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
	winners: {
		player1: boolean
		player2: boolean
	}
}

export interface WinningCombinationsType {
	topRow: ['a1', 'a2', 'a3']
	midRow: ['b1', 'b2', 'b3']
	bottomRow: ['c1', 'c2', 'c3']
	diagRight: ['a1', 'b2', 'c3']
	diagLeft: ['a3', 'b2', 'c1']
	leftCol: ['a1', 'b1', 'c1']
	midCol: ['a2', 'b2', 'c2']
	rightCol: ['a3', 'b3', 'c3']
}

export interface ScoreBoardType {
	playerOneWins: number
	playerTwoWins: number
}

export interface WinsCountType {
	winsCount: ScoreBoardType
	setWinsCount: React.Dispatch<
		React.SetStateAction<{
			playerOneWins: number
			playerTwoWins: number
		}>
	>
}
