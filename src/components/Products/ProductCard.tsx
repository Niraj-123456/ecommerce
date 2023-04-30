import React from "react";
import Image from "next/image";

import type { Product } from "../../../types/product";

const ProductCard = ({ product }: Product) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
      <div className="relative aspect-h-2 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-56 sm:w-60">
        <Image
          src={product?.imageSrc}
          alt={product?.imageAlt}
          fill
          className="h-full w-full object-cover object-center sm:h-full sm:w-full"
        />
      </div>
      <div className="flex flex-1 flex-col space-y-2 p-4 sm:w-60">
        <h3 className="text-sm font-medium text-gray-900">
          <a href={product.href}>
            <span aria-hidden="true" className="absolute inset-0" />
            {product.name}
          </a>
        </h3>
        <p className="text-sm text-gray-500">{product.description}</p>
        <div className="flex flex-1 flex-col justify-end">
          <p className="text-sm italic text-gray-500">{product.options}</p>
          <p className="text-base font-medium text-gray-900">{product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
