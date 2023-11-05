"use client";

import { styled } from "styled-components";

export const ContainerCart = styled.div`
	width: 30.375rem;
	height: 64rem;
	flex-shrink: 0;
	position: fixed;
	z-index: 20;
	right: 0;
	background: #0f52ba;
	box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);
	@media (max-width: 600px) {
		width: 22rem;
	}
`;

export const HeaderCart = styled.div`
	width: 80%;
	margin: auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 7rem;
`;

export const TitleCart = styled.h1`
	width: 11.25rem;
	height: 3.5rem;
	flex-shrink: 0;
	color: #fff;
	font-family: Montserrat;
	font-size: 1.6875rem;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
`;

export const CloseCart = styled.div`
	width: 2.375rem;
	height: 2.375rem;
	flex-shrink: 0;
	background-color: #000000;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 100%;
	cursor: pointer;
`;

export const ElementClose = styled.h1`
	width: 1rem;
	height: 1rem;
	flex-shrink: 0;
	color: #fff;
	font-family: Montserrat;
	text-align: center;
	font-size: 1.35rem;
	font-style: normal;
	font-weight: 400;
	line-height: 0.9375rem; /* 53.571% */
`;

export const ListCartItems = styled.div`
	width: 80%;
	padding: 10px 0 0 0;
	margin: auto;
	height: 65vh;
	display: flex;
	flex-direction: column;
	gap: 10px;
	overflow: auto;
	transition: 2s;
	&::-webkit-scrollbar {
		display: none;
	}
`;

export const ItemCart = styled.div`
	width: 23.6875rem;
	height: 5.9375rem;
	flex-shrink: 0;
	border-radius: 0.5rem;
	background: #fff;
	box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.05);
	position: relative;
	@media (max-width: 600px) {
		width: 100%;
		height: 13.75294rem;
	}
`;

export const ContainerItemCart = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-direction: row;
	@media (max-width: 600px) {
		flex-direction: column;
	}
`;

export const RemoveItemCart = styled.div`
	position: absolute;
	width: 1.125rem;
	height: 1.125rem;
	flex-shrink: 0;
	background-color: #000000;
	right: -7px;
	top: -8px;
	border-radius: 100%;
	cursor: pointer;
	text-align: center;
	@media (max-width: 600px) {
		right: 20px;
		top: 20px;
		background-color: transparent;
	}
`;

export const IconClose = styled.div`
	color: #fff;
	font-family: Montserrat;
	font-size: 0.7rem;
	font-style: normal;
	font-weight: 400;
	line-height: 1rem; /* 121.429% */
	text-align: center;
	@media (max-width: 600px) {
		color: #000000;
		font-size: 2.625rem;
		line-height: 1.0625rem; /* 40.476% */
	}
`;

export const ImageProduct = styled.div``;
export const QuantityProduct = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ContainerElementsInfosProducts = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	gap: 20px;
	@media (max-width: 600px) {
		width: 80%;
		margin: auto;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 20px;
	}
`;

export const PriceProduct = styled.div`
	padding: 0;
	height: 0rem;
	@media (max-width: 600px) {
		border-radius: 0.3125rem;
		background: #373737;
		padding: 0.5rem;
		height: 2rem;
	}
`;
export const TextPrice = styled.h1`
	width: 3.875rem;
	height: 1.0625rem;
	flex-shrink: 0;
	color: #000;
	font-family: Montserrat;
	font-size: 0.875rem;
	font-style: normal;
	font-weight: 700;
	line-height: 1.0625rem; /* 121.429% */
	@media (max-width: 600px) {
		border-radius: 0.3125rem;
		color: #fff;
	}
`;

export const QuantityContainerText = styled.div``;
export const QuantityTextNameSection = styled.span`
	color: #000;
	font-family: Montserrat;
	font-size: 0.5rem;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	@media (max-width: 600px) {
		display: none;
	}
`;

export const ContainerElementQuantity = styled.div`
	display: flex;
	flex-direction: row;
	width: 4rem;
	height: 1.5rem;
	flex-shrink: 0;
	border-radius: 0.25rem;
	border: 0.3px solid #bfbfbf;
	background: #fff;
	justify-content: space-between;
	text-align: center;
	align-items: center;
	@media (max-width: 600px) {
		width: 5rem;
		height: 2rem;
		text-align: center;
	}
`;

export const NameProductItemCart = styled.div`
	width: 80px;
	@media (max-width: 600px) {
		width: 80%;
		text-align: center;
	}
`;
export const TextNameProductItem = styled.span`
	width: 7.0625rem;
	height: 2.0625rem;
	flex-shrink: 0;
	color: #2c2c2c;
	font-family: Montserrat;
	font-size: 0.8125rem;
	font-style: normal;
	font-weight: 400;
	line-height: 1.0625rem;
	@media (max-width: 600px) {
		font-size: 1rem;
		line-height: 1.1875rem;
	}
`;

export const QuantityButton = styled.div`
	width: 50%;
	cursor: pointer;
	height: 100%;
	text-align: center;
	font-size: 1rem;
	transition: 1s;
	&:hover {
		background-color: #0f52ba;
		color: #ffffff;
	}
	@media (max-width: 600px) {
		font-size: 1.5rem;
	}
`;
export const QuantityValue = styled.div`
	width: 2rem;
	color: #000;
	font-family: Montserrat;
	font-size: 0.8rem;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	text-align: center;
	@media (max-width: 600px) {
		font-size: 1.5rem;
	}
`;

export const ContainerTotalValor = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 80%;
	margin: auto;
	height: 3.5rem;
`;
export const TextNameSection = styled.h1`
	color: #fff;
	font-family: Montserrat;
	font-size: 1.75rem;
	font-style: normal;
	font-weight: 700;
	line-height: 0.9375rem; /* 53.571% */
`;
export const TextValor = styled.h1`
	color: #fff;
	font-family: Montserrat;
	font-size: 1.75rem;
	font-style: normal;
	font-weight: 700;
	line-height: 0.9375rem;
`;

export const ContainerFooter = styled.div``;
export const ButtonFinalizarCompra = styled.button`
	width: 30.375rem;
	height: 6.0625rem;
	flex-shrink: 0;
	background: #000;
	color: #fff;
	font-family: Montserrat;
	font-size: 1.75rem;
	font-style: normal;
	font-weight: 700;
	line-height: 0.9375rem;
	border: none;
	cursor: pointer;
	@media (max-width: 600px) {
		width: 100%;
	}
`;

export const ContainerSemItems = styled.div`
	width: 80%;
	margin: auto;
	height: 50vh;
	display: flex;
	text-align: center;
	align-items: center;
	justify-content: center;
`;

export const TextSemItems = styled.h1`
	width: 100%;
	flex-shrink: 0;
	color: #fff;
	font-family: Montserrat;
	font-size: 2rem;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
`;
