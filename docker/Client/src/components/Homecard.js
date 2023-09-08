const Homecard = ({cname,img}) => {
    return ( 
        <button className="scale-100 hover:scale-105" >
            <div className="bg-white rounded-lg drop-shadow-xl w-28 h-44 py-2">
                <div className="p-3 flex flex-col justify-center">
                    <div className='py-2 m-auto'><img src={ img } alt="Incubation centre"/></div>
                    <div className='py-3'><h1 className="font-semibold text-center">{cname}</h1></div>
                </div>
            </div>
        </button>
     );
}
 
export default Homecard;