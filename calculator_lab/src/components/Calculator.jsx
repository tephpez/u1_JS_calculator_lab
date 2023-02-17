import { useState } from 'react'     //

export default function Calculator() {      //

    const [display, setDisplay] = useState(0);
    const [currentCalc, setCurrentCalc] = useState('')
    
    const handleClick = (event) => {
        event.preventDefault();
        const newValue = currentCalc + event.target.value
        console.log(newValue)
        setCurrentCalc(newValue)
        setDisplay(newValue)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setDisplay(eval(currentCalc));
        console.log(currentCalc)
        setCurrentCalc('')
    }

    const resetCalc = (event) =>{
        event.preventDefault();
        setDisplay(0);
        setCurrentCalc('');
    }

    const backSpace = (event) => {
        event.preventDefault();
        const newValue = currentCalc.slice(0, -1);
        setCurrentCalc(newValue);
        setDisplay(newValue);
    }

    return (
        <div id="calcContainer">
            <section id="display"><h1>{display}</h1></section>
            <section id="buttonsContainer">
                <button className="clrDelBtns" 
                        onClick={resetCalc}>CLR</button>
                <button className="clrDelBtns">
                    <span className="material-symbols-rounded size-48" 
                          onClick={backSpace}>DEL</span></button>
                <button 
                    className="functionBtn" 
                    value="%" 
                    onClick={handleClick}>%</button>
                <button 
                    className="functionBtn" 
                    value="/" 
                    onClick={handleClick}>/</button>
                <button 
                    className="numBtn" 
                    value="1" 
                    onClick={handleClick}>1</button>
                <button 
                    className="numBtn" 
                    value="2" 
                    onClick={handleClick}>2</button>
                <button 
                    className="numBtn" 
                    value="3" 
                    onClick={handleClick}>3</button>
                <button 
                    className="functionBtn" 
                    value="*" 
                    onClick={handleClick}>x</button>
                <button 
                    className="numBtn" 
                    value="4" 
                    onClick={handleClick}>4</button>
                <button 
                    className="numBtn" 
                    value="5" 
                    onClick={handleClick}>5</button>
                <button
                    className="numBtn" 
                    value="6" 
                    onClick={handleClick}>6</button>
                <button
                    className="functionBtn" 
                    value="-" 
                    onClick={handleClick}>-</button>
                <button
                    className="numBtn" 
                    value="7" 
                    onClick={handleClick}>7</button>
                <button
                    className="numBtn" 
                    value="8" 

                    onClick={handleClick}>8</button>
                <button
                    className="numBtn" 
                    value="9" 
                    onClick={handleClick}>9</button>
                <button
                    className="functionBtn" 
                    value="+" 
                    onClick={handleClick}>+</button>
            </section>
            <section id="bottom-btns">
                <button 
                className="numBtn" 
                id="zero-btn" 
                value="0" 
                onClick={handleClick}>0</button>
                <button 
                className="numBtn" 
                value="." 
                onClick={handleClick}>.</button>
                <button 
                className="equalsBtn" 
                value="=" 
                onClick={handleSubmit}>=</button>
            </section>
        </div>
    )
}
/*
Variable for the result value */
























