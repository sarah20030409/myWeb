import { useState } from "react";
import BtnCounter from "./BTN";
import PointsCounter from "./PointsCount";


export function AllBtnPage({count,setCount}){
    const handleCount =()=>setCount(count + 1);

    return(
        <>
        <div>
        <BtnCounter name={'BTN-1'} clickB={handleCount} />
        <BtnCounter name={'BTN-2'} clickB={handleCount} />
        <BtnCounter name={'BTN-3'} clickB={handleCount} />
        </div>
        </>
    );
}

export default function BtnPage(){
    const [count, setCount] = useState(0);

    return(
        <>
          {/* EMOJI */}
          <PointsCounter Point={count} />

          {/* BTN AREA */}
            <AllBtnPage count={count} setCount={setCount}/>
        </>
    );
}