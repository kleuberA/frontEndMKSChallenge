"use client"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import * as S from "./Style.cart";
import Image from "next/image";

interface CartContainerProps {
    menu: any;
    updateCartItemCount: any;
}

interface ListCartItems {
    id: number,
    name: string,
    price: number,
    quantity: number,
    image: string,
    brand: string
}

export default function CartContainer(props: CartContainerProps) {

    const [listItemsCart, setListItemsCart] = useState<ListCartItems[]>([])

    const fetchListCartItems = () => {
        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        setListItemsCart(storedCart);
    };

    useEffect(() => {
        fetchListCartItems();
    }, []);

    const handleButtonAddQuantity = (itemId: number) => {
        const itemIndex = listItemsCart.findIndex((item) => item.id === itemId);
        if (itemIndex !== -1) {
            const updatedCart = [...listItemsCart];
            updatedCart[itemIndex].quantity++;
            setListItemsCart(updatedCart);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
        }
    }
    const handleButtonRemoveQuantity = (itemId: number) => {
        const itemIndex = listItemsCart.findIndex((item) => item.id === itemId);
        if (itemIndex !== -1) {
            const updatedCart = [...listItemsCart];
            if (updatedCart[itemIndex].quantity > 1) {
                updatedCart[itemIndex].quantity--;
            }
            setListItemsCart(updatedCart);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
        }
    }

    const handleRemoveItemListCart = (itemId: number) => {
        const itemIndex = listItemsCart.findIndex((item) => item.id === itemId);
        if (itemIndex !== -1) {
            const updatedCart = [...listItemsCart];
            updatedCart.splice(itemIndex, 1);
            setListItemsCart(updatedCart)
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            props.updateCartItemCount(updatedCart.length);
        }

    };

    const calculateTotal = () => {
        let total = 0;
        for (const item of listItemsCart) {
            total += item.price * item.quantity;
        }
        return total;
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <S.ContainerCart>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <S.HeaderCart>
                        <S.TitleCart>Carrinho de Compras</S.TitleCart>
                        <S.CloseCart onClick={props.menu}>
                            <S.ElementClose>X</S.ElementClose>
                        </S.CloseCart>
                    </S.HeaderCart>
                </motion.div>
                {listItemsCart.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <S.ContainerSemItems>
                            <S.TextSemItems>Seu carrinho está vazio. 😢</S.TextSemItems>
                        </S.ContainerSemItems>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <S.ListCartItems>
                            {listItemsCart.map((element: any, key: number) => {
                                let price = parseFloat(element.price);
                                return (
                                    <S.ItemCart key={key}>
                                        <S.RemoveItemCart onClick={() => handleRemoveItemListCart(element.id)}>
                                            <S.IconClose>X</S.IconClose>
                                        </S.RemoveItemCart>
                                        <S.ContainerItemCart>
                                            <S.ImageProduct>
                                                <Image className="imageProduct" src={element.photo} alt={"Imagem ilustrativa de um produto."} width={60} height={60} />
                                            </S.ImageProduct>
                                            <S.NameProductItemCart>
                                                <S.TextNameProductItem>{element.brand}{" "}{element.name}</S.TextNameProductItem>
                                            </S.NameProductItemCart>
                                            <S.ContainerElementsInfosProducts>
                                                <S.QuantityProduct>
                                                    <S.QuantityContainerText>
                                                        <S.QuantityTextNameSection>Qtd:</S.QuantityTextNameSection>
                                                    </S.QuantityContainerText>
                                                    <S.ContainerElementQuantity>
                                                        <S.QuantityButton onClick={() => handleButtonRemoveQuantity(element.id)}>-</S.QuantityButton>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="2" height="12" viewBox="0 0 2 12" fill="none">
                                                            <path d="M1 0V11.5" stroke="#BFBFBF" strokeWidth="0.2" />
                                                        </svg>
                                                        <S.QuantityValue>{element.quantity}</S.QuantityValue>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="2" height="12" viewBox="0 0 2 12" fill="none">
                                                            <path d="M1 0V11.5" stroke="#BFBFBF" strokeWidth="0.2" />
                                                        </svg>
                                                        <S.QuantityButton onClick={() => handleButtonAddQuantity(element.id)}>+</S.QuantityButton>
                                                    </S.ContainerElementQuantity>
                                                </S.QuantityProduct>
                                                <S.PriceProduct>
                                                    <S.TextPrice>R$ {price}</S.TextPrice>
                                                </S.PriceProduct>
                                            </S.ContainerElementsInfosProducts>
                                        </S.ContainerItemCart>
                                    </S.ItemCart>
                                )
                            })}
                        </S.ListCartItems>
                    </motion.div>
                )}
                {listItemsCart.length != 0 &&
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <S.ContainerTotalValor>
                            <S.TextNameSection>Total:</S.TextNameSection>
                            <S.TextValor>R$ {calculateTotal()}</S.TextValor>
                        </S.ContainerTotalValor>

                        <S.ContainerFooter>
                            <S.ButtonFinalizarCompra>Finalizar Compra</S.ButtonFinalizarCompra>
                        </S.ContainerFooter>
                    </motion.div>
                }
            </S.ContainerCart>
        </motion.div>
    )
}