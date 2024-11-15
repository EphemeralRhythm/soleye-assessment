import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [inputValue, setInputValue] = useState();

  const getToken = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return null;
    }
    return token;
  };

  const fetchCrudData = async () => {
    const token = getToken();
    if (!token) return;

    try {
      const response = await axios.get("http://localhost:5000/api/crud", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Response Data:", response.data);
      setValue(response.data.value);
    } catch (error: any) {
      if (error.response && error.response.status === 403) {
        navigate("/login");
      } else {
        console.error("An error occurred:", error.message || error);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const token = getToken();
    if (!token) return;

    try {
      await axios.post(
        "http://localhost:5000/api/crud",
        { value: inputValue },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setValue(inputValue);
    } catch (error: any) {
      if (error.response && error.response.status === 403) {
        navigate("/login");
      } else {
        console.error("An error occurred:", error.message || error);
      }
    }
  };

  useEffect(() => {
    fetchCrudData();
  }, []);

  return (
    <div className="p-4">
      <h2>Secret Value</h2>
      <p>Current Secret Value: {value}</p>

      <form onSubmit={handleSubmit} className="mt-4 flex flex-col">
        <label htmlFor="Change The Secret Value" className="block mb-2">
          Edit Secret Value:
        </label>
        <input
          type="text"
          id="newValue"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border border-gray-300 p-2 w-full max-w-96"
          placeholder="Enter new secret value"
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded max-w-96"
        >
          Update Secret Value
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
