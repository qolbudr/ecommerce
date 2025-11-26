'use client'

import React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { User } from "@/shared/types/User";

type Props = {
  data: User[];
};

export const UserTable: React.FC<Props> = ({ data }) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const columns: ColumnDef<User>[] = [
    {
      accessorKey: "no",
      header: "No",
    },
    {
      accessorKey: "nama",
      header: "Nama Lengkap",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "telepon",
      header: "No. Telepon",
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.original.status;
        return (
          <span
            className={`px-4 py-1 rounded-full text-white text-sm ${
              status === "AKTIF" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {status}
          </span>
        );
      },
    },
    {
      id: "actions",
      header: "Aksi",
      cell: () => (
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
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="w-full">
      <table className="w-full border-collapse">
        <thead className="bg-gray-100 text-left">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  className="px-4 py-3 font-medium cursor-pointer select-none"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
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
