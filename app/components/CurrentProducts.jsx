import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const CurrentProducts = () => {
  return (
    <div className="container py-10">
      <h1 className="font-semibold text-2xl">Display Current Stock</h1>
      {/* <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Product Name</th>
            <th className="px-4 py-2">Quantity</th>
            <th className="px-4 py-2">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Product 1</td>
            <td className="border px-4 py-2">10</td>
            <td className="border px-4 py-2">100</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Product 2</td>
            <td className="border px-4 py-2">20</td>
            <td className="border px-4 py-2">200</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Product 3</td>
            <td className="border px-4 py-2">30</td>
            <td className="border px-4 py-2">300</td>
          </tr>
        </tbody>
      </table> */}
      <Table>
        <TableCaption>A list of products.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Product Name</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Product A</TableCell>
            <TableCell>10</TableCell>
            <TableCell>$250.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Product B</TableCell>
            <TableCell>12</TableCell>
            <TableCell>$50.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default CurrentProducts;
