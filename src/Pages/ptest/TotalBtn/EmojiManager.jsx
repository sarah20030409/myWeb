
export default function EmojiManager({Point}){
    
    function emoji(){
        if (Point >=0 && Point <=2){
            return 'UxU';
        }
        else if (Point >=3 && Point <=5){
            return 'UuU';
        }
        else if (Point >=6 && Point <=8){
            return 'UAU';
        }
        else if (Point >=9 && Point <=11){
            return 'OAO';
        }
        else if (Point >=12 && Point <=14){
            return 'TAT';
        }
        else{
            return 'OuO';
        }
        }

    return(
        <>
        <h1 className="text-center text-white text-6xl pb-5 font-black">{emoji(Point)}</h1>
        </>
    );
}