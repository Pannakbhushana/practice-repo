import Debounce from "./pages/Debounce";
import Throttle from "./pages/Throttle";


function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Debounce & Throttling Practice Dashboard
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        <Debounce />
        <Throttle />
      </div>
    </div>
  );
}

export default App;
