'use client';

import React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { Product } from "@/shared/types/Product";

type Props = {
  data: Product[];
};

export const ProductTable: React.FC<Props> = ({ data }) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const columns: ColumnDef<Product>[] = [
    {
      id: "no",
      header: "No",
      cell: ({ row }) => row.index + 1,
    },
    {
      accessorKey: "gambar",
      header: "Gambar",
      cell: ({ row }) => (
        <img
          src={row.original.gambar}
          alt={row.original.nama}
          className="w-14 h-14 object-cover rounded"
        />
      ),
    },
    {
      accessorKey: "nama",
      header: "Nama Produk",
    },
    {
      accessorKey: "harga",
      header: "Harga",
      cell: ({ row }) => (
        <span className="font-medium">
          {row.original.harga.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
        </span>
      ),
    },
    {
      id: "actions",
      header: "Aksi",
      cell: ({ row }) => (
        <div className="flex gap-3">
          <button className="text-green-600">
            {/* <Eye size={20} /> */}
          </button>
          <button className="text-orange-500">
            {/* <Pencil size={20} /> */}
          </button>
        </div>
      ),
    },
  ];

  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="w-full">
      <table className="w-full border-collapse">
        <thead className="bg-gray-100">
          {table.getHeaderGroups().map((hg) => (
            <tr key={hg.id}>
              {hg.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  className="px-4 py-3 font-semibold cursor-pointer select-none text-left"
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row, idx) => (
            <tr
              key={row.id}
              className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-4 py-4">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
