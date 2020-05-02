import React from "react";

interface TableProps {
  rows: Array<Data[]>;
  onRowMouseOverFn?: mouseEventFn;
  onRowMouseOutFn?: mouseEventFn;
  onMouseClickFn?: mouseEventFn;
}
interface mouseEventFn {
  (event: React.MouseEvent): void;
}

type Data = {
  data: string;
};

const Table = ({
  rows,
  onMouseClickFn,
  onRowMouseOverFn,
}: // onRowMouseOutFn,
TableProps) => (
  <React.Fragment>
    <table>
      <tbody>
        {rows?.map((row, i) => {
          return (
            <tr key={i} onMouseOver={onRowMouseOverFn}>
              {row.map(({ data }, j) => (
                <td key={j} onClick={onMouseClickFn}>
                  {data}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  </React.Fragment>
);

export default Table;
