import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";
import { ThemeProvider } from "./contexts/Theme";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full ">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card
              image="https://media.gettyimages.com/id/2107861401/photo/rolex-oyster-perpetual-date-watch-is-seen-at-a-store-in-rome-italy-on-march-26-2024.jpg?s=612x612&w=gi&k=20&c=I2QCtsvxA2b03l2IDlmPDSjO4-nyY6aUOqJtuU-C2gY="
              name="Rolex Watch"
              price="99.99"
              review="4.3⭐️"
            />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
