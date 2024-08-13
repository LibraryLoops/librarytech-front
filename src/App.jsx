import Example from "./components/Example";

const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-700 to-purple-700">
      <h1 className="text-7xl font-bold mb-5">Equipe LibraryTech</h1>
      <Example />
    </div>
  );
};

export default App;
