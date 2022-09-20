import styled from 'styled-components'
import { Col, Container, Row } from 'react-bootstrap'

export const Square = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #b8e0d2;
	aspect-ratio: 1 / 1;
	width: 100%;
	align-content: center;
`

export const BoardRow = styled(Row)`
	height: calc(100% / 3);
	align-items: center;
`

export const BoardCol = styled(Col)`
	--bs-gutter-x: 0.5rem;
	--bs-gutter-x: 0.5rem;
`

export const BoardContainer = styled(Container)`
	max-width: 500px;
	min-width: 250px;
	aspect-ratio: 1 / 1;
	background-color: #95b8d1;
`
