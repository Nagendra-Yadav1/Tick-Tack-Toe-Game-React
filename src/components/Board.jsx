import React, { useState } from 'react';

function Board() {
    const empty_arr = Array(9).fill("");
    const [inputs, setInputs] = useState(empty_arr);
    const [player, setPlayer] = useState(true);
    const [winner, setWinner] = useState("")
    const [show, setShow] = useState(true)

    const winnerList = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const clickHandler = (index) => {
        if (inputs[index] === "") {
            const newData = inputs.map((item, innerIndex) => {
                if (index === innerIndex) {
                    return player ? "X" : "O";
                }
                return item;
                
            });
            setShow(true)
            setInputs(newData);
            setPlayer(!player);
        }
    };

    winnerList.forEach((item) => {
        const [x, y, z] = item;
        if (inputs[x] !== "" && inputs[x] === inputs[y] && inputs[y] === inputs[z]) {
            setWinner(inputs[x])
            setShow(false)
            setInputs(empty_arr)
        }
    });

    const resetGame = () => {
        setInputs(empty_arr);
        setPlayer(true);
        setWinner("")
    };

    return (
        <>
            <h1 className='text-center text-5xl font-bold mb-4 text-blue-800 m-2'>Tic Tack Toe</h1>
            <section className='w-full max-w-screen-lg mx-auto p-4 flex justify-center items-center text-white'>
                <div className='grid grid-cols-3 gap-1'>
                    {inputs.map((item, index) => (
                        <div
                            key={index}
                            className='w-28 h-28 border-4 bg-slate-900 border-blue-500 rounded-md cursor-pointer flex justify-center items-center text-5xl border-l-cyan-400 '
                            onClick={() => clickHandler(index)}>
                            {item}
                        </div>
                    ))}
                </div>
            </section>
            <div className='mt-2 text-center flex justify-center items-center'>
                {show ? (<button className='bg-blue-500 text-blue-950 font-bold px-8 py-4 rounded-md shadow-md hover:bg-blue-600 transition duration-300 text-3xl' onClick={resetGame}>
                    Reset Game
                </button>) : <div className='bg-blue-500 text-blue-950 font-bold px-12 py-4 rounded-md shadow-md hover:bg-blue-600 transition duration-300 text-3xl'>Winner:{winner}</div>}

            </div>
        </>
    );
}

export default Board;
