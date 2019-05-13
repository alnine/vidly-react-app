import React from "react";
import TableHeader from "./table-header";
import TableBody from "./table-body";

const Table = ({ columns, sortColumn, onSort, data, user }) => {
  return (
    <table className="table">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody data={data} columns={columns} user={user} />
    </table>
  );
};

export default Table;
