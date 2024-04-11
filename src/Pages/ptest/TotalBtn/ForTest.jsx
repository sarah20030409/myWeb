export default function TestScript({title=String}){
    let name,context,btn;
    if(title === 'Q1'){
        name = title;
        context = '第一題題目!';
        btn = '1按鈕們'
    }
    else if(title === 'Q2'){
        name = title;
        context = '第二題題目!';
        btn = '2按鈕們'
    }
    return(
        <section>
        <h1>{name}</h1>
        <h2>{context}</h2>
        <h2>{btn}</h2>
        </section>
    );
}

