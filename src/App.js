import Paper from "./components/paper";
import Card from "./components/card";
import { useEffect, useRef, useState } from "react";

function App() {

  const [info, setInfo] = useState([]);
  const ws = useRef(null);

  const deleteElement = iden => {
    setInfo(info.filter(item => item.id !== iden))
  }

  useEffect(() => {

    ws.current = new WebSocket("wss://mangovest.herokuapp.com/realtime");
    ws.current.onopen = () => console.log("Connection opened");
    ws.current.onclose = () => console.log("Connection closed");
    
    return () => {
      ws.current.close();
    };
  }, []);

  useEffect(() => {
    if (!ws.current) return;
    ws.current.onmessage = e => {
      const message = JSON.parse(e.data);
      console.log("e", message);
      setInfo([...info, {id: "s" + (Math.floor(Math.random() * 10000) + 1), bed: message.bed, type: message.command}]);
    }
  }, [info]);

  return (
    <div className="mx-0 xl:mx-40">
      <Paper/>
      <div className="flex flex-wrap justify-start">
        {
          info.map((item) =>{
            return <Card iden={item.id} bed={item.bed} type={item.type} onChange={deleteElement}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
