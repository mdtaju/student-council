import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React from "react";

const DataTableMui = ({ columns, rows, ...rest }) => {
  return (
    <div style={{ height: 700, width: "100%" }}>
      <DataGrid
        columns={columns}
        rows={rows}
        components={{
          Toolbar: GridToolbar,
        }}
        {...rest}
      />
    </div>
  );
};

export default DataTableMui;
