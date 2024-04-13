import './css/ScrollEmoji.css'

export default function EmojiManager({Point}){
    const outFrame = 'bg-blue-600 my-10 overflow-hidden rounded-xl'
    const scrollbarStyle = 'py-0 my-5 h-24 '
    const emojiStyle ="text-center text-white text-7xl font-black mb-10"
    

    function emoji(){
        if (Point >=0 && Point <=2){
            return 'emojiUxU';
        }
        else if (Point >=3 && Point <=5){
            return 'emojiUuU';
        }
        else if (Point >=6 && Point <=8){
            return 'emojiUAU';
        }
        else if (Point >=9 && Point <=11){
            return 'emojiOAO';
        }
        else if (Point >=12 && Point <=14){
            return 'emojiTAT';
        }
        else{
            return 'emojiOuO';
        }
        }

    return(
        <>
        <div className={`${outFrame}`}>
            {/* use 2 props(or more) to define classname shuold avoid input same css style, otherwise there will be style conflicts ! */}
            <div className={` ${emoji()} ${scrollbarStyle}`}>
                {/* <h1 className={emojiStyle}>{emoji(Point)}</h1> */}
                <h1 className={`${emojiStyle} `} >UxU</h1>
                <h1 className={`${emojiStyle} `} >UuU</h1>
                <h1 className={`${emojiStyle} `} >UAU</h1>
                <h1 className={`${emojiStyle} `} >OAO</h1>
                <h1 className={`${emojiStyle} `} >TAT</h1>
                <h1 className={`${emojiStyle} `} >OuO</h1>
            </div>
        </div>
        </>
    );
    
}