import ThemeToggle from "./components/ThemeToggle";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme } = useTheme();

  return (
    <div className="app">
      <h1 className="text-3xl font-bold mb-4">Current Theme: {theme}</h1>
      <ThemeToggle />
      <p className="mt-4">
        This is a demo of Light & Dark Theme using Context API.
      </p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa facere dignissimos voluptatibus necessitatibus aliquam earum odit hic obcaecati enim! Molestiae.
    </div>
  );
}

export default App;
