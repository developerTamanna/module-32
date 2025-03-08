
// globly dclr
// let counter =0;
// function sum(){
//     counter = counter+1;
//     console.log(counter)
// }
// sum()
// sum()
// sum()



// next

// local

// function sum(){
//     let counter =0;

//     return function(){
//         counter++
//         console.log(counter)
//     }

// }

// const result =sum();
// result()
// result()
// result()



function sum(){
    let counter = 0;
    return function(){
        counter ++;
        console.log(counter)
    }
}

const result = sum();
result()
result()