import React from 'react';
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react';

const getAlignmentClass = (align: string) => {
  switch (align) {
    case 'left':
      return 'text-left';
    case 'center':
      return 'text-center';
    case 'right':
      return 'text-right';
    default:
      return '';
  }
};

export const TableDataComponent = ({ headers = [], data = [] }) => {
  const hasData = data.length > 0;

  return (
    <div className="mx-auto">
      <Card>
        <Table>
          <TableHead>
            <TableRow>
              {headers.map((header, index) => (
                <TableHeaderCell 
                  key={index} 
                  className={getAlignmentClass(header.align)}
                >
                  {header.label}
                </TableHeaderCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {hasData ? (
              data.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {headers.map((header, cellIndex) => (
                    <TableCell 
                      key={cellIndex}
                      className={getAlignmentClass(header.align)}
                    >
                      {row[header.key]}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={headers.length} className="text-center">
                  No hay datos disponibles
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};