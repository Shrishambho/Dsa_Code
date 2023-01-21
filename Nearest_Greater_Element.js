// Nearest_Greater_Element

// Description:-You are given an array A of size N. For each element, print the closest greater element, to that particular element. If there is no greater element for a particular element, print -1.

// If the two values, are equidistant from a particular value, print the value that occurs to the left of it.

// Refer the sample I/O for better understanding

// Input
// 1
// 5
// 5 4 1 3 2

// Output
// -1 5 4 4 3

arr=[5,4,1,3,2];
n=5;
take(n,arr)
function take(n,arr){
    left = leftIndex(n,arr)
   right = rightIndex(n,arr)
    
    function leftIndex(n,arr){
        let stk=[];
        let left=[];
        for(let i=0;i<=n-1;i++)
        {
            while(stk.length!=0&&arr[i]>=arr[stk[stk.length-1]])
            {
                stk.pop()
            }
            if(stk.length==0)
            {
                left.push(-1)
            }
            else
            {
                left.push(stk[stk.length-1])
            }
            stk.push(i)
        }
        return left
    }
    
    function rightIndex(n,arr)
    {
        let stk=[];
        let right=[];
        for(let i=n-1;i>=0;i--){
            while(stk.length!=0&&arr[i]>=arr[stk[stk.length-1]])
            {
                stk.pop()
            }
            if(stk.length==0)
            {
                right[i]=-1;
            }
            else
            {
                right[i]=(stk[stk.length-1])
            }
            stk.push(i)
        }
        return right
    }
    
    let ans=[];
    for(let i=0;i<=n-1;i++)
    {
        if(left[i]==-1&&right[i]==-1)
        {
            ans.push(-1)
        }
        else if(right[i]==-1)
        {
            ans.push(arr[left[i]])
        }
        else if(left[i]==-1)
        {
            ans.push(arr[right[i]])
        }
        else
        {
            l=Math.abs(i-left[i]);
            r=Math.abs(i-right[i]);
            if(l>r)
            {
                ans.push(arr[right[i]])
            }
            else
            {
                ans.push(arr[left[i]])
            }
        }
    }
    console.log(ans.join(' '))
 }