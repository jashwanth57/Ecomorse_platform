import React, { useState } from 'react';
import { useAppContext } from '../(context)/AppContext';
import { Minus, Plus, ShoppingBasket } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ProductDetails({ product }) {
  if (!product) {
    return <p>Loading product details...</p>;
  }

  const { currency } = useAppContext();
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(product.offerPrice ? product.offerPrice : product.price);

  return (
    <div
      className="flex justify-center"
      style={{
        transform: 'scale(0.9)',       // 👈 scales down to 90%
        transformOrigin: 'top center', // keeps layout centered
      }}
    >
      <div className="space-y-3 p-4 rounded-2xl shadow-md bg-white w-full max-w-md">
        {/* Product Image */}
        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 group">
          <img
            src={product?.images?.[0] || '/placeholder.png'}
            alt={product?.name || 'itemImage'}
            className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-125"
          />
        </div>

        {/* INFO */}
        <div>
          <h4 className="text-lg font-bold">{product.name}</h4>
          <p className="text-sm text-gray-500">
            {product.categories?.[0] || 'Uncategorized'}
          </p>

          <div className="mt-2 space-y-2">
            {/* Color */}
            <div className="flex items-center gap-x-2">
              <h5>Color:</h5>
              <p className="font-bold">{product.color}</p>
            </div>

            {/* Price */}
            <div className="flex items-center gap-x-2">
              <h5>Price:</h5>
              <p className="font-bold">
                {currency}
                {product.price}
              </p>
            </div>

            {/* Offer Price */}
            {product.offerPrice && (
              <div className="flex items-center gap-x-2">
                <h5>Offer Price:</h5>
                <p className="font-bold text-green-600">
                  {currency}
                  {product.offerPrice}
                </p>
              </div>
            )}

            {/* Description */}
            <p className="text-gray-600">{product.description}</p>

            {/* Quantity + Subtotal */}
            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-x-3">
                <button
                  onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : prev))}
                  className="border rounded-full w-6 h-6 flex items-center justify-center"
                >
                  <Minus size={14} />
                </button>
                <p className="w-8 text-center font-semibold">{quantity}</p>
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="border rounded-full w-6 h-6 flex items-center justify-center"
                >
                  <Plus size={14} />
                </button>
              </div>

              <div className="flex items-center gap-x-2">
                <h5>SubTotal:</h5>
                <p className="font-bold">
                  {currency}
                  {product.offerPrice * quantity}
                </p>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button
              className="
                mt-3 w-full flex items-center justify-center gap-x-2
                bg-black text-white font-semibold
                rounded-xl py-2
                transition-transform duration-200 ease-in-out
                hover:scale-105 active:scale-95
                hover:bg-gray-900
              "
            >
              <ShoppingBasket className="w-5 h-5" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
