let marks=[
    {Name:"naveen",marks:35},
    {Name:"jagadeesh",marks:85},
    {Name:"chandu",marks:65},
    {Name:"hari",marks:45},
    {Name:"kiran",marks:73}
]
for(let i=0;i<marks.length;i++){
    let score=marks[i];
    console.log("name:",score.Name);
    console.log("marks:",score.marks);
    if(score.marks>75){
        console.log("Good");
    }else if(score.marks>50){
        console.log("Average");
    }else{
        console.log("Fail")
    }
}