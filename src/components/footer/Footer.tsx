import * as S from "./Style.Footer";

interface FooterProps {

}
export default function Footer(props: FooterProps) {
    return (
        <S.ContainerFooter>
            <S.TextFooter>
                MKS sistemas © Todos os direitos reservados
            </S.TextFooter>
        </S.ContainerFooter>
    )
}