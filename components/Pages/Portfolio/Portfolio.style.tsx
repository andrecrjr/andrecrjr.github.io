'use client';
import styled from 'styled-components';
import { Container, Presentation } from '../styles';

export const PortfolioList = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	flex-wrap: wrap;
	@media (min-width: 767px) {
		flex-direction: row;
		max-width: 85%;
		justify-content: center;
		align-items: center;
		align-self: center;
		gap: 35px;
	}
`;

export const PortfolioPresentation = styled(Presentation)`
	.portfolio--title {
		margin: 15px 0;
	}
	.portfolio--description {
		margin-bottom: 25px;
	}

	@media (min-width: 767px) {
		.portfolio--title {
			margin: 45px 0;
		}
		.portfolio--description {
			margin-bottom: 40px;
		}
	}
`;

export const PortfolioContainer = styled(Container)`
	padding: 25px 20px;
	background: ${(props) => `${props.theme.colors.backgroundPrimary}`};
`;

export const PortfolioHeader = styled.h2`
	font-size: 0.9rem;
	color: #fff;
`;

export const PortfolioDescription = styled.p`
	color: #fff;
	font-style: italic;
	font-size: 0.78rem;
	padding-bottom: 10px;
`;

export const PortfolioItem = styled.section<{ hasImage?: boolean }>`
	width: 80%;
	height: auto;
	margin-bottom: 25px;
	align-self: center;
	border-radius: 8%;
	box-shadow: #646464 0px 3px 14px -8px;
	text-decoration: none;
	display: grid;
	transition: transform 100ms linear;
	aspect-ratio: 16 / 8;
	padding: ${(props) => !props.hasImage && '15px'};
	position: relative;
	@media screen and (min-width: 767px) {
		width: 35%;
	}
	.portfolio--wip {
		position: absolute;
		color: #fff;
		z-index: 100;
		font-weight: bold;
		background: #5a0711;
		border-radius: 4px;
		padding: 4px;
		font-size: 0.78rem;
		&.doing {
			&::before {
				content: '👨‍💻 ';
			}
		}
		&.red {
			background: green;
			border-radius: 4px;
			&::before {
				content: '✔️ ';
			}
		}
	}
	&:hover {
		transform: scale(101.5%);
	}
`;

export const PortfolioItemImage = styled.div<{ bgImg: string }>`
	background: ${(props) => `url("${props.bgImg}")`};
	background-position: fixed;
	background-size: 100% 100%;
	background-repeat: no-repeat;
	transition: 200ms transform ease-in;
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
	opacity: 0.8;
	aspect-ratio: 16 / 8;
`;

export const PortfolioItemList = styled.ul`
	list-style: none;
	li {
		font-size: 0.77rem;
		padding: 10px 16px 0 0;
		color: #eee;
		display: inline;
	}
`;

export const PortfolioDescriptionContainer = styled.section`
	display: flex;
	flex-direction: column;
	padding: 20px 20px 20px 20px;
`;

export const PortfolioSoon = styled.h3`
	font-size: 1.2rem;
	color: white;
	align-self: center;
	justify-self: center;
`;

export const PortfolioListButtons = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 15px 10px;

	a {
		text-decoration: none;
		padding: 0 15px;
		font-size: 1rem;
		&:first-child {
			border-right: 3px solid white;
		}
	}
`;
