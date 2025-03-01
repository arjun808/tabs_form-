import { dataObject } from "../../../App";

interface AccountDetailsProps {
  data: dataObject;
  setData: React.Dispatch<React.SetStateAction<dataObject>>;
}
function AccountDetails({ data, setData }: AccountDetailsProps) {
  const { bankName, accountNumber,isComplete } = data;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      isComplete: e.target.value === "true", 
    }));
  };
  return (
    <div className="flex flex-col gap-5 min-h-45">
      <h1>Account Details</h1>
      <input
        onChange={(e) => handleChange(e)}
        name="bankName"
        value={bankName}
        className=""
        placeholder="Bank Name"
      ></input>
      <input
        onChange={(e) => handleChange(e)}
        name="accountNumber"
        value={accountNumber}
        placeholder="account Number"
      ></input>
       <h2>Is the KYC complete?</h2>
      <div>
        <input
          type="radio"
          name="isComplete"
          value="true"
          checked={isComplete === true}
          onChange={handleRadioChange}
        />
        <label>Yes</label>

        <input
          type="radio"
          name="isComplete"
          value="false"
          checked={isComplete === false}
          onChange={handleRadioChange}
        />
        <label>No</label>
      </div>
    </div>
  );
}

export default AccountDetails;
