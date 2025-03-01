import { useState } from "react";
import AccountDetails from "./components/BasicDetails/AccountDetails/AccountDetails";
import BasicDetails from "./components/BasicDetails/BasicDetails";
interface configObject {
  title: string;
  component: React.ReactNode;
  isValid?: boolean;
}
export interface dataObject {
  name: string;
  age: string;
  dob: string;
  item?: string[];
  bankName: string;
  accountNumber: string;
  isComplete?: boolean;
}
function App() {
  const [tabs, setTabs] = useState<number>(0);
  const fromLocalStorage = JSON.parse(localStorage.getItem("data") || "{}");

  const [data, setData] = useState<dataObject>({
    name: fromLocalStorage.name || "",
    age: fromLocalStorage.age || "",
    dob: fromLocalStorage.dob || "",
    item: fromLocalStorage.item || [],
    bankName: fromLocalStorage.bankName || "",
    accountNumber: fromLocalStorage.accountNumber || "",
    isComplete: fromLocalStorage.isComplete || false,
  });
  const config: configObject[] = [
    {
      title: "Basic Details",
      component: <BasicDetails data={data} setData={setData} />,
      isValid: data.name && data.age && data.dob ? true : false,
    },
    {
      title: "Account Details",
      component: <AccountDetails data={data} setData={setData} />,
      isValid: data.bankName && data.accountNumber ? true : false,
    },
  ];
  const handleButtonClick = () => {
    if (tabs === config.length - 1) {
      console.log(data);
      localStorage.setItem("data", JSON.stringify(data));
      alert("Data saved successfully");
    } else {
      setTabs(tabs + 1);
    }
  };
  const currentTabs = config[tabs].component;
  return (
    <div className="flex items-center justify-center h-svh">
      <div>
        <div className="flex  gap-5 ">
          {config.map((item) => {
            return (
              <div
                onClick={() => setTabs(config.indexOf(item))}
                className={`${
                  tabs === config.indexOf(item) ? "border" : " "
                } p-5`}
              >
                {item.title}
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center border mt-12 p-10">
          {currentTabs}
        </div>
        <button
          disabled={!config[tabs].isValid}
          className="bg-blue-800 p-2 cursor-pointer rounded-lg w-full mt-4 text-white"
          onClick={handleButtonClick}
        >
          {tabs === config.length - 1 ? "Submit" : "Continue"}
        </button>
      </div>
    </div>
  );
}

export default App;
