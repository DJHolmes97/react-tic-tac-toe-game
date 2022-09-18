import * as React from 'react'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import { Paper } from '@mui/material'

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
	height: '100px',
	maxWidth: '100px',
}))

const Board = () => {
	return (
		<Grid container columns={3}>
			<Grid xs={1}>
				<Item>X</Item>
			</Grid>
			<Grid xs={1}>
				<Item>X</Item>
			</Grid>
			<Grid xs={1}>
				<Item>X</Item>
			</Grid>
			<Grid xs={1}>
				<Item>X</Item>
			</Grid>
			<Grid xs={1}>
				<Item>X</Item>
			</Grid>
			<Grid xs={1}>
				<Item>X</Item>
			</Grid>
			<Grid xs={1}>
				<Item>X</Item>
			</Grid>
			<Grid xs={1}>
				<Item>X</Item>
			</Grid>
			<Grid xs={1}>
				<Item>X</Item>
			</Grid>
		</Grid>
	)
}

export default Board
