import React from 'react';
import Header from './t2020/Header';
import {Container, Box, Grid, makeStyles} from '@material-ui/core';
import PropTypes from 'prop-types';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';

import SimpleCard from './t2020/CustomColoredCard';

const useStyles = makeStyles((theme) => ({
	back_to_top: {
		backgroundColor: theme.palette.secondary.dark,
		color: '#fff',
		position: 'fixed',
		bottom: theme.spacing(2),
		right: theme.spacing(2),
		'&:hover': {
			backgroundColor: theme.palette.secondary.main,
			color: '#fff',
		},
	},
}));

function ScrollTop(props) {
	const {children, window} = props;

	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
		disableHysteresis: true,
		threshold: 100,
	});

	const handleClick = (event) => {
		const anchor = (event.target.ownerDocument || document).querySelector(
			'#back-to-top-anchor',
		);

		if (anchor) {
			anchor.scrollIntoView({behavior: 'smooth', block: 'center'});
		}
	};

	return (
		<Zoom in={trigger}>
			<div onClick={handleClick} role="presentation">
				{children}
			</div>
		</Zoom>
	);
}

ScrollTop.propTypes = {
	children: PropTypes.element.isRequired,
	window: PropTypes.func,
};

function BodyPart(props) {
	const classes = useStyles();
	return (
		<div>
			<div id="back-to-top-anchor"></div>
			<Header />

			<Container style={{padding: '80px 0 50px 0'}}>
				<Grid
					container
					direction="row"
					justify="center"
					alignItems="center"
					spacing={4}
				>
					{[...new Array(8)].map((arg, index) => {
						return (
							<Grid item lg={3} md={6} xs={12} key={index}>
								<SimpleCard
									card_title="title"
									card_body_text="body..."
									bg="#333"
								/>
							</Grid>
						);
					})}

					{[...new Array(8)].map((arg, index) => {
						return (
							<Grid item lg={3} md={6} xs={12} key={index}>
								<SimpleCard
									card_title="title"
									card_body_text="body..."
									bg="#9b0"
								/>
							</Grid>
						);
					})}

					{[...new Array(8)].map((arg, index) => {
						return (
							<Grid item lg={3} md={6} xs={12} key={index}>
								<SimpleCard
									card_title="title"
									card_body_text="body..."
									bg="#0ac"
								/>
							</Grid>
						);
					})}

					{[...new Array(8)].map((arg, index) => {
						return (
							<Grid item lg={3} md={6} xs={12} key={index}>
								<SimpleCard
									card_title="title"
									card_body_text="body..."
									bg="#73f"
								/>
							</Grid>
						);
					})}
				</Grid>
			</Container>

			<ScrollTop {...props}>
				<Fab
					// color="secondary"
					size="medium"
					aria-label="scroll back to top"
					className={classes.back_to_top}
				>
					<KeyboardArrowUpIcon />
				</Fab>
			</ScrollTop>
		</div>
	);
}

export default BodyPart;
