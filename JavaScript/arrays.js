//Array is a collection of element
let car=['BMW',"AUDI","MG",1,2,3,true];
console.log(car);
//accessing the elements of Array
console.log(car[0]);
console.log(car[1]);
//replacing elements in arrays
car[3]="mahindra";
console.log(car[3]);
//adding elements in arrays
car[7]="honda";
console.log(car[7]);
//Pop method
car.pop();
//push method
car.push("Tata");
car.push("lambourgini");
console.log("After pushing a element");
console.log(car);
//Unshift Method
car.unshift("JLR");
console.log(car);
//shift method
car.shift()
console.log(car);


//let 2d arrays
let arrays2d=[
    [1,2,5],
    [5,8,7],
    [4,8,9]
]
console.log(arrays2d);
console.table(arrays2d);