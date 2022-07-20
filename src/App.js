import "./App.css";
import Card from "./screens/Card";
import SoupKitchenTwoToneIcon from "@mui/icons-material/SoupKitchenTwoTone";
import HourglassBottomTwoToneIcon from "@mui/icons-material/HourglassBottomTwoTone";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { useEffect, useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";
const socket = io.connect("");
function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handelogin = () => {
    // axios.post("/api/login", { username, password }).then((res) => {
    //   console.log(res.data);
    // });
    socket.emit("notification", "cheeej");
    socket.on("a", (data) => console.log("wwwwwwwwwwwwwwww", data));
  };

  return (
    <div className="App">
      <div className="header">
        <div className="navabr">
          <div className="log">
            <SoupKitchenTwoToneIcon sx={{ fontSize: "90px", color: "white" }} />
            <h1>Kitchen</h1>
          </div>
          <div className="logos">
            <div className="log2">
              <HourglassBottomTwoToneIcon sx={{ fontSize: "40px" }} />
              <span style={{ fontSize: "40px" }}>5</span>
              <h3>en attente</h3>
            </div>
            <div className="log2">
              <AutorenewIcon sx={{ fontSize: "40px" }} />
              <span style={{ fontSize: "40px" }}>5</span>
              <h3>en cours</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="Card-container">
        <Card />
      </div>

      <div className="footer">
        <input
          type="text"
          placeholder="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />{" "}
        <input
          type="text"
          placeholder="bazword"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />{" "}
        <button
          onClick={() => {
            handelogin();
          }}
        >
          login
        </button>
      </div>
    </div>
  );
}

export default App;
