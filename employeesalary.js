let employeedetails=[
    {
        id:1,
        name:"hari",
        salary:25000
    },
    {
        id:2,
        name:"naveen",
        salary:60000
    },
    {
        id:3,
        name:"venkat",
        salary:57000
    },
    {
        id:4,
        name:"jagadeesh",
        salary:62000
    },
    {
        id:5,
        name:"rahul",
        salary:32000
    }
]
for(let i=0;i<employeedetails.length;i++){
    let employee=employeedetails[i];
    console.log("employee id:",employee.id);
    console.log("name:",employee.name);
    console.log("salary:",employee.salary)
    if(employee.salary>=50000){
        console.log("more than")
    }else{
        console.log("less than")
    }
}






  


