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
  const columns: ColumnDef<IListing>[] = [
    {
      accessorKey: "slNumber",
      header: () => <div className="">Serial Number</div>,
      cell: ({ row }) => <span className="truncate">{row.index + 1}</span>,
    },
    {
      accessorKey: "img",
      header: () => <div>Image</div>,
      cell: ({ row }) => (
        <div>
          <Image
            src={row?.original?.images}
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
      accessorKey: "availability",
      header: () => <div>Availability</div>,
      cell: ({ row }) => (
        <span className="truncate">{row?.original?.availability}</span>
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
              Sold
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
            title="edit listing"
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
    <>
      {/* start table */}
      {listings.length > 0 ? (
        <TthTable data={listings} columns={columns} />
      ) : (
        "No Listings Available"
      )}
    </>
  );
};

export default Listing;
