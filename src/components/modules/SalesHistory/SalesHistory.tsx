"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, Loader2 } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";

import { updateSales } from "@/services/sales";
import { ITransaction, TransactionStatus } from "@/types/transaction";

type Props = {
  sales: ITransaction[];
  transactionId: string;
};

const SalesHistory = ({ sales, transactionId }: Props) => {
  const [isUpdating, setIsUpdating] = useState<Record<string, boolean>>({});
  const [localSales, setLocalSales] = useState<ITransaction[]>(sales); // Local state for sales

  const handleStatusChange = async (
    orderId: string,
    newStatus: TransactionStatus
  ) => {
    try {
      setIsUpdating((prev) => ({ ...prev, [orderId]: true }));
      const salesData = { status: newStatus };
      await updateSales(orderId, salesData); // Call updateSales API
      toast.success("Status updated successfully!");

      // Update the local sales state
      setLocalSales((prevSales) =>
        prevSales.map((sale) =>
          sale._id === orderId ? { ...sale, status: newStatus } : sale
        )
      );
    } catch (error: any) {
      toast.error(error.message || "Failed to update status");
    } finally {
      setIsUpdating((prev) => ({ ...prev, [orderId]: false }));
    }
  };

  const getStatusColor = (status: TransactionStatus) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "completed":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="border rounded-lg overflow-hidden">
      <Table className="min-w-full">
        <TableHeader className="bg-purple-500">
          <TableRow>
            <TableHead className="px-4 py-3 text-white">SL Number</TableHead>
            <TableHead className="px-4 py-3 text-white">Order ID</TableHead>
            <TableHead className="px-4 py-3 text-white">Customer</TableHead>
            <TableHead className="px-4 py-3 text-white">Items</TableHead>
            <TableHead className="px-4 py-3 text-white">Date</TableHead>
            <TableHead className="px-4 py-3 text-white">Status</TableHead>
            <TableHead className="px-4 py-3 text-right text-white">
              Amount
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {localSales.map((sale, index) => (
            <TableRow key={sale._id}>
              <TableCell className="px-4 py-3 font-medium">
                {index + 1}
              </TableCell>
              <TableCell className="px-4 py-3 font-medium">
                {transactionId}
              </TableCell>
              <TableCell className="px-4 py-3">
                <div className="flex flex-col">
                  <span className="font-medium">{sale?.buyerID?.name}</span>
                  <span className="text-sm text-gray-500">
                    {sale?.buyerID?.email}
                  </span>
                </div>
              </TableCell>
              <TableCell className="px-4 py-3">
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-2">
                    <Image
                      src={sale.itemID?.images}
                      alt={sale.itemID?.title}
                      className="rounded-md object-cover "
                      width={40}
                      height={40}
                    />
                    <span>{sale.itemID?.title}</span>
                  </div>
                </div>
              </TableCell>
              <TableCell className="px-4 py-3">
                {formatDate(sale?.createdAt)}
              </TableCell>
              <TableCell className="px-4 py-3">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className={`${getStatusColor(sale?.status)} capitalize`}
                      disabled={isUpdating[sale?._id]}
                    >
                      {isUpdating[sale?._id] ? (
                        <span className="flex items-center">
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Updating...
                        </span>
                      ) : (
                        <>
                          {sale.status}
                          <ChevronDown className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem
                      onClick={() => handleStatusChange(sale._id, "pending")}
                    >
                      Pending
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleStatusChange(sale._id, "completed")}
                    >
                      Completed
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleStatusChange(sale._id, "cancelled")}
                    >
                      Cancelled
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
              <TableCell className="px-4 py-3 text-right">
                BDT {sale?.itemID.price}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default SalesHistory;
