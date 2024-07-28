"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";

const AddProducts = () => {
  const [products, setProducts] = useState({
    slug: "",
    quantity: "",
    price: "",
  });
  const [alert, setAlert] = useState("");

  const addProduct = async (e) => {
    e.preventDefault();

    if (!products.slug || !products.quantity || !products.price) {
      console.log("Please fill out all fields");
      return;
    }

    try {
      const response = await fetch("/api/products", {
        method: "POST",
        body: JSON.stringify(products),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        setAlert("Product added successfully");
        setProducts({ slug: "", quantity: "", price: "" });
        console.log("Product added successfully");
      } else {
        console.log("Product not added");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    setProducts({ ...products, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <div className="text-green-800 text-center font-semibold">{alert}</div>
      <h1 className="font-semibold text-2xl">Add a Product</h1>
      <form className="space-y-3" onSubmit={addProduct}>
        <div>
          <Label htmlFor="slug">Product Slug</Label>
          <Input
            onChange={handleChange}
            value={products.slug}
            type="text"
            id="slug"
            name="slug"
            placeholder="Product Slug"
          />
        </div>
        <div>
          <Label htmlFor="quantity">Quantity</Label>
          <Input
            onChange={handleChange}
            value={products.quantity}
            type="number"
            id="quantity"
            name="quantity"
            placeholder="Quantity"
          />
        </div>
        <div>
          <Label htmlFor="price">Price</Label>
          <Input
            onChange={handleChange}
            value={products.price}
            type="number"
            id="price"
            name="price"
            placeholder="Price"
          />
        </div>
        <Button type="submit">Add Product</Button>
      </form>
    </div>
  );
};

export default AddProducts;
