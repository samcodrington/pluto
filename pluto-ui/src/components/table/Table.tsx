import React from "react";

import "./Table.scss";
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
const highlightedClassName = "highlighted";
const defaultMouseOverFn = (e: React.MouseEvent): void => {
  const row = e.target as HTMLTableRowElement;
  row.classList.add(highlightedClassName);
};
const defaultMouseOutFn = (e: React.MouseEvent): void => {
  const row = e.target as HTMLTableRowElement;
  row.classList.remove(highlightedClassName);
};

const Table = ({
  rows,
  onMouseClickFn,
  onRowMouseOverFn,
  onRowMouseOutFn,
}: TableProps) => (
  <React.Fragment>
    {rows.length === 0 ? (
      <table>
        <tbody>
          <tr
            key={0}
            onMouseOver={onRowMouseOverFn}
            onMouseOut={onRowMouseOutFn ?? defaultMouseOutFn}
          >
            <td key={0} className="empty-table">
              {" "}
              No data provided{" "}
            </td>
          </tr>
        </tbody>
      </table>
    ) : (
      <table>
        <thead>
          <tr key={0}>
            {rows[0].map(({ data }, j) => (
              <th key={j}>{data}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.slice(1).map((row, i) => {
            return (
              <tr
                key={i + 1}
                onMouseOver={onRowMouseOverFn ?? defaultMouseOverFn}
                onMouseOut={onRowMouseOutFn ?? defaultMouseOutFn}
              >
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
    )}
  </React.Fragment>
);

export default Table;
