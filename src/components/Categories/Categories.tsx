import React from "react";
import Image from "next/image";

import MainLayout from "../layout/MainLayout/MainLayout";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    cols: 2,
  },
];

const Categories = ({ categories }: any) => {
  console.log("categories", categories);
  return (
    <MainLayout>
      <div className="mt-6 flow-root">
        <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
          <div className="min-w-screen-xl absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
            {categories.map((category: any, index: number) => (
              <a
                key={index}
                href={category?.href}
                className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto cursor-pointer"
              >
                <span aria-hidden="true" className="absolute inset-0">
                  <Image
                    src="https://tailwindui.com/img/ecommerce-images/home-page-01-category-01.jpg"
                    alt={category}
                    fill
                    sizes={"56*80"}
                    className="object-cover object-center"
                  />
                </span>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                />
                <span className="relative mt-auto text-center text-xl font-bold text-white">
                  {category}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Categories;
