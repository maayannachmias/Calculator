let toSolve = "";

//Function to append characters to the equation.
function addToEquation(char) 
{
    let charToSolve, charToDisplay;
    switch (char) 
    {
        case "rpar":
            charToSolve = ")";
            charToDisplay = ")";
            break;
        case "lpar":
            charToSolve = "(";
            charToDisplay = "(";
            break;
        case "log":
            charToSolve = "Math.log10(";
            charToDisplay = "log(";
            break;
        case "ln":
            charToSolve = "Math.log(";
            charToDisplay = "ln(";
            break;
        case "e":
            charToSolve = "Math.E";
            charToDisplay = "e";
            break;
        case "pi":
            charToSolve = "Math.PI";
            charToDisplay = "π";
            break;
        case "mod":
            charToSolve = "%";
            charToDisplay = "mod";
            break;
        case "exp":
            charToSolve = "Math.E**";
            charToDisplay = "e^";
            break;
        case "abs":
            charToSolve = "Math.abs(";
            charToDisplay = "abs(";
            break;
        case "sqrt":
            charToSolve = "Math.sqrt(";
            charToDisplay = "√(";
            break;
        case "factorial":
            charToSolve = "factorial(";
            charToDisplay = "fac(";
            break;
        case "**2":
            charToSolve = "**2";
            charToDisplay = "^2";
            break;
        case "**":
            charToSolve = "**";
            charToDisplay = "^";
            break;
        case "10**":
            charToSolve = "10**";
            charToDisplay = "10^";
            break;
        default:
            charToSolve = char;
            charToDisplay = char;
            break;
    }

    toSolve += charToSolve;
    let monitor = document.querySelector('.monitor');
    monitor.innerText = monitor.innerText === "0" ? charToDisplay : monitor.innerText + charToDisplay;

}

function fac(n) 
{
    return n === 0 || n === 1 ? 1 : n * fac(n - 1);
}

function solveEquation() 
{
    //Regex for the case when a factorial is being calculated.
    toSolve = toSolve.replace(/factorial\((\d+)\)/g, (match, number) => fac(parseInt(number)));
    const result = eval(toSolve);
    toSolve = String(result);
    document.querySelector('.monitor').innerText = result;
}

function deleteAll()
 {
    toSolve = "";
    document.querySelector('.monitor').innerText = "0";
}

function plusMinus() {
    if (!isNaN(parseFloat(toSolve))) 
    {
        const result = String(parseFloat(toSolve) * -1);
        document.querySelector('.monitor').innerText = result;
        toSolve = result;
    }
}

function deleteFromEquation() 
{
    const operatorsToDelete = 
    [
        { operator: "Math.log10", displayLength: 3 },
        { operator: "Math.log", displayLength: 2 },
        { operator: "Math.E", displayLength: 1 },
        { operator: "Math.PI", displayLength: 1 },
        { operator: "%", displayLength: 1 },
        { operator: "**", displayLength: 1 },
        { operator: "Math.abs", displayLength: 3 },
        { operator: "Math.sqrt", displayLength: 1 },
        { operator: "factorial", displayLength: 3 }
    ];
    let expressionLength =  1;
    for (const { operator, displayLength } of operatorsToDelete) 
    {
        if (toSolve.endsWith(operator)) {
            toSolve = toSolve.slice(0, -operator.length);
            document.querySelector('.monitor').innerText = document.querySelector('.monitor').innerText.slice(0, -displayLength);
            expressionLength = displayLength;
            break;
        }
    }
    if (expressionLength === 1)
    {
        toSolve = toSolve.slice(0, -1);
        document.querySelector('.monitor').innerText = document.querySelector('.monitor').innerText.slice(0, -1);
    }
    if (document.querySelector('.monitor').innerText.trim() === "")
    {
        document.querySelector('.monitor').innerText = '0';
        toSlice = "";
    }
        
}

function showNotFunctionalMessage() 
{
    alert("This button is not functional yet.");
}


// custom config for the MTW app 
const mtwAppConfig = {
    border: true // app border in the MTW page                    
}

///////////////////////////////////////////////////////
// implement this functions in order to use private API        
const sendPrivateApiRequest = async () => {
    // your code here:
    // sendRequestToParent({ cat: 'getAssets' })
}        

const acceptPrivateApiResponse = async (data) => {
    // process received data here:
    // console.log(data)
}

// use this in order to send on document load
document.addEventListener('DOMContentLoaded', () => {
    // your code here:
    //sendRequestToParent({ method: 'getAssets' })
})