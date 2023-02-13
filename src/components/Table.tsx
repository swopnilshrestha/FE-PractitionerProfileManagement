import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useTable, useFlexLayout, TableHeaderProps, Row } from "react-table";

interface TableProps {
  columns: any[];
  data: any[];
  hasServerSidePagination?: boolean;
  totalEntries?: number;
  hasServerSideSorting?: boolean;
  pageSize?: number;
  className?: string;
  rowRedirectTo?: (item: any) => string | undefined;
}

const Table = ({ columns, data, className, rowRedirectTo }: TableProps) => {
  const getStyles = (props: Partial<TableHeaderProps>, align = "left") => [
    props,
  ];
  const cellProps = (props: Partial<TableHeaderProps>, { cell }: any) =>
    getStyles(props, cell.column.align);

  const memoizedData = useMemo(() => data, [data]);
  const memoizedColumns = useMemo(() => columns, [columns]);
  const defaultColumn = useMemo(
    () => ({
      minWidth: 30,
      maxWidth: 450,
    }),
    []
  );

  const { rows, headerGroups, prepareRow, getTableProps, getTableBodyProps } =
    useTable(
      {
        columns: memoizedColumns,
        data: memoizedData,
        defaultColumn,
      },
      useFlexLayout
    );

  const renderRow = (row: Row<any>, index: number) => {
    return (
      <tr {...row.getRowProps()} key={index}>
        {row.cells.map((cell, cellIndex) => {
          return (
            <td {...cell.getCellProps(cellProps)} key={cellIndex}>
              {cell.render("Cell")}
            </td>
          );
        })}
      </tr>
    );
  };

  return (
    <>
      <div className="bg-white-base">
        <table
          className={`table table-layout-fixed ${className}`}
          {...getTableProps()}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((header) => (
                  <th align="left" {...header.getHeaderProps()}>
                    {header.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, index) => {
              prepareRow(row);
              const rowRedirectURL =
                rowRedirectTo && rowRedirectTo(row.original);

              if (rowRedirectURL) {
                return (
                  <Link to={rowRedirectURL} className="a-style-reset">
                    {renderRow(row, index)}
                  </Link>
                );
              }
              return renderRow(row, index);
            })}
          </tbody>
        </table>
      </div>
      {/* <div className="pagination bg-white-base shadow-xs mb-10x">
        <Pagination
          pageSize={pageSize}
          totalCount={totalEntries}
          currentPage={pageNumberFromUrl ? parseInt(pageNumberFromUrl) : 1}
          handlePageChange={handlePaginationChange}
        />
      </div> */}
    </>
  );
};

export default Table;
