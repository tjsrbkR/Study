// let user = {
//     name: "John",
//     surname: "Smith",
//     age:"24",
//     hobby:"soccer",
//     area:"seoul"
//   };
//   for(let i in user){
//       // console.log(i);
//       console.log(user[i])
//   }
// console.log(user); 
// let number = [1, 2, 3, 4, 5];

// number.forEach(function(x) {
//     console.log(x * 2);
// });

function introduce(lastname,firstname,callback){
  let fullname = lastname + firstname ; 
  callback(fullname);
}
function hello(name){
    console.log("안녕하세요"+name + "입니다. " );
}
function bye(name){
  console.log("잘가" + name); 
}
introduce("홍","길동",hello);
introduce("홍","길동",bye);