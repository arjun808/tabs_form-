import { dataObject } from "../../App";

interface BasicDetailsProps {
  data: dataObject;
  setData: React.Dispatch<React.SetStateAction<dataObject>>;
}

const BasicDetails: React.FC<BasicDetailsProps> = ({ data, setData }) => {
  const { name, age, dob, item } = data;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setData((prev) => ({
      ...prev,
      item: checked
        ? [...(prev.item || []), value]
        : (prev.item || []).filter((hobby) => hobby !== value),
    }));
  };

  const hobbies = ["Reading", "Traveling", "Gaming", "Cooking", "Sports"];

  return (
    <div className="flex flex-col gap-5 min-h-45">
      <h1>Basic Details</h1>
      <input
        value={name}
        name="name"
        onChange={handleChange}
        className="border"
        placeholder="Your name"
      />
      <input
        value={age}
        name="age"
        type="number"
        onChange={handleChange}
        className="border"
        placeholder="Your age"
      />
      <input
        value={dob}
        type="date"
        name="dob"
        onChange={handleChange}
        className="border"
      />

      <h2>Select Your Hobbies</h2>
      {hobbies.map((hobby) => (
        <div key={hobby}>
          <input
            type="checkbox"
            id={hobby}
            name="item"
            value={hobby}
            checked={item?.includes(hobby) || false}
            onChange={handleCheckboxChange}
          />
          <label htmlFor={hobby}>{hobby}</label>
        </div>
      ))}
    </div>
  );
};

export default BasicDetails;
