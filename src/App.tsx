import { Route, Routes } from 'react-router-dom'

function Hello() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-md">
        <h1 className="text-2xl font-bold mb-2">שלום 🌸</h1>
        <p className="mb-6 text-gray-600">פרסום הדדי – כוח נשי בעסקים</p>
        <button className="h-12 w-full rounded-xl bg-brand text-white font-medium">
          בקרוב כאן
        </button>
      </div>
    </main>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="*" element={<Hello />} />
    </Routes>
  )
}
