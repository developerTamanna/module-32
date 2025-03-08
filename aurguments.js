function sum(a, b, c){
    const newArg =[...arguments];
    console.log(newArg)        // Spread operator দিয়ে arguments কে অ্যারে হিসেবে কনভার্ট করা হচ্ছে
}

sum(12,3,5,67,8,8,6)




// const person ={name: 'tamnaa', age:23}

// function sum(obj){
//     //   console.log(obj)
//     obj.name ='sathi'  //যেহেতু object গুলো pass by reference এ কাজ করে, তাই person অবজেক্টের name প্রপার্টি sum ফাংশনের ভিতরে পরিবর্তিত হয়ে যায়।
// }
// sum(person)
// console.log(person)


const person ={
    name:'tamanna',
    age: 43
};
function sum(obj){
      obj.name = 'lima'
}
sum(person);
console.log(person)