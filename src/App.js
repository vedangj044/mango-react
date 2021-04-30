import Paper from "./components/paper";
import Card from "./components/card";
import { useEffect, useState } from "react";

function App() {

  const [info, setInfo] = useState([]);

  const deleteElement = iden => {
    setInfo(info.filter(item => item.id !== iden))
  }

  useEffect(() => {

    setInfo([
      {id: "s" + (Math.floor(Math.random() * 10000) + 1), bed: "10", type: "1"},
      {id: "s" + (Math.floor(Math.random() * 10000) + 1), bed: "13", type: "1"},
      {id: "s" + (Math.floor(Math.random() * 10000) + 1), bed: "12", type: "1"},
      {id: "s" + (Math.floor(Math.random() * 10000) + 1), bed: "16", type: "2"},
    ]);

  }, [])

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
