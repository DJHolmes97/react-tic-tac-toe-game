import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ScoreBoardType } from '../types/gameTypes'
import * as Styled from './Scoreboard.styles'

const ScoreBoard = ({ playerOneWins, playerTwoWins }: ScoreBoardType) => {
	return (
		<Styled.ScoreBoardContainer>
			<Row>
				<h1>Scoreboard</h1>
			</Row>
			<Row>
				<Col xs={6}>
					<h3>Player 1</h3>
				</Col>
				<Col xs={6}>
					<h3>Player 2</h3>
				</Col>
			</Row>
			<Row>
				<Col xs={6}>
					<h4>{playerOneWins}</h4>
				</Col>
				<Col xs={6}>
					<h4>{playerTwoWins}</h4>
				</Col>
			</Row>
		</Styled.ScoreBoardContainer>
	)
}

export default ScoreBoard
