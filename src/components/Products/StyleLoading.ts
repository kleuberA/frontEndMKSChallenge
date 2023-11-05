"use client";
import { keyframes, styled } from "styled-components";

export const ContainerLoading = styled.div`
	width: 100%;
	background: #f9f9f9;
	height: 100vh;
	padding: 5rem 0;
`;

export const ElementsCards = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 2.5rem;
	height: 100%;
	width: 80%;
	margin: auto;
`;

export const CardProductLoading = styled.div`
	width: 13.625rem;
	height: 17.8125rem;
	flex-shrink: 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	box-shadow: 2px 8px 15px -5px rgba(0, 0, 0, 0.5);
	border-radius: 0.5rem;
`;

const baseColor = "#ddd";
const shineColor = "#e8e8e8";
const animationDuration = "1.6s";
const avatarOffset = 52 + 16;

const backgroundGradientMixin = `
  background-image: linear-gradient(90deg, ${baseColor} 0px, ${shineColor} 40px, ${baseColor} 80px);
  background-size: 600px;
`;

const shineLinesAnimation = keyframes`
  0% {
    background-position: -100px;
  }
  40%, 100% {
    background-position: 140px;
  }
`;

const shineAvatarAnimation = keyframes`
  0% {
    background-position: -100px + ${avatarOffset}px;
  }
  40%, 100% {
    background-position: 140px + ${avatarOffset}px;
  }
`;

export const Container = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const ImageProduct = styled.div`
	float: left;
	width: 100px;
	height: 100px;
	background-color: #ccc;
	margin: 8px;

	${backgroundGradientMixin}
	animation: ${shineAvatarAnimation} ${animationDuration} infinite linear;
`;

export const Line = styled.div`
	float: left;
	width: 100px;
	height: 16px;
	border-radius: 7px;

	${backgroundGradientMixin}
	animation: ${shineLinesAnimation} ${animationDuration} infinite linear;
`;
export const ContainerElementName = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const Icon = styled(Line)`
	width: 20px;
	height: 20px;
`;

export const DescriptionLine = styled(Line)`
	background-color: ${baseColor};
	width: 200px;
	border-radius: 4px;
	border-radius: 7px;
`;
export const ContainerDescription = styled.div`
	padding: 0 10px;
	display: flex;
	flex-direction: column;
	gap: 5px;
`;

export const SecondLine = styled(Line)`
	background-color: ${baseColor};
	width: 60px;
	height: 25px;
	border-radius: 4px;
`;

export const CardImageProduct = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px 0 0 0;
`;

export const CardInfosProduct = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const CardComprarProduct = styled.div`
	width: 100%;
	height: 1.99419rem;
	border-bottom-left-radius: 0.5rem;
	border-bottom-right-radius: 0.5rem;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	color: #ffffff;
	cursor: pointer;
	gap: 10px;
	transition: all;
	text-align: center;
`;

export const TextComprar = styled.span`
	width: 4.8125rem;
	height: 0.875rem;
	flex-shrink: 0;
	color: #fff;
	font-family: Montserrat;
	font-size: 0.875rem;
	font-style: normal;
	font-weight: 600;
	line-height: 1.125rem; /* 128.571% */
`;
export const ContainerFlexInfoProduct = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 0 10px;
	align-items: center;
`;

export const NameProduct = styled.h1`
	width: 7.75rem;
	/* height: 2.375rem; */
	flex-shrink: 0;
	color: #2c2c2c;
	font-family: "Montserrat";
	font-size: 1rem;
	font-style: normal;
	font-weight: 400;
	line-height: 1.1875rem; /* 118.75% */
`;

export const ElementPrice = styled.div`
	width: 5rem;
	height: 1.625rem;
	flex-shrink: 0;
	border-radius: 0.3125rem;
	text-align: center;
	padding: 3px 0;
`;

export const TextPrice = styled.span`
	width: 3rem;
	height: 1.125rem;
	flex-shrink: 0;
	color: #fff;
	font-family: Montserrat;
	font-size: 0.9375rem;
	font-style: normal;
	font-weight: 700;
	line-height: 0.937rem; /* 100% */
`;

export const DescriptionProduct = styled.p`
	width: 14rem;
	height: 1.5625rem;
	flex-shrink: 0;
	color: #2c2c2c;
	font-family: Montserrat;
	font-size: 0.625rem;
	font-style: normal;
	font-weight: 300;
	line-height: 0.75rem; /* 120% */
	padding: 0 10px;
`;
