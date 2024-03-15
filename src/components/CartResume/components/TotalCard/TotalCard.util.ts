import { ProductI } from '../../models';

export const getPriceValues = (products: ProductI[]) => {
  const subtotalPrice = products.reduce(
    (acc, product) => acc + product.price,
    0
  );
  const shippingPrice = 10;
  const discountPrice = 4;
  const totalPrice = subtotalPrice + shippingPrice - discountPrice;

  return [
    {
      title: 'Cart Subtotal',
      price: subtotalPrice,
    },
    {
      title: 'Shipping',
      price: shippingPrice,
    },
    {
      title: 'Discount',
      price: discountPrice,
    },
    {
      title: 'Total',
      price: totalPrice,
    },
  ];
};
