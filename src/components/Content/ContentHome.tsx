"use client"
import CardProducts from "../Products/CardProduct";
import CartContainer from "../Cart/CartContainer";
import Footer from "../footer/Footer";
import * as S from "./StyleContent";
import Menu from "../Header/Menu";
import { useState } from "react";

export default function ContentHome() {
    const numberElements = JSON.parse(localStorage.getItem("cart") || "[]");

    const [openMenu, setOpenMenu] = useState(false);
    const [cartItemCount, setCartItemCount] = useState(numberElements.length);

    const handleOpenMenu = () => {
        setOpenMenu(true);
    }

    const handleCloseMenu = () => {
        setOpenMenu(false);
    }

    return (
        <div>
            {openMenu && (
                <CartContainer menu={handleCloseMenu} updateCartItemCount={(count: number) => setCartItemCount(count)} />
            )}
            <S.ContainerContent>
                <Menu menu={handleOpenMenu} cartItemCount={cartItemCount} />
                <CardProducts menu={handleOpenMenu} updateCartItemCount={(count: number) => setCartItemCount(count)} />
                <Footer />
            </S.ContainerContent>
        </div>
    )
}