"use client";

import { Edit, Trash2 } from "lucide-react";

export default function DataTable({
  columns = [],
  data = [],
  onEdit,
  onDelete,
  loading = false,
  emptyMessage = "No data found",
}) {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* ================= DESKTOP TABLE ================= */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full text-left">
          {/* Table Header */}
          <thead className="border-b border-slate-200 bg-slate-50">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500"
                >
                  {column.label}
                </th>
              ))}

              {(onEdit || onDelete) && (
                <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Actions
                </th>
              )}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-slate-100">
            {/* Loading */}
            {loading ? (
              <tr>
                <td
                  colSpan={columns.length + 1}
                  className="px-5 py-10 text-center text-sm text-slate-500"
                >
                  Loading...
                </td>
              </tr>
            ) : data.length === 0 ? (
              /* Empty */
              <tr>
                <td
                  colSpan={columns.length + 1}
                  className="px-5 py-10 text-center text-sm text-slate-500"
                >
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              /* Data */
              data.map((row, index) => (
                <tr
                  key={row._id || row.id || index}
                  className="transition hover:bg-slate-50"
                >
                  {columns.map((column) => (
                    <td
                      key={column.key}
                      className="px-5 py-4 text-sm text-slate-700"
                    >
                      {column.render
                        ? column.render(row)
                        : row[column.key] ?? "-"}
                    </td>
                  ))}

                  {/* Actions */}
                  {(onEdit || onDelete) && (
                    <td className="px-5 py-4">
                      <div className="flex justify-end gap-2">
                        {/* Edit */}
                        {onEdit && (
                          <button
                            type="button"
                            onClick={() => onEdit(row)}
                            className="rounded-lg p-2 text-indigo-600 transition hover:bg-indigo-50"
                            title="Edit"
                          >
                            <Edit size={17} />
                          </button>
                        )}

                        {/* Delete */}
                        {onDelete && (
                          <button
                            type="button"
                            onClick={() => onDelete(row)}
                            className="rounded-lg p-2 text-red-500 transition hover:bg-red-50"
                            title="Delete"
                          >
                            <Trash2 size={17} />
                          </button>
                        )}
                      </div>
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* ================= MOBILE VIEW ================= */}
      <div className="space-y-3 p-3 md:hidden">
        {/* Loading */}
        {loading ? (
          <div className="py-10 text-center text-sm text-slate-500">
            Loading...
          </div>
        ) : data.length === 0 ? (
          /* Empty */
          <div className="py-10 text-center text-sm text-slate-500">
            {emptyMessage}
          </div>
        ) : (
          /* Mobile Cards */
          data.map((row, index) => (
            <div
              key={row._id || row.id || index}
              className="rounded-xl border border-slate-200 p-4"
            >
              <div className="space-y-3">
                {columns.map((column) => (
                  <div
                    key={column.key}
                    className="flex items-start justify-between gap-4"
                  >
                    <span className="text-xs font-semibold uppercase text-slate-400">
                      {column.label}
                    </span>

                    <span className="text-right text-sm text-slate-700">
                      {column.render
                        ? column.render(row)
                        : row[column.key] ?? "-"}
                    </span>
                  </div>
                ))}
              </div>

              {/* Mobile Actions */}
              {(onEdit || onDelete) && (
                <div className="mt-4 flex justify-end gap-2 border-t border-slate-100 pt-3">
                  {/* Edit */}
                  {onEdit && (
                    <button
                      type="button"
                      onClick={() => onEdit(row)}
                      className="flex items-center gap-2 rounded-lg bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-600 transition hover:bg-indigo-100"
                    >
                      <Edit size={16} />
                      Edit
                    </button>
                  )}

                  {/* Delete */}
                  {onDelete && (
                    <button
                      type="button"
                      onClick={() => onDelete(row)}
                      className="flex items-center gap-2 rounded-lg bg-red-50 px-3 py-2 text-sm font-medium text-red-500 transition hover:bg-red-100"
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>
                  )}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

