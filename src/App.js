import "./App.css";
import axios from "axios";

function App() {
  let testData;

  const res = axios
    .get("https://leaquiz.xyz/champion", {
      headers: {
        secret_key: process.env.secret_key,
      },
    })
    .then((response) => {
      // Handle response
      let data = response.data.data;
      testData = Object.values(data)[0];
      console.log(testData.name);
    })
    .catch((err) => {
      // Handle errors
      console.error(err);
    });

  return (
    <div>
      <p>Ime heroja: {testData?.name}</p>
    </div>
  );
}

export default App;
