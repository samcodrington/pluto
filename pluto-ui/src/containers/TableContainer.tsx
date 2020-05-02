import React from "react";
import Table from "../components/Table";

interface TableContProps {}

class TableContainer extends React.Component<TableContProps> {
  constructor(props: TableContProps) {
    super(props);
  }
  render() {
    return (
      <Table rows={[[{ data: "defaultdata" }, { data: "1" }, { data: "2" }]]} />
    );
  }
}
export default TableContainer;
