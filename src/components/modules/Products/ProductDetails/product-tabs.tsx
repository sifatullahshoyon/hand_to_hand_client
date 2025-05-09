"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

interface ProductTabsProps {
  product: any;
}

export default function ProductTabs({ product }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <Tabs
      defaultValue="description"
      value={activeTab}
      onValueChange={setActiveTab}
      className="w-full"
    >
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="description">Description</TabsTrigger>
        <TabsTrigger value="specifications">Specifications</TabsTrigger>
      </TabsList>
      <TabsContent value="description" className="pt-6">
        <div className="prose max-w-none">
          <h3 className="text-xl font-semibold mb-4">Product Description</h3>
          <div dangerouslySetInnerHTML={{ __html: product.description }} />
        </div>
      </TabsContent>
      <TabsContent value="specifications" className="pt-6">
        <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>

        {Object.entries(product.specifications).map(
          ([category, specs]: [string, any]) => (
            <div key={category} className="mb-8">
              <h4 className="text-lg font-medium mb-3 text-gray-900">
                {category}
              </h4>
              <Table>
                <TableBody>
                  {Object.entries(specs).map(([key, value]: [string, any]) => (
                    <TableRow key={key}>
                      <TableCell className="font-medium w-1/3">{key}</TableCell>
                      <TableCell>{value as string}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )
        )}
      </TabsContent>
    </Tabs>
  );
}
