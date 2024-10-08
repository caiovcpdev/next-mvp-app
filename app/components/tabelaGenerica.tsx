"use client"

import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Card, CardHeader, CardBody} from "@nextui-org/react";


interface Column {
    key: string;
    label: string;
  }
  
  interface Row {
    key: string;
    [key: string]: string; // Isso indica que as linhas podem ter chaves dinâmicas além de "key"
  }

interface TabelaGenericaProps {
    title: string;
    rows: Row [];  
    columns: Column [];
  }

export default function TabelaGenerica  ({ title, rows, columns }: TabelaGenericaProps)  {
    return (
        <Card>
        <CardHeader>
          <h2>{title}</h2>
        </CardHeader>
        <CardBody>
          <Table aria-label="Dynamic table">
            <TableHeader columns={columns}>
              {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
            </TableHeader>
            <TableBody items={rows}>
              {(item) => (
                <TableRow key={item.key}>
                  {columns.map((column) => (
                    <TableCell key={column.key}>{item[column.key]}</TableCell>
                  ))}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardBody>
      </Card>
      );
}
