import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Box, IconButton, Tooltip } from "@mui/material";
import {
  DeleteOutline,
  BorderColorOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";

import MainLayout from "../layout/MainLayout/MainLayout";
import Table from "../common/Table/Table";
import ProductDetailModel from "../Products/ProductDetail";
import { fetchProducts } from "@/pages/api/orders/orders";
import Link from "next/link";

const styles = {
  table: {
    width: "100%",
  },

  thead: {},

  tbody: {},

  tr: {
    textAlign: "center",
  },

  th: {},

  td: {},
};

const Orders = ({ orders }: any) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  // const [orders, setOrders] = useState<[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // useEffect(() => {
  //   async function getProducts() {
  //     try {
  //       const data = await fetchProducts();
  //       if (data.length) {
  //         setLoading(false);
  //         setOrders(data);
  //       } else {
  //         setLoading(false);
  //         setOrders([]);
  //       }
  //     } catch (ex) {
  //       setLoading(false);
  //       console.log(ex);
  //     }
  //   }
  //   getProducts();
  // }, []);

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
                href={{ pathname: "/orders/[id]", query: { id: original.id } }}
                passHref
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  size="small"
                  onClick={() =>
                    router.push(
                      { pathname: "/orders/[id]", query: { id: original.id } },
                      undefined,
                      {
                        shallow: false,
                      }
                    )
                  }
                >
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

  return (
    <MainLayout>
      <Box marginTop={5} width={"100%"}>
        <Table
          columns={columns}
          data={orders}
          // loading={loading}
          customColumn={customColumn}
          customStyles={styles}
        />
      </Box>
      <ProductDetailModel open={open} handleClose={handleClose} />
    </MainLayout>
  );
};

export default Orders;
