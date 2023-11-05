import * as S from './StyleLoading';
import React from 'react';

export default function LoadingCard() {
    const numberOfCards = 8;

    const generateCardElements = () => {
        const cardElements = [];

        for (let i = 0; i < numberOfCards; i++) {
            cardElements.push(
                <S.CardProductLoading key={i}>
                    <S.CardImageProduct>
                        <S.ImageProduct />
                    </S.CardImageProduct>
                    <S.CardInfosProduct>
                        <S.ContainerFlexInfoProduct>
                            <S.ContainerElementName>
                                <S.Line />
                                <S.Line />
                            </S.ContainerElementName>
                            <S.ElementPrice>
                                <S.SecondLine />
                            </S.ElementPrice>
                        </S.ContainerFlexInfoProduct>
                        <S.ContainerDescription>
                            <S.DescriptionLine />
                            <S.DescriptionLine />
                        </S.ContainerDescription>
                    </S.CardInfosProduct>
                    <S.CardComprarProduct>
                        <S.Icon />
                        <S.Line />
                    </S.CardComprarProduct>
                </S.CardProductLoading>
            );
        }
        return cardElements;
    };
    return (
        <S.ContainerLoading>
            <S.ElementsCards>{generateCardElements()}</S.ElementsCards>
        </S.ContainerLoading>
    );
}
