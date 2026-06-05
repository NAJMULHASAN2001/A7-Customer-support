
import vector1 from '../assets/vector1.png'

const Main = ({inProgressCount}) => {
   
    // console.log(data, setData)

    //  const inProgress = data.filter((element) => element.status == "In-Progress, Open");
//   const resolved = data.filter((element) => element.status == "Open");
    return (
       <div className=''>
        <div className="container border-1 mx-auto md:flex md:justify-between mt-25" >
            <div className=" bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] h-[300px] md:w-[750px] flex flex-col justify-center items-center rounded-2xl mb-5 md:mb-0">
                <p className=" text-5xl font-bold text-white mb-3">In progress</p>
                <p className="text-8xl font-bold text-white">{inProgressCount}</p>
            </div>
            <div className="bg-gradient-to-r from-[#54CF68]  to-[#00827A] h-[300px] md:w-[750px] flex flex-col justify-center items-center rounded-2xl">
                <p className="text-5xl font-bold text-white mb-3">Resolved</p>
                <p className="text-8xl font-bold text-white">0</p>
            </div>
        </div>
       </div>

        //-----------Customer Ticket---------------------------
    );
};

export default Main;