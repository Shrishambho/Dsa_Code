// Description

// There is a pasta man who likes to eat a single noodle of spaghetti of some length everday.

// He currently has n noodles of some lenght. He has made a eating schedule for m days, where on the ith day ( 1 <= i <= m ) he eats a noodle of lenght len[i] if it is available, if it is not available he gets Angry but if he completes his m day schedule he is happy.

// Find out if he will be happy or angry.

// Input
// 2
// 3 2
// 1 1 3
// 3 1
// 1 1
// 10
// 1

// Output
// HAPPY
// ANGRY

// Hint
// In the first test case he can eat the 3-rd noodle on the 1-st day and the 1-st noodle on the 2-nd day, so his meal plan is feasible.

// In the second test case a noodle of length exactly 1 is needed which is not available hence he gets ANGRY.
n=3;
k=2;
arr=[1,1,3];
arr1=[3,1];


take(n,k,arr,arr1)
function take(n,k,arr,arr1){
    let obj={};
    for(let j=0;j<=n-1;j++)
    {
        if(obj[arr[j]]==undefined)
        {
            obj[arr[j]]=1;
        }
        else
        {
             obj[arr[j]]++;
        }
    }
    
   let count=0;
   for(let i=0;i<=k-1;i++)
   {
       if(obj[arr1[i]]>0)
       {
           obj[arr1[i]]--
       }
       else
       {
           count++;
           break;
       }
   }
   
    if(count==0)
    {
        console.log("HAPPY")
    }
    else
    {
        console.log("ANGRY")
    }
    
}