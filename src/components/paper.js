import React from "react";

export default function Paper(props) {
    return (
        <div className="mx-4 my-8">
            <div className="flex items-baseline ">
                <a className="flex-auto" href="/"><h1 className="my-2 text-4xl font-bold px-4">Mango</h1></a>
                <div className="bg-yellow-300 h-4 w-4 mx-4 rounded-sm"></div>
                <h1 className="text-xl">Drip empty</h1>
                <div className="h-4 w-4"></div>
                <div className="bg-red-300 h-4 w-4 mx-4 rounded-sm"></div>
                <h1 className="text-xl">Call nurse</h1>
            </div>
            <hr />
        </div>
    );
}
