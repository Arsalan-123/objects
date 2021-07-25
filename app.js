// //TASK 1

// var itemArray =[
//     {
//         name:"juice",
//         price:"50",
//         quantity:"3",
//     },
//     {
//         name:"cookie",
//         price:"30",
//         quantity:"9",
//     },
//     {
//         name:"shirt",
//         price:"880",
//         quantity:"1",
//     },
//     {
//         name:"pen",
//         price:"100",
//         quantity:"2",
//     },
// ]
// var item1 = (itemArray[0].price*itemArray[0].quantity);
// var item2 = (itemArray[1].price*itemArray[1].quantity);
// var item3 = (itemArray[2].price*itemArray[2].quantity);
// var item4 = (itemArray[3].price*itemArray[3].quantity);

// var allItem =(item1+item2+item3+item4);
// console.log(item1);
// console.log(item2);
// console.log(item3);
// console.log(item4);
// console.log(allItem);


 //TASK 2
// var bioData ={
//     name:"arsalan",
//     email:"arsalanjawaid123@gmail.com",
//     password:"11111",
//     age:"30",
//     gender:"male",
//     city:"karachi",
//     country:"pakistan"
// }
// if("age" in bioData && "country" in bioData){
//     console.log("age and country found")
// }else{
//     console.log("not found")
// }



//TASK 3

// function Student(first,last,city,age){
//     this.firstName = first;
//     this.lastName = last;
//     this.city = city;
//     this.age = age; 
// }
// var bio = new Student("Amir","khan","karachi",35)
// var bio1 = new Student("Atif","aslam","multan",30)
// var bio2 = new Student("salman","khan","islamabad",40)
// var bio3 = new Student("Adnan","khan","peshawer",20)
// console.log(bio.city);
// console.log(bio1.city);
// console.log(bio2.city);
// console.log(bio3.city);

//TASK4
// function Town(name, gender, address, education, profession) {
//     this.name = name;
//     this.gender = gender;
//     this.address = address;
//     this.education = education;
//     this.profession = profession;
// }

// function myfun() {
//     var personName = document.getElementById("name").value;
//     var address = document.getElementById("address").value;
//     var education = document.getElementById("education").value;
//     var profession = document.getElementById("profession").value;

//     if ((personName.length && address.length && education.length && profession.length) == 0) {
//         console.log("Please put correct data");
//     } else {
//         var checkGender1 = document.getElementById("male");
//         var checkGender2 = document.getElementById("female");

//         if (checkGender1.checked) {
//             var a = "male";
//         } else if (checkGender2.checked) {
//             var a = "female";
//         }

//         const myfun = new Town(personName,  address, education, profession);
//         console.log(myData);
//     }
// }