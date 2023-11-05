import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../src/components/footer/Footer";

describe("Componente Footer", () => {
    it("Verifica se o componente footer está sendo renderizado", () => {
        render(<Footer />);
        const textoFooter = screen.getByText("MKS sistemas © Todos os direitos reservados");
        expect(textoFooter).toBeTruthy();
    });
});
