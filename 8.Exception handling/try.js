// let a = 10;
//     let b = 2;
    
//     try {
//        console.log(a/b)
// }catch(e){
//     if (e.name !='Infinity'){
// console.log('на ноль делить нельзя')
// }else{
    
// }

// }

// try {
//     let a=0;
//     let b =3/a;
//     console.log(b)
// }catch(e){
//     if (b==Infinity)
//     throw new Error('делить на ноль нельзя')
// }


let a = 10;
let b = 2;
let result = a/b;

try  {
    console.log(result)
    
} catch(e) {
console.log(e.name);
    }
