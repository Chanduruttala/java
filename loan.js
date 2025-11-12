let loans=[
    {
        Name:"Harish",
        income:80000,
        creditscore:750
    },
    {
        Name:"Naveen",
        income:25000,
        creditscore:450
    },
    {
        Name:"Sai",
        income:35000,
        creditscore:500
    },
    {
        Name:"Praveen",
        income:60000,
        creditscore:650
    }
]
for(let i=0;i<loans.length;i++){
    let loan=loans[i];
    console.log("name:",loan.Name);
    console.log("income:",loan.income);
    console.log("creditscore:",loan.creditscore)
    if(loan.creditscore>500){
        console.log("loanapproved")
    }else{
        console.log("loanrejected")
    }
}
