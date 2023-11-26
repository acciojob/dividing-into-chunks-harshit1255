const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let res = [];
	let sum = 0;
	for(let i=0;i<arr.length;i++)
		{   
			for(let j=i;j<arr.length;j++)
				{sum = 0;
				 let temp = [];
					for(let k =i; k<=j;k++)
						{
							sum+=arr[k];
							temp.push(arr[k])
						}
				 if(sum <= n)
				 {  
					 res.push(temp);
				 }
				}
		}
	return res;
};

const n = prompt("Enter n: "); 
alert(JSON.stringify(divide(arr, n)));
