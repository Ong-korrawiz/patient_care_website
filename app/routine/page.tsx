export default function DailyRoutine() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Daily Routine</h1>
        <p className="text-slate-600">Patient care activity log and timeline</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Today's Activities</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <p className="font-semibold text-slate-900">No activities logged yet</p>
              <p className="text-sm text-slate-500">Log your first activity to get started</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Quick Add</h3>
          <div className="space-y-3">
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              🍽️ Feeding
            </button>
            <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
              🔄 Turning
            </button>
            <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
              💨 Suctioning
            </button>
            <button className="w-full bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition">
              🧼 Cleaning
            </button>
            <button className="w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
              💓 Vitals
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
