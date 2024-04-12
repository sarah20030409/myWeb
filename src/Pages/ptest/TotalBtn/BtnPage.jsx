import { useState } from "react";
import SingleBTN from "./SingleBTN";
import EmojiManager from "./EmojiManager";


export function AllBtnPage({count,setCount}){
    const handleCount =()=>setCount(count + 1);

    return(
        <>
        <div>
        <SingleBTN name={'BTN-1'} clickB={handleCount} />
        <SingleBTN name={'BTN-2'} clickB={handleCount} />
        <SingleBTN name={'BTN-3'} clickB={handleCount} />
        </div>
        </>
    );
}

export default function BtnPage(){
    const [count, setCount] = useState(0);

    return(
        <>
          {/* EMOJI */}
          <EmojiManager Point={count} />

          {/* BTN AREA */}
            <AllBtnPage count={count} setCount={setCount}/>
        </>
    );
}