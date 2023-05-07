import React from "react";

import MainLayout from "../layout/MainLayout/MainLayout";
import ProductCard from "./ProductCard";
import Table from "../common/Table/Table";
import Image from "next/image";
import Link from "next/link";
import { IconButton, Tooltip } from "@mui/material";
import {
  BorderColorOutlined,
  DeleteOutline,
  VisibilityOutlined,
} from "@mui/icons-material";

interface Product {
  id: string;
  title: string;
  category: string;
  description: string;
  price: string;
  image: string;
  rating: {
    rate: number;
  };
}

const products = [
  {
    id: 1,
    name: "Basic Tee 8-Pack",
    href: "#",
    price: "$256",
    description:
      "Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.",
    options: "8 colors",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg",
    imageAlt:
      "Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    price: "$32",
    description:
      "Look like a visionary CEO and wear the same black t-shirt every day.",
    options: "Black",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg",
    imageAlt: "Front of plain black t-shirt.",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    price: "$32",
    description:
      "Look like a visionary CEO and wear the same black t-shirt every day.",
    options: "Black",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-03.jpg",
    imageAlt: "Front of plain black t-shirt.",
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    price: "$32",
    description:
      "Look like a visionary CEO and wear the same black t-shirt every day.",
    options: "Black",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-04.jpg",
    imageAlt: "Front of plain black t-shirt.",
  },
  {
    id: 5,
    name: "Basic Tee",
    href: "#",
    price: "$32",
    description:
      "Look like a visionary CEO and wear the same black t-shirt every day.",
    options: "Black",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-05.jpg",
    imageAlt: "Front of plain black t-shirt.",
  },
  {
    id: 6,
    name: "Basic Tee",
    href: "#",
    price: "$32",
    description:
      "Look like a visionary CEO and wear the same black t-shirt every day.",
    options: "Black",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
    imageAlt: "Front of plain black t-shirt.",
  },
  {
    id: 7,
    name: "Basic Tee",
    href: "#",
    price: "$32",
    description:
      "Look like a visionary CEO and wear the same black t-shirt every day.",
    options: "Black",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-04.jpg",
    imageAlt: "Front of plain black t-shirt.",
  },
  {
    id: 8,
    name: "Basic Tee",
    href: "#",
    price: "$32",
    description:
      "Look like a visionary CEO and wear the same black t-shirt every day.",
    options: "Black",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-03.jpg",
    imageAlt: "Front of plain black t-shirt.",
  },
  {
    id: 9,
    name: "Basic Tee",
    href: "#",
    price: "$32",
    description:
      "Look like a visionary CEO and wear the same black t-shirt every day.",
    options: "Black",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg",
    imageAlt: "Front of plain black t-shirt.",
  },
  {
    id: 10,
    name: "Basic Tee",
    href: "#",
    price: "$32",
    description:
      "Look like a visionary CEO and wear the same black t-shirt every day.",
    options: "Black",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg",
    imageAlt: "Front of plain black t-shirt.",
  },
  {
    id: 11,
    name: "Basic Tee",
    href: "#",
    price: "$32",
    description:
      "Look like a visionary CEO and wear the same black t-shirt every day.",
    options: "Black",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
    imageAlt: "Front of plain black t-shirt.",
  },
  // More products...
];

const columns = [
  {
    Header: "ID",
    accessor: "id",
    Cell: ({ cell: { value } }) => (
      <span style={{ fontWeight: "600" }}>{value}</span>
    ),
  },
  {
    Header: "Title",
    accessor: "title",
  },
  {
    Header: "Category",
    accessor: "category",
    Cell: ({ cell: { value } }) => (
      <span style={{ textTransform: "capitalize" }}>{value}</span>
    ),
  },
  {
    Header: "Description",
    accessor: "description",
  },
  {
    Header: "Price",
    accessor: "price",
    Cell: ({ cell: { value } }) => (
      <span style={{ whiteSpace: "pre" }}>$ {value}</span>
    ),
  },
  {
    Header: "Image",
    accessor: "image",
    Cell: ({ row: { original } }) => (
      <Image
        src={original?.image}
        alt={original?.title}
        width={150}
        height={150}
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
    ),
  },
  {
    Header: "Rating",
    accessor: "rating.rate",
    Cell: ({ cell: { value } }) => {
      return <span>{value}</span>;
    },
  },
];

const customColumn = (hooks: any) => {
  hooks.visibleColumns.push((column: any) => [
    ...column,
    {
      Header: "Actions",
      accessor: "actions",
      disableSortBy: true,
      Cell: ({ row: { original } }) => {
        return (
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              cursor: "pointer",
              position: "relative",
            }}
          >
            <Link
              href={{ pathname: "/products/[id]", query: { id: original.id } }}
              passHref
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton size="small">
                <Tooltip title="View" placement="top" arrow>
                  <VisibilityOutlined color="primary" fontSize="small" />
                </Tooltip>
              </IconButton>
            </Link>
            <IconButton size="small">
              <Tooltip title="Edit" placement="top" arrow>
                <BorderColorOutlined fontSize="small" />
              </Tooltip>
            </IconButton>
            <IconButton size="small">
              <Tooltip title="Delete" placement="top" arrow>
                <DeleteOutline color="error" fontSize="small" />
              </Tooltip>
            </IconButton>
          </span>
        );
      },
    },
  ]);
};

const Products = ({ products }) => {
  return (
    <MainLayout>
      {/* <div className="mt-7">
        <label className="font-semibold">Category: </label>
        <select className="border custom__border__radius__md py-2 px-3">
          <option>T-shirts</option>
          <option>Jeans</option>
          <option>Leather Jackets</option>
        </select>
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-8 mt-6">
          {products?.map((product) => (
            <ProductCard key={product?.id} product={product} />
          ))}
        </div>
      </div> */}
      <div className="mt-6">
        <Table columns={columns} data={products} customColumn={customColumn} />
      </div>
    </MainLayout>
  );
};

export default Products;
