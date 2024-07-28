// "use client";
// import React, { useEffect, useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";

// const CurrentProducts = () => {
//   const [products, setProducts] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch("/api/products", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       let rjson = await response.json();
//       setProducts(rjson.products);
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="container">
//       <h1 className="font-semibold text-2xl">Display Current Stock</h1>
//       <Table>
//         <TableCaption>A list of products.</TableCaption>
//         <TableHeader>
//           <TableRow>
//             <TableHead>Product Name</TableHead>
//             <TableHead>Quantity</TableHead>
//             <TableHead>Price</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {products.map((product, index) => (
//             // console.log("product", product.slug);
//             <TableRow key={index}>
//               <TableCell>{product.slug}</TableCell>
//               <TableCell>{product.quantity}</TableCell>
//               <TableCell>₹{product.price}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default CurrentProducts;

"use client";
import React, { useEffect, useState } from "react";
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
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/products", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const text = await response.text();
        const rjson = text ? JSON.parse(text) : { products: [] };

        setProducts(rjson.products);
      } catch (error) {
        setError("Failed to fetch products.");
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1 className="font-semibold text-2xl">Display Current Stock</h1>
      {error && <p className="text-red-500">{error}</p>}
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
          {products.map((product, index) => (
            <TableRow key={index}>
              <TableCell>{product.slug}</TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell>₹{product.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CurrentProducts;
