const Outercomp = ({name,addon,children}) => {
    return ( 
        <div className="m-10 bg-[#7F90A9]/25 rounded-[40px]">
            <div className="px-10 py-10">
                <div className="text-lg border-l-2 border-black pl-4">
                    <h1 className="font-semibold pt-4">{name}</h1><br/>
                    <h2>{addon}</h2>
                </div>
                {children}
            </div>
        </div>
     );
}
 
export default Outercomp;