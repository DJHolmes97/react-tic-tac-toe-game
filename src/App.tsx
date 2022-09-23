import * as React from 'react'
import { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Board from './components/Board'
import ScoreBoard from './components/ScoreBoard'
import './styles.css'
import {
	GamePropTypes,
	WinningCombinationsType,
	WinsCountType,
} from './types/gameTypes'

const WinningCombinations: WinningCombinationsType = {
	topRow: ['a1', 'a2', 'a3'],
	midRow: ['b1', 'b2', 'b3'],
	bottomRow: ['c1', 'c2', 'c3'],
	diagRight: ['a1', 'b2', 'c3'],
	diagLeft: ['a3', 'b2', 'c1'],
	leftCol: ['a1', 'b1', 'c1'],
	midCol: ['a2', 'b2', 'c2'],
	rightCol: ['a3', 'b3', 'c3'],
}

const gameWinnerCheckHelper = (
	gameState: GamePropTypes,
	setGameState: React.Dispatch<React.SetStateAction<GamePropTypes>>,
	winsCount: WinsCountType
) => {
	for (const key in WinningCombinations) {
		const currentCombination =
			WinningCombinations[key as keyof typeof WinningCombinations]
		const cell1 = gameState.boardCells[currentCombination[0]]
		const cell2 = gameState.boardCells[currentCombination[1]]
		const cell3 = gameState.boardCells[currentCombination[2]]
		const result = cell1 + cell2 + cell3
		if (result === 'noughtnoughtnought') {
			gameState.winners.player1 = true
			setGameState((gameState) => ({
				...gameState,
			}))
			winsCount.winsCount.playerOneWins++
			winsCount.setWinsCount((winsCount) => ({
				...winsCount,
			}))
		}

		if (result === 'crosscrosscross') {
			gameState.winners.player2 = true
			setGameState((gameState) => ({
				...gameState,
			}))
			winsCount.winsCount.playerTwoWins++
			winsCount.setWinsCount((winsCount) => ({
				...winsCount,
			}))
		}
	}
}

export default function App() {
	const [gameState, setGameState] = useState<GamePropTypes>({
		playerOneTurn: true,
		turnCount: 1,
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
		winners: {
			player1: false,
			player2: false,
		},
	})
	const [winsCount, setWinsCount] = useState({
		playerOneWins: 0,
		playerTwoWins: 0,
	})
	const WinsCount: WinsCountType = {
		winsCount: winsCount,
		setWinsCount: setWinsCount,
	}

	const handleClick = () => {
		gameState.playerOneTurn = true
		gameState.turnCount = 1
		gameState.boardCells = {
			a1: 'empty',
			a2: 'empty',
			a3: 'empty',
			b1: 'empty',
			b2: 'empty',
			b3: 'empty',
			c1: 'empty',
			c2: 'empty',
			c3: 'empty',
		}
		gameState.winners = {
			player1: false,
			player2: false,
		}
		setGameState((gameState) => ({
			...gameState,
		}))
		console.log(winsCount)
	}
	return (
		<div className="App">
			<Container>
				<Row className="mb-5">
					<Col xs={2} />
					<Col xs={8}>
						<h1>Tic Tac Toe Game</h1>
						{gameState.playerOneTurn ? (
							<h2>It is player ones turn.</h2>
						) : (
							<h2>It is player twos turn.</h2>
						)}
					</Col>
					<Col xs={2} />
				</Row>
				<Row>
					<Col sm={12} md={6}>
						<Board
							gameState={gameState}
							setGameState={setGameState}
							gameWinnerCheckHelper={gameWinnerCheckHelper}
							winsCount={WinsCount}
						/>
					</Col>
					<Col sm={12} md={6}>
						<ScoreBoard
							playerOneWins={winsCount.playerOneWins}
							playerTwoWins={winsCount.playerTwoWins}
						/>
					</Col>
					{gameState.winners.player1 && (
						<h1>Player 1 has won the game!</h1>
					)}
					{gameState.winners.player2 && (
						<h1>Player 2 has won the game!</h1>
					)}
					{(gameState.winners.player1 ||
						gameState.winners.player2 ||
						gameState.turnCount > 8) && (
						<Button variant="primary" onClick={handleClick}>
							Reset Game
						</Button>
					)}
				</Row>
			</Container>
		</div>
	)
}
