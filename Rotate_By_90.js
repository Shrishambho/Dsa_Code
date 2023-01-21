// Input                    
// 2           
// 4
// 1 2 3 4
// 5 6 7 8
// 1 2 3 4
// 5 6 7 8
// 3
// 1 2 3
// 4 5 6
// 7 8 9

// output
// 5 1 5 1 
// 6 2 6 2 
// 7 3 7 3 
// 8 4 8 4 
// 7 4 1 
// 8 5 2 
// 9 6 3 

matrix=[[1,2,3,4],[5,6,7,8],[1,2,3,4],[5,6,7,8]];
let N=4;
rotateBy90Clockwise(N, matrix)
function rotateBy90Clockwise(N, matrix){
    for(let i=0;i<=N-1;i++)
    {   let bag="";
        for(let j=(N-1);j>=0;j--)
        {
            bag+=matrix[j][i]+" "
        }
        console.log(bag)
    }
  
}