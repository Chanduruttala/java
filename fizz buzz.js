//fizz,buzz.js
for(let i=1;i<=15;i++)
    {
    if(i%3==0){
        console.log(i+"FIZZ");
    }else if(i%5==0){
        console.log(i+"BUZZ");
    }if(i%3==0&&i%5==0){
        console.log(i+"FIZZBUZZ");
    }else{
        console.log(i+"number")
    }
}
