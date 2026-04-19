export default function Dashboard() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Dashboard</h1>
        <p className="text-slate-600">Welcome to ComaCare Patient Management System</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
          <p className="text-slate-600">Active Patients</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-3xl font-bold text-amber-600 mb-2">12</div>
          <p className="text-slate-600">Low Stock Items</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
          <p className="text-slate-600">System Health</p>
        </div>
      </div>

      <div className="mt-8 bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Recent Activity</h2>
        <p className="text-slate-500">No recent activities yet. Start logging patient care activities.</p>
      </div>
    </div>
  );
}
