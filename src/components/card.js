import React, { useState, useEffect } from "react";

export default function Card(props) {

    const [button, setButton] = useState({display: 'none'});
    const [data, setData] = useState([]);

    function handleChange() {
        props.onChange(props.iden);
    }

    useEffect(() => {

        let color;
        if (props.type === "1") {
            color = "yellow"
        }
        else {
            color = "red"
        }

        setData({id: props.iden, colors: color, bed: props.bed});
    }, [props])

    return (
        <div id={data.id} className={"w-44 h-48 rounded-md m-4 hover:bg-opacity-60  p-4 bg-" + data.colors + "-300" } onMouseEnter={e => {
            setButton({display: 'block'});
        }} onMouseLeave={e => {
            setButton({display: 'none'})
        }}>
            <h1 className="text-center text-gray-900 text-lg">Bed</h1>
            <h1 className="text-center text-8xl font-bold">{data.bed}</h1>
            <button style={button} className={"py-2 rounded-md text-white w-full bg-" + data.colors + "-700"} onClick={handleChange}><i className="fa fa-check-square px-2"></i>Done</button>
        </div>
    );
}