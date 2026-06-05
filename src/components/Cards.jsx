import { use, useState } from "react";
import Main from "./Main";

const Cards = ({ dataPromise }) => {
    const initialData = use(dataPromise)
    // const [data, setData] = useState(initialData)
    const [inProgressCount, setInProgressCount] = useState(0);
    const handleClick = () => {
        console.log('card clicked')
        setInProgressCount(prev => prev + 1);
    }
    return (
        <>

            <div>
                {/* <Main data={data}></Main> */}
                <Main inProgressCount={inProgressCount}
                    setInProgressCount={setInProgressCount}></Main>
                <section className="flex container mx-auto gap-3 mt-20">
                    <div className="w-3/4 border-1 ">
                        <h1 className="text-3xl font-bold">Customer Tickets</h1>
                        <div className="grid grid-cols-2 gap-7 mt-3">
                            {
                                initialData.map((data) => {
                                    console.log(data)

                                    return (
                                        <div onClick={handleClick} className="card border-1 bg-base-100 card-md shadow-xl">
                                            <div className="card-body">
                                                <div className="flex justify-between">
                                                    <h2 className="card-title font-bold text-2xl">{data.title}</h2>
                                                    <div>
                                                        <p className={`rounded-lg px-5 py-2 ml-4 text-green-800 ${data.status == "Open" ? "bg-green-400" : "bg-yellow-400"}`}>{data.status}</p>
                                                    </div>
                                                </div>

                                                <p>{data.description}</p>
                                                <div className="flex">
                                                    <p>#{data.id}</p>
                                                    <p>{data.priority}</p>
                                                    <p>{data.customer}</p>
                                                    <p>{data.createdAt}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                        </div >
                    </div>
                    <div className="border-1 w-1/4">
                        <h1 className="text-3xl font-bold">Task Status</h1>
                        <p>Select a ticket to add to Task Status</p>
                    </div>
                </section>
            </div>
        </>
    );
};
export default Cards;