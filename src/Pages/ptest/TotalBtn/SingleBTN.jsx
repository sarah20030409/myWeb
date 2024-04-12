export default function SingleBTN({name,clickB}){

    return(
        <>
        <div className="block">
        <button onClick={clickB} className="rounded-md shadow-myStyle p-3 m-3 bg-white text-5xl text-blue-400 hover:scale-105 hover:bg-yellow-200 hover:transition-all">{name}</button>
        </div>
        </>
    );
}