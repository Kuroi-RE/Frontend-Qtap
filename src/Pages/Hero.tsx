import axios from "axios";
import { createSignal } from "solid-js";

const [data, setData] = createSignal([]);
const [quote, setQuote] = createSignal("");

const fetchData = async () => {
  try {
    const response = await axios({
      method: "GET",
      url: "http://localhost:5000/quote?lang=id",
      withCredentials: false,
      headers: {
        "Content-Type": "application/json",
      },
    });
    setData(response.data);
    setQuote("Testing copy to clipboard");
  } catch (error) {
    console.error("Error fetching data:", error);
    alert("Error fetching data. Please try again later.");
  }
};

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(
    () => {
      alert("Copied to clipboard!");
      console.log("Text copied to clipboard:", text);
    },
    (err) => {
      console.error("Could not copy text: ", err);
    }
  );
};

const Hero = () => {
  return (
    <div class="flex flex-col items-center justify-center w-full h-full ">
      <div class="text-center p-4 m-2 bg-[#DEF2F1] rounded shadow">
        <p>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. A repellat
          magnam, cumque voluptatum quo quam nulla possimus adipisci assumenda
          aperiam."
        </p>
        <h2>- Kevin</h2>
      </div>
      {data().map((item) => (
        <div class="bg-gray-100 p-4 m-2 rounded shadow">
          <h2 class="text-xl font-bold">{item}</h2>
          <p>{item}</p>
        </div>
      ))}
      <div class="flex gap-4 mt-4">
        <button
          onClick={() => copyToClipboard(quote())}
          class="bg-blue-500 text-white p-2 rounded cursor-pointer transition-transform transform hover:scale-105 hover:bg-blue-600"
        >
          Copy
        </button>
        <button
          onClick={fetchData}
          class="bg-blue-500 text-white p-2 rounded cursor-pointer transition-transform transform hover:scale-105 hover:bg-blue-600"
        >
          Get Quote
        </button>
      </div>
    </div>
  );
};

export default Hero;
