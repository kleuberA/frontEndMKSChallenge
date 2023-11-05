import { render, screen, fireEvent } from "@testing-library/react";
import CartContainer from "../src/components/Cart/CartContainer";

describe("CartContainer Component", () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it("Renderizar o componente CartContainer", () => {
        render(<CartContainer menu={() => { }} />);

        const titleElement = screen.getByText("Carrinho de Compras");
        expect(titleElement)

        const emptyCartMessage = screen.queryByText("Seu carrinho está vazio. 😢");
        expect(emptyCartMessage);

    });

    it("Adicionar a quantidade a um determinado produto ao clicar no botão de adicionar quantidade", () => {
        const item = {
            id: 1,
            name: "Iphone 15",
            price: 1050,
            quantity: 1,
            photo: "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp",
            brand: "Apple",
        };

        localStorage.setItem("cart", JSON.stringify([item]));

        render(<CartContainer menu={() => { }} />);

        const addButton = screen.getByText("+");
        expect(addButton);

        fireEvent.click(addButton);

        const updatedQuantityElement = screen.getByText("2");
        expect(updatedQuantityElement);
    });

    it("Diminuir a quantidade de um determinado produto ao clicar no botão de diminuir quantidade", () => {
        const item = {
            id: 1,
            name: "Iphone 15",
            price: 1050,
            quantity: 2,
            photo: "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp",
            brand: "Apple",
        };

        localStorage.setItem("cart", JSON.stringify([item]));

        render(<CartContainer menu={() => { }} />);

        const subtractButton = screen.getByText("-");
        expect(subtractButton);

        fireEvent.click(subtractButton);

        const updatedQuantityElement = screen.getByText("1");
        expect(updatedQuantityElement);
    });

    it("Remover um item corretamente ao clicar no botão de remover item", () => {
        const item = {
            id: 1,
            name: "Iphone 15",
            price: 1050,
            quantity: 1,
            photo: "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp",
            brand: "Apple",
        };
        localStorage.clear();
        localStorage.setItem("cart", JSON.stringify([item]));

        render(<CartContainer menu={() => { }} />);

        const removeItemButton = screen.getByText("X", { selector: ".sc-eCAqax" });
        expect(removeItemButton);

        if (removeItemButton) {
            fireEvent.click(removeItemButton);
        }
    });

    it("Calcular o total do valor de todos items do carrinho", () => {
        const items = [
            {
                id: 1,
                name: "Iphone 15",
                price: 1050,
                quantity: 2,
                photo: "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp",
                brand: "Apple",
            },
            {
                id: 2,
                name: "Mac",
                price: 900,
                quantity: 1,
                photo: "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp",
                brand: "Apple",
            },
        ];

        localStorage.setItem("cart", JSON.stringify(items));

        render(<CartContainer menu={() => { }} />);

        const totalElement = screen.getByText("R$ 3000");
        expect(totalElement);
    });

});