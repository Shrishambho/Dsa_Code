// Next Greater Element Ended
// Description

// Given an array of N elements, find the next greater element for each element in the array, print -1 if it does not exits. Refer to the sample I/O for better understanding

// Input
// 1
// 4
// 1 3 2 4

// Output
// 3 4 4 -1
arr=[1,3,2,4];
n=4;
take(n,arr)
function take(n,arr){
    let stk=[];
    let ans=[];
    for(let i=n-1;i>=0;i--){
        while(stk.length!=0&&arr[i]>=stk[stk.length-1])
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
        stk.push(arr[i])
    }
    let bag="";
   for(let i=n-1;i>=0;i--)
   {
       bag+=ans[i]+" ";
   }
   console.log(bag)
}
