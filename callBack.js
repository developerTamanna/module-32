// function greet(name, callback){
//     console.log('hello,' + name + "!")
//     callback();
// }

// function sayGoodby(){
//     console.log('goodbye')
// }

// greet('tamanna', sayGoodby)




// next

// function gotok(patri, name) {
//       patri(name)
// }
// const patri = function(name){
//     console.log('ok paise patri', name )
// }
// const fail = function(name){
//     console.log('sorry patri pawa jaini', name);
// }
// gotok(patri, 'sinjiya');

// gotok(fail, 'sinjiya');



// function  gothok(patri, name) {
//     patri(name)
// }
//    const patri = function(name) {
//     console.log('ok paise patri', name)
//    }
// gothok( patri, 'sathi')


// function matchMaker(bride, name){
//     bride(name);
// }

// const bride = function(name){
//     console.log('Alhamdulillah, the bride has been found:', name);
// }
// matchMaker(bride, 'lima')





function matchMaker (bride, name){
       bride(name)
}

const bride = function(name){
      console.log('Alhamdulillah the bride has been found', name)   
}

const fail = function(name){
      console.log('sorry the bride has been not found', name)   
}

matchMaker(fail, 'ruba')