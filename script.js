const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let res = []; 
	let sum = 0;
	let temp = []
	for(let i=0;i<arr.length;i++)
		{   
			
			if(sum+arr[i]>n)
			{
				sum =0;
				i=i-1;
				res.push(temp);
				temp =[];
				continue;
			}
			sum+=arr[i];
			temp.push(arr[i]);
			
			
		}
	if(temp.length!==0)res.push(temp);
	return res;
};

const n = prompt("Enter n: "); 
alert(JSON.stringify(divide(arr, n)));
