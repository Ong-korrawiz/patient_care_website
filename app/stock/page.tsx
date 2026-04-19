export default function StockManagement() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Stock Management</h1>
        <p className="text-slate-600">Real-time inventory tracking and management</p>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b border-slate-200">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            + Add Item
          </button>
        </div>

        <table className="w-full">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Item Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Quantity</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Unit</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-200 hover:bg-slate-50">
              <td className="px-6 py-4 text-sm text-slate-900">Feeding Bags</td>
              <td className="px-6 py-4 text-sm text-slate-600">24</td>
              <td className="px-6 py-4 text-sm text-slate-600">pieces</td>
              <td className="px-6 py-4 text-sm">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs">Good Stock</span>
              </td>
              <td className="px-6 py-4 text-sm">
                <button className="text-blue-600 hover:text-blue-700">Edit</button>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="px-6 py-4 bg-slate-50 text-center text-slate-500 text-sm">
          No items yet. Add your first item to get started.
        </div>
      </div>
    </div>
  );
}
