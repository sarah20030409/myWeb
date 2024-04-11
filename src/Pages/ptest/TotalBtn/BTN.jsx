export default function BtnCounter({name,clickB}){

    return(
        <>
        <div className="block">
        <button onClick={clickB} className="rounded-md shadow-myStyle p-3 m-3 bg-white text-3xl hover:bg-purple-300 hover:transition-all">{name}</button>
        </div>
        </>
    );
}