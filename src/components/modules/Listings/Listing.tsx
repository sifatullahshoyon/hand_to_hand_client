"use client";
import { TthTable } from "@/components/ui/core/HTHTable";
import { IListing } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { Edit, Trash2 } from "lucide-react";
import Image from "next/image";

type TListingsProps = {
  listings: IListing[];
};

const Listing = ({ listings }: TListingsProps) => {
  console.log("from listing components", listings);
  // const columns: ColumnDef<IListing>[] = [
  //   {
  //     accessorKey: "status",
  //     header: "Status",
  //   },
  //   {
  //     accessorKey: "email",
  //     header: "Email",
  //   },
  //   {
  //     accessorKey: "amount",
  //     header: "Amount",
  //   },
  // ];
  const columns: ColumnDef<IListing>[] = [
    {
      accessorKey: "slNumber",
      header: () => <div className="">Serial Number</div>,
      cell: () => <span className="truncate">1</span>,
    },
    {
      accessorKey: "img",
      header: () => <div>Image</div>,
      cell: ({ row }) => (
        <div>
          <Image
            src={row?.original?.images[0]}
            alt={row?.original?.title}
            width={40}
            height={40}
            className="w-8 h-8 rounded-full"
          />
        </div>
      ),
    },
    {
      accessorKey: "title",
      header: () => <div>Title</div>,
      cell: ({ row }) => (
        <span className="truncate">{row?.original?.title}</span>
      ),
    },
    {
      accessorKey: "status",
      header: () => <div>Status</div>,
      cell: ({ row }) => (
        <div>
          {row?.original?.status ? (
            <p className="text-green-500 border bg-green-100 w-20 text-center px-2 rounded">
              Available
            </p>
          ) : (
            <p className="text-red-500 border bg-red-100 w-14 text-center px-1 rounded">
              Unavailable
            </p>
          )}
        </div>
      ),
    },
    {
      accessorKey: "price",
      header: () => <div>Price</div>,
      cell: ({ row }) => (
        <span className="truncate">${row?.original?.price}</span>
      ),
    },
    {
      accessorKey: "action",
      header: () => <div className="text-center">Action</div>,
      cell: () => (
        <div className="flex justify-center items-center gap-6">
          <button
            className="text-emerald-500"
            title="Delete"
            // onClick={() => handleDelete(row.original)}
          >
            <Edit className="w-5 h-5" />
          </button>
          <button
            className="text-red-500"
            title="Delete"
            // onClick={() => handleDelete(row.original)}
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      ),
    },
  ];
  return (
    <div>
      <h1>This is Listing Components</h1>
      {/* start table */}
      {listings.length > 0 ? (
        <TthTable data={listings} columns={columns} />
      ) : (
        "No Listings Available"
      )}
    </div>
  );
};

export default Listing;
