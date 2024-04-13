import { useState } from "react";
import SingleBTN from "./SingleBTN";
import EmojiManager from "./EmojiManager";


export function AllBtnPage({count,setCount}){
    const handleCount =()=>setCount(count + 1);
    console.log(count)

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
    const TitleStyle = 'text-center text-yellow-300 text-5xl pb-5 font-black pb-10'

    return(
        <>
          <h2 className={TitleStyle}>Feeling Arcade</h2>
          {/* EMOJI */}
          <EmojiManager Point={count} />

          {/* BTN AREA */}
            <AllBtnPage count={count} setCount={setCount}/>
        </>
    );
}