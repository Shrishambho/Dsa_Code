// Description

// Minions are of 26 types, from 'a' to 'z'. If two Minions of same type finds themselves besides each other, they will kill each other.

// You are given a string of Minions. You need to find the final surviving string of Minions, after all the killings. i.e Further No Minion will kill other Minion.

// If no Minion survived a after all the fighting, print "-1".

// Input
// 5
// aabbc
// 12
// abbabaadcbbc
// 2
// aa

// Output
// c
// bd
// -1
let n=12;
str="abbabaadcbbc"
take(n,str)
function take(n,str){
    let stk=[];
    let ans=[];
    for(let i=0;i<=n-1;i++)
    {
        if(stk.length==0)
        {
            stk.push(str[i])
        }
        else if(str[i]==stk[stk.length-1])
        {
            stk.pop()
        }
        else{
            stk.push(str[i])
        }
    }
    if(stk.length==0)
    {
        console.log("-1")
    }
    else
    {
        let car=""
        stk.forEach((item)=>{
            car+=item;
        })
        console.log(car)
    }
}