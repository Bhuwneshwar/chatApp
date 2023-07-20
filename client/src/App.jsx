import { Route, Router } from "react-router-dom";

import Join from "./components/Join";
const App = () => {
  return (
    <Router>
      <Route path="/join" component={<Join />} />
      <Route path="*" component={"Bhuwneshwar  Mandal and"} />
    </Router>
  );
};

export default App;
//import socketIO from "socket.io-client";

//const endPoint = "http://localhost:5000/";
//const socket = socketIO(endPoint, { transports: ["websocket"] });
//socket.on("connection", () => {
// console.log("socket triggered");
// });
