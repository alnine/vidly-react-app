import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderCell = (item, column, user) => {
    if (column.content && user) return column.content(item);

    return _.get(item, column.path);
  };

  createKey = (itemId, column) => {
    return itemId + (column.path || column.key);
  };

  render() {
    const { data, columns, idProperty, user } = this.props;

    return (
      <tbody>
        {data.map(item => (
          <tr key={item[idProperty]}>
            {columns.map(column => (
              <td key={this.createKey(item[idProperty], column)}>
                {this.renderCell(item, column, user)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

TableBody.defaultProps = {
  idProperty: "_id"
};

export default TableBody;
