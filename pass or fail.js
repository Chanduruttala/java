//pass,fail.js
let students=[
    {
        name:"naveen",
        marks:88,
    },
    {
        name:"jagadeesh",
        marks:32,
    }
]
for(let i=0;i<students.length;i++){
    let stu =students[i];
    console.log("studentname:",stu.name);
    console.log("studentmarks:",stu.marks);
    if(stu.marks>=35){
    console.log("pass")
    }
    else{
        console.log("fail")
    }
}