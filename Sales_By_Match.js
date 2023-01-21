// Description:-There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
// Input=9
// 10 20 20 10 10 30 50 10 20;

// output=3
arr=[10,20,20,10,10,30,50,10,20];
n=9
take(n,arr)
function take(n,arr){
    arr.sort((a,b)=>(a-b))
    let i=0;
    let count=0;
    while(i<=n-1)
    {
        if(arr[i]==arr[i+1])
        {
            count++;
            i+=2;
        }
        else
        {
            i++;
        }
    }
    console.log(count)
}
