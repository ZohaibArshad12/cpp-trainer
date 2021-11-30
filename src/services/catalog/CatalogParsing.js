const { isObject } = require("formik");

const parseRow = (key, value, title) => {
  if (isObject(value)) {
    const row = [key];
    const header = [];
    if (title) {
      header.push(title);
    }
    Object.keys(value).map((column, index) => {
      row.push(value[column]);
      header.push(column);
      return column;
    });
    return { header, row };
  }
  return { row: [key, value] };
};
const extractHeaderFromParsedRows = (parsedRows) => {
  const header = new Set();
  parsedRows.forEach((row, index) => {
    if (row.header) {
      row.header.forEach((head, index) => {
        if (!isObject(row.row[index])) {
          header.add(head);
        }
      });
    }
  });
  return [...header];
};
const extractRowsFromParsedRows = (parsedRows, header) => {
  if (!parsedRows) {
    return [];
  }
  let destHeader = header;
  if (!destHeader) {
    destHeader = extractHeaderFromParsedRows(parsedRows);
  }
  const rows = [];
  parsedRows.forEach((sourceRow, rowIndex) => {
    const destRow = Array(destHeader.length);
    destHeader.forEach((head, destIndex) => {
      if (sourceRow.header.includes(head)) {
        const srcIndex = sourceRow.header.indexOf(head);
        destRow[destIndex] = sourceRow.row[srcIndex];
      }
    });
    rows.push(destRow);
  });
  return rows;
};
export const extractRowTableFromJSONField = (json, field) => {
  if (!json || !json[field]) {
    return [];
  }
  const rawData = json[field];
  const mapFn = (key, index) => parseRow(key, rawData[key], "Name");
  const parsedData = Object.keys(rawData).map(mapFn);
  const header = extractHeaderFromParsedRows(parsedData);
  const rows = extractRowsFromParsedRows(parsedData, header);
  return { header, column: header, data: rows };
};

export const extractTableFromJSONField = (json, field) => {
  if (!json || !json[field]) {
    return [];
  }
  const rawData = json[field];
  const mapFn = (key, index) => parseRow(key, rawData[key], "Name");
  const parsedData = Object.keys(rawData).map(mapFn);
  const header = extractHeaderFromParsedRows(parsedData);
  const rows = extractRowsFromParsedRows(parsedData, header);
  const modifiedRows = rows.map((row, index) => {
    const mRow = {};
    header.forEach((head, index) => {
      mRow[head] = row[index];
    });
    return mRow;
  });
  return { rows: modifiedRows, header, column: header, data: modifiedRows };
};
export const getMitreFormat = ({ column, data }) => {
  const Table = [];
  column.forEach((h, index) => {
    const row = [];
    data.forEach((item) => {
      if (item[index] && item[index] !== "") {
        row.push(item[index]);
      }
    });
    Table.push({ title: h, data: row });
  });
  return { data: Table };
};
