// output=1 2 4 5 7 8 9 10

arr=[1,2,4,3,5,7,8,6,9,10];
n=10;
take(n,arr)

function take(n,arr){
    let arr1=[];
    arr1.push(arr[0]);
    for(let i=1;i<=n-1;i++)
    {
        if(arr[i]>=arr1[arr1.length-1])
        {
            arr1.push(arr[i])
        }
        else if(arr1[arr1.length-1]==arr[i])
        {
            continue;
        }
    }
    let bag="";
    for(let i=0;i<=arr1.length-1;i++)
    {
        bag+=arr1[i]+" "
    }
    console.log(bag)
}