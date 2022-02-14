//1.Normal Function

function add(a,b)
{
    console.log(a+b);
}
add(2,6);

//2.Function Expression
function calculator(str,a,b)
{
    if(str=='add')
    {
        return function add() {
            console.log(a+b )
        } 
        
    }
}
let returnedFunc= calculator('add',2,3);
console.log("returned function is \n"+returnedFunc);
returnedFunc();


//2. Function Expression
let sayhi=function()
{
    console.log("hello guys I am function Expression");
}
console.log("line 54"+sayhi);
sayhi();

//3. IIFE
let additionIIFE=(function add(a,b){
    console.log(a+b);
})(20,30);