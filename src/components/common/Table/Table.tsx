import React, { useMemo } from "react";
import styles from "./table.module.css";
import { useTable, usePagination, TableInstance } from "react-table";
import { CircularProgress } from "@mui/material";

import Pagination from "../Pagination/Pagination";

type Data = {
  id: string;
  title: string;
  category: string;
  description: string;
  price: string;
  image: string;
  rating: {
    rate: number;
  };
};

interface TableProps {
  data: Data[];
  columns: [];
  loading?: boolean;
  customStyles?: any;
  customColumn?: any;
}

interface TableInstanceWithPage<T extends object> extends TableInstance<T> {
  page: any;
  canPreviousPage: any;
  canNextPage: any;
  pageOptions: any;
  pageCount: any;
  gotoPage: any;
  nextPage: any;
  previousPage: any;
  state: any;
}

const Table: React.FC<TableProps> = ({
  columns,
  data,
  loading,
  customStyles,
  customColumn,
}) => {
  const tableColumn = useMemo(() => columns, [columns]);
  const tableData = useMemo(() => data, [data]);
  const tableInstance = useTable<Data>(
    {
      columns: tableColumn,
      data: tableData,
      initialState: { pageSize: 10 },
    },
    customColumn,
    usePagination
  ) as TableInstanceWithPage<Data>;

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = tableInstance;

  return (
    // apply the table props
    <div style={{ width: "100%", overflowX: "auto" }}>
      {!loading ? (
        <table
          {...getTableProps()}
          style={customStyles?.table}
          className={styles.table}
        >
          <thead style={customStyles?.thead}>
            {
              // Loop over the header rows
              headerGroups.map((headerGroup, index) => (
                // Apply the header row props
                <tr
                  {...headerGroup.getHeaderGroupProps()}
                  key={index}
                  style={customStyles?.tr}
                >
                  {
                    // Loop over the headers in each row
                    headerGroup.headers.map((column, index) => (
                      // Apply the header cell props
                      <th
                        {...column.getHeaderProps()}
                        key={index}
                        style={customStyles?.th}
                      >
                        {
                          // Render the header
                          column.render("Header")
                        }
                      </th>
                    ))
                  }
                </tr>
              ))
            }
          </thead>
          {/* Apply the table body props */}

          <tbody {...getTableBodyProps()} style={customStyles?.tbody}>
            {
              // Loop over the table rows
              page.map((row: any, index: number) => {
                // Prepare the row for display
                prepareRow(row);
                return (
                  // Apply the row props
                  <tr
                    {...row.getRowProps()}
                    key={index}
                    style={customStyles?.tr}
                  >
                    {
                      // Loop over the rows cells
                      row.cells.map((cell: any, index: number) => {
                        // Apply the cell props
                        return (
                          <td
                            {...cell.getCellProps()}
                            key={index}
                            style={customStyles?.td}
                          >
                            {
                              // Render the cell contents
                              cell.render("Cell")
                            }
                          </td>
                        );
                      })
                    }
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      ) : (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress size={30} thickness={4} />
        </div>
      )}
      {tableData?.length > 0 && (
        <Pagination
          gotoPage={gotoPage}
          canPreviousPage={canPreviousPage}
          canNextPage={canNextPage}
          pageCount={pageCount}
          nextPage={nextPage}
          previousPage={previousPage}
          pageOptions={pageOptions}
          pageIndex={pageIndex}
        />
      )}
    </div>
  );
};

export default Table;
