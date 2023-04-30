import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Box, IconButton, Tooltip } from "@mui/material";
import {
  DeleteOutline,
  BorderColorOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";

import MainLayout from "../layout/MainLayout/MainLayout";
import Table from "../common/Table/Table";
import { fetchProducts } from "@/pages/api/orders/orders";

const styles = {
  table: {
    width: "100%",
  },

  thead: {},

  tbody: {},

  tr: {
    textAlign: "center",
  },

  th: {
    fontSize: 14,
    fontWeight: 600,
    borderBottom: "solid 2px rgba(0, 0, 0, 0.1)",
    padding: "10px 7px",
  },

  td: {
    fontSize: 12,
    borderBottom: "solid 2px rgba(0, 0, 0, 0.1)",
    padding: "3px 7px",
  },
};

const Orders = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [orders, setOrders] = useState<[]>([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const data = await fetchProducts();
        if (data.length) {
          setLoading(false);
          setOrders(data);
        } else {
          setLoading(false);
          setOrders([]);
        }
      } catch (ex) {
        setLoading(false);
        console.log(ex);
      }
    }
    getProducts();
  }, []);

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
        Cell: (_) => {
          return (
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                cursor: "pointer",
                position: "relative",
              }}
            >
              <IconButton size="small">
                <Tooltip title="view" placement="top" arrow>
                  <VisibilityOutlined color="primary" fontSize="small" />
                </Tooltip>
              </IconButton>
              <IconButton size="small">
                <Tooltip title="edit" placement="top" arrow>
                  <BorderColorOutlined fontSize="small" />
                </Tooltip>
              </IconButton>
              <IconButton size="small">
                <Tooltip title="delete" placement="top" arrow>
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
          loading={loading}
          customColumn={customColumn}
          customStyles={styles}
        />
      </Box>
    </MainLayout>
  );
};

export default Orders;
