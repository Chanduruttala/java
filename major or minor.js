//major or minor.js
let person=[
    {
        name:"jagadeesh",
        age:22,
    },
    {
        name:"naveen",
        age:17,
    },
    {
        name:"chandu",
        age:21,
    }
]
console.log(person[0].name,person[1].name,person[2].name);
if(person[0].age>18){
    console.log(person[0].age+"is a major");
}if(person[1].age>18){
    console.log(person[1].age+"is a minor");
}else{
    console.log(person[2].age+"is a major");
}
