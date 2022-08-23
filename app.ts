// // confirm('let stat')
// (function greeting (){
//    alert("hello")
// }) ();
// function add(){
//     return 1+2;
// }
// alert(add());
// ======variable declaration in ts 
// let a = 10;
// a= 20;
// a = "sdsfsd"
// ====any type ====
// let a;
// a =10;
// a = "hello";
// a = () =>{
//     alert('hello');
// };
// a = {
//     name:"abc"
// };
// console.log(a.name);
// ====end ====
// ===== const  declaration===
// const a:string = "hello";
// console.log(a);
// function add(a:number,b:string) {
//     return a+b ;
// }
// console.log(add(1,'2'));

// =====End===
// ===== var is global scope  or function using local scope ====
//====== let is block scope ==== 


// var a=10;
// function f(){
//     console.log(a);
    
// }
// f();

// ====== end some ===
// ==== example ===
// function f(parthi:boolean){
//     if (parthi){
//         var a=10;
//     }
//     return a;
    
    
// }
// console.log(f(true));
// ====exmple ===
/*function sumMatrix(matrix:number[][]){
    var sum = 0;
    for (var i=0;i<matrix.length;i++){
        var currentRow = matrix[i];
        for (var i=0;i<currentRow.length;i++){
            sum+=currentRow[i];
        }
    }
    return sum ;
}
console.log(sumMatrix([[1,2,3],[4,5,6]]));
//   === end==== */


