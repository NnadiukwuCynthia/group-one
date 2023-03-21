import React from "react";

const Table = ({ List, listHead }) => {
  return (
    <div>
      {List.length > 0 && (
        <table cellSpacing="1" className="table">
          <thead>
            <tr>
              {listHead.map((item, index) => (
                <th key={index}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.values(List).map((item, index) => (
              <tr key={index}>
                {Object.values(item).map((value, index2) => (
                  <td key={index2}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
