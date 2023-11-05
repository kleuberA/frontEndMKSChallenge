import { act, render, screen, waitFor } from '@testing-library/react';
import CardProducts from '../src/components/Products/CardProduct';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { QueryClient, QueryClientProvider } from 'react-query';

const mock = new MockAdapter(axios);

beforeEach(() => {
    mock.reset();
});

test('Verificando requisição com a API da mks', async () => {
    const queryClient = new QueryClient();

    mock.onGet('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products').reply(200, {
        products: [
            {
                id: 1,
                brand: 'Apple',
                name: 'Iphone 13',
                price: '520.99',
                photo: 'appleiphone.jpg',
                description: 'Celular Iphone 13.',
            },
        ],
    });
    await act(async () => {
        render(
            <QueryClientProvider client={queryClient}>
                <CardProducts menu={true} />
            </QueryClientProvider>
        );
    });
});

test("Verificando se o componente está sendo renderizado corretamente", async () => {
    const queryClient = new QueryClient();
    render(
        <QueryClientProvider client={queryClient}>
            <CardProducts menu={true} />
        </QueryClientProvider>
    );

});

