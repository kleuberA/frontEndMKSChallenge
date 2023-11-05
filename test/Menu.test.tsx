import { render, screen } from '@testing-library/react';
import Menu from '../src/components/Header/Menu';

test('displays the correct number of items in the cart', () => {
    const cartItems = [
        {
            id: 1,
            name: 'Product 1',
            quantity: 2,
        },
        {
            id: 2,
            name: 'Product 2',
            quantity: 3,
        },
    ];

    localStorage.setItem('cart', JSON.stringify(cartItems));
    render(<Menu menu={() => { }} />);

    const itemsInCartElement = screen.getByText('2');
    expect(itemsInCartElement);
});
