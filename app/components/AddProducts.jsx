import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const AddProducts = () => {
  return (
    <div className="container pt-10">
      <h1 className="font-semibold text-2xl">Add a Product</h1>
      <form className="space-y-3">
        <div>
          <Label htmlFor="name">Product Name</Label>
          <Input type="text" id="name" placeholder="Product Name" />
        </div>
        <div>
          <Label htmlFor="quantity">Quantity</Label>
          <Input type="number" id="quantity" placeholder="Quantity" />
        </div>
        <div>
          <Label htmlFor="price">Price</Label>
          <Input type="number" id="price" placeholder="Price" />
        </div>
        <Button variant="">Button</Button>
      </form>
    </div>
  );
};

export default AddProducts;
