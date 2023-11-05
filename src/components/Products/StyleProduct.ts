"use client";
import { keyframes, styled } from "styled-components";

export const ContainerCardProducts = styled.div`
	width: 100%;
	height: auto;
	background: #f9f9f9;
	padding: 5rem 0;
`;
export const ContainerFlexCards = styled.div`
	width: 80%;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	margin: auto;
	justify-content: center;
	align-items: center;
	gap: 2.5rem;
`;

export const CardProduct = styled.div`
	width: 13.625rem;
	height: 17.8125rem;
	flex-shrink: 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	box-shadow: 2px 8px 15px -5px rgba(0, 0, 0, 0.5);
	border-radius: 0.5rem;
`;

export const CardImageProduct = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px 0 0 0;
`;

export const CardInfosProduct = styled.div``;

export const CardComprarProduct = styled.div`
	width: 100%;
	height: 1.99419rem;
	background-color: #0f52ba;
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
	background: #373737;
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
