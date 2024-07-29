function fibonacci(num) {
// your code here
	let arr = new Array(num+1).fill(0);
	arr[1] = 1;
	arr[2] = 1;
	for(let i = 3;i<=num+1;i++)
		{
			arr[i] = arr[i-1]+arr[i-2];
		}
	return arr[num];
	
}

module.exports = fibonacci;
