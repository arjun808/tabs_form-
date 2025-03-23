import { useState, useEffect } from "react";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(intervalId);
          return 100;
        }
        return prev + 10;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      style={{
        height: "100svh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ProgressBar percentage={percentage} />
    </div>
  );
}

export default App;
