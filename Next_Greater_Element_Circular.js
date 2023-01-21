// Given an array of N elements, find the next greater element for each element in the array, print -1 if it does not exits.

// Also, consider this array to be a circular array, i.e. the next element to the last element is the first element.

// Refer to the sample I/O for better understanding.

// Input
// 2
// 3
// 1 2 1
// 5
// 1 2 3 4 3

// Output
// 2 -1 2
// 2 3 4 -1 4
n=3;
arr=[1,2,1]
take(n,arr)
function take(n,arr){
    let stk=[];
    let ans =[];
    for(let j=(n-1)*2;j>=0;j--)
    {
        while(stk.length!=0&&arr[j%n]>=stk[stk.length-1])
        {
            stk.pop();
        }
        if(stk.length==0)
        {
            ans.push(-1)
        }
        else
        {
            ans.push(stk[stk.length-1])
        }
        stk.push(arr[j%n])
    }
    let max="";
    let x=Math.floor(ans.length-1)/2
    for(let j=ans.length-1;j>=x;j--)
    {
        max+=ans[j]+" "
    }
    console.log(max)
}