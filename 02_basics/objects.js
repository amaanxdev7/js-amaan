const tinderUser= new Object()
tinderUser.id = "789"
tinderUser.name = "Amaan"
// console.log(tinderUser);

//  const ragularUser = {
//     email : "amaan@gmail.com",
//     fullname: {
//         userfullname:{
//             firstname: "amaan",
//             lastname:"ahmad"
//         }
//     }
// }
// console.log(regularUser.fullname.userfullname);

const obj1 = {1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}
// const obj3 =Object.assign(obj1,obj2);
const obj3={...obj1,...obj2}
console.log(obj3);

console.log(Object.keys(tinderUser));

