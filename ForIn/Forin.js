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
// 콜백 함수
// function introduce(lastname,firstname,callback){
//   let fullname = lastname + firstname ; 
//   callback(fullname);
// }
// function hello(name){
//     console.log("안녕하세요"+name + "입니다. " );
// }
// function bye(name){
//   console.log("잘가" + name); 
// }
// introduce("홍","길동",hello);
// introduce("홍","길동",bye);

//function introduce(dog,dof, callback){
//  let wellsikogi = dog ;
//  let shefard = dof; 
//  callback(wellsikogi,shefard); 
//}
//function test(a,b){
//  console.log(" 나는 " + a + "랑 " + b + "를 키우고 있어" ); 
//}////

//introduce("웰시코기","셰퍼드",test);
// "\""

// let myArray = ['Manchester', 'London', 'Liverpool', 'Birmingham', 'Leeds', 'Carlisle'];
// myArray.push("Cardiff");
// myArray.push("151243");
// myArray.splice(4,1, 'row');
// myArray.sort();
// console.log(myArray);
// for(let i = 0; i < 5; i++)  {
//     for(let j = 0; j < 5; j++)  {
//       document.write('*');
//     }
//     document.write('<br>');
//   }


//   for(let i=0; i <5; i++){
//       for(let j =0; j<=i;j++){
//         document.write('*');
//     }
//     document.write('<br>');
//   }

//   for(let i=0; i <5; i++){
//     for(let j =5; j>i;j--){
//       document.write('*');
//   }
//   document.write('<br>');
// }

// for(let i=0; i <10; i++){
//     document.write( "*".repeat(i)+"<br>");
// }
// for(let i=0; i <=10; i++){
//     console.log(" ".repeat(10-i) + "*".repeat(i));
// }
// for(var i = 1; i <=5; i++){
//     console.log(" ".repeat(5 - i) + "*".repeat(i)); 
//  }

//  for(var i = 5; i >=0; i--){
//     console.log(" ".repeat(5 - i) + "*".repeat(i)); 
//  }
//  for(var i = 5; i >=0; i--){
//     console.log(  "*".repeat(i)); 
//  }
 
//  for(var i = 0; i <=5; i++){
//     console.log(  "*".repeat(i)); 
//  }