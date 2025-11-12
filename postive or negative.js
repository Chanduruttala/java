let numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
for(let i=1;i<numbers.length;i++){
    if(i>0){
        console.log(i+"positive number");
    }else if(i<0){
        console.log(i+"negative number");
    }else{
        console.log("zero")
    }
}