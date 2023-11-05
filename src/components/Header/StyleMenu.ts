"use client";

import { styled } from "styled-components";

export const ContainerMenu = styled.div`
	width: 100%;
	height: 6.3125rem;
	flex-shrink: 0;
	background: #0f52ba;
`;

export const ElementsMenu = styled.div`
	width: 90%;
	margin: auto;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
`;

export const ContainerLogo = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	flex-wrap: wrap;
`;

export const Logo = styled.h1`
	/* width: 8rem; */
	/* height: 2.75rem; */
	flex-shrink: 0;
	color: #fff;
	font-family: "Montserrat";
	font-size: 2.5rem;
	font-style: normal;
	font-weight: 600;
	line-height: 1.1875rem;
`;

export const SubtitleLogo = styled.span`
	/* width: 12.5rem; */
	/* height: 2.75rem; */
	flex-shrink: 0;
	color: #fff;
	font-family: "Montserrat";
	font-size: 1.25rem;
	font-style: normal;
	font-weight: 300;
	line-height: 1.1875rem; /* 95% */
`;

export const ContainerCartMenu = styled.div`
	width: 5.625rem;
	height: 2.8125rem;
	flex-shrink: 0;
	border-radius: 0.5rem;
	background: #fff;
	display: flex;
	flex-direction: row;
	gap: 2;
	align-items: center;
	justify-content: space-between;
	padding-left: 1rem;
	padding-right: 1rem;
	cursor: pointer;
`;

export const NumbersItensOfCart = styled.h1`
	color: #000;
	font-family: Montserrat;
	font-size: 1.125rem;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
`;
