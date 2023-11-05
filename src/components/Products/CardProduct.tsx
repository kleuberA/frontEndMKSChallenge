"use client"
import LoadingCard from "./LoadingCard";
import { useQuery } from "react-query";
import * as S from "./StyleProduct";
import Image from "next/image";


interface CardProductsProps {
    menu: any;
    updateCartItemCount: any;
}
export default function CardProducts(props: CardProductsProps) {

    const fetchData = async () => {
        try {
            const response = await fetch(`https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC`);
            if (!response.ok) {
                throw new Error('Não foi possivel buscar esses dados.');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            throw error;
        }
    };

    const { isLoading, error, data } = useQuery(["listOfProducts"], () => fetchData());

    if (isLoading) return <LoadingCard />

    if (error) return 'Ocorreu um erro: ' + (error as Error).message;

    const handleAddProductOfCart = (element: any) => {
        element.quantity = 1;

        const productsInCart = JSON.parse(localStorage.getItem("cart") || "[]");

        const existingProduct = productsInCart.find((item: any) => item.id === element.id);

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            productsInCart.push(element);
        }
        localStorage.setItem("cart", JSON.stringify(productsInCart));
        props.updateCartItemCount(productsInCart.length);
    }

    return (
        <S.ContainerCardProducts>
            <S.ContainerFlexCards>
                {data.products.map((element: any, key: number) => {
                    let price = parseFloat(element.price);
                    return (
                        <S.CardProduct key={key} data-testid="products">
                            <S.CardImageProduct>
                                <Image src={element.photo} alt={"Ilustration image of product."} width={100} height={100} />
                            </S.CardImageProduct>
                            <S.CardInfosProduct>
                                <S.ContainerFlexInfoProduct>
                                    <S.NameProduct>{element.brand}{" "}{element.name}</S.NameProduct>
                                    <S.ElementPrice>
                                        <S.TextPrice>R$ {price}</S.TextPrice>
                                    </S.ElementPrice>
                                </S.ContainerFlexInfoProduct>
                                <S.DescriptionProduct>{element.description}</S.DescriptionProduct>
                            </S.CardInfosProduct>
                            <S.CardComprarProduct onClick={() => handleAddProductOfCart(element)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
                                    <path opacity="0.737212" fill-rule="evenodd" clip-rule="evenodd" d="M3 1L1 3.7V13.15C1 13.8956 1.59695 14.5 2.33333 14.5H11.6667C12.403 14.5 13 13.8956 13 13.15V3.7L11 1H3Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path opacity="0.737212" d="M1 4.375H13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path opacity="0.737212" d="M10 7C10 8.24264 8.82475 9.25 7.375 9.25C5.92525 9.25 4.75 8.24264 4.75 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <S.TextComprar>COMPRAR</S.TextComprar>
                            </S.CardComprarProduct>
                        </S.CardProduct>
                    )
                })}
            </S.ContainerFlexCards>
        </S.ContainerCardProducts>
    )
}