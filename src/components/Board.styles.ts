import styled from 'styled-components'
import { Container, Row } from 'react-bootstrap'

export const Square = styled.div`
	background-color: yellow;
	aspect-ratio: 1 / 1;
	width: 100%;
`

export const BoardRow = styled(Row)`
	height: calc(100% / 3);
	align-items: center;
`

export const BoardContainer = styled(Container)`
	max-width: 500px;
	min-width: 250px;
	aspect-ratio: 1 / 1;
	background-color: blue;
	--bs-gutter-x: 0.5rem;
`
