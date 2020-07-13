import React from "react";
import Table from "./Table";

interface TableContProps {}

class TableContainer extends React.Component<TableContProps> {
  constructor(props: TableContProps) {
    super(props);
  }
  render() {
    const rows = [];
    rows.push([{ data: "label1" }, { data: "label2" }, { data: "label3" }]);
    rows.push([{ data: "defaultdata" }, { data: "1" }, { data: "2" }]);
    rows.push([{ data: "defaultdata2" }, { data: "31" }, { data: "21" }]);
    rows.push([{ data: "nicola" }, { data: "charles" }, { data: "2" }]);
    return <Table rows={rows} />;
  }
}
export default TableContainer;
