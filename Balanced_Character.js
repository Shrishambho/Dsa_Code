// Balanced Characters 
// Description

// Given a string consisting of lowercase and uppercase characters both and you have to consider lowercase as opening character and its corresponding uppercase as closing character. Now you have to find whether the given string is balanced or not.

// Given string is balanced when

// 1) lowercasecharacters must be closed by the uppercase of same characters.

// 2) lowercase characters must be closed in the correct order.

// Input
// 5
// 2
// aA
// 6
// aAbBcC
// 2
// cD
// 4
// caCA
// 4
// daAD

// Output
// True
// True
// False
// False
// True

// Hint
// For the first test case, small "a" is closed by big "A" therefore string is balanced.

// For the second test case, we can divide string into three parts "aA", "bB", and "cC" and as we can see separately all three are balanced therefore whole string is balanced.

// For third test case, "c" can't be balanced by "D" therefore string is unbalanced.

// For the fourth test case, the ordering of open and closed characters is not done properly therefore it is unbalanced string.
n=6
arr="aAbBcC";

take(n,arr)
function take(n,arr){
    let stk=[];
    for(let i=0;i<=n-1;i++){
        if(arr[i]==stk[stk.length-1])
        {
            stk.pop()
        }
        else
        {
           stk.push(arr[i].toUpperCase())
        }
    }
       
   
   
   if(stk.length==0){
       console.log("True")
   }
   else
   {
        console.log("False")
   }
}