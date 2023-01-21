// Description:-Given two integer arrays pushed and popped each with distinct values, print "YES" if this could have been the result of a sequence of push and pop operations on an initially empty stack, or "NO" otherwise.

// Input
// 2
// 5
// 1 2 3 4 5
// 4 5 3 2 1
// 5
// 1 2 3 4 5
// 4 3 5 1 2

// Output
// YES
// NO
let arr=[1,2,3,4,5]
let arr1=[4,5,3,2,1]
let n=5;
take(n,arr,arr1)

function take(n,arr,arr1){
    let stk=[];
    let i=0;
    for(let j=0;j<=n-1;j++)
    {
        if(stk[stk.length-1]===arr1[i])
        {
            stk.pop();
            j--;
            i++;
        }
        else
        {
            stk.push(arr[j])
        }
    }
    
    for(var j=n-1;j>=0;j--)
    {
        if(stk[j]===arr1[i])
        {
            stk.pop();
            i++;
        }
    }
    if(stk.length==0)
    {
        console.log("YES")
    }
    else if(stk.length!=0)
    {
        console.log("NO")
    }
}