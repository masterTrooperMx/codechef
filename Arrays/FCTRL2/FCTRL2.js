/* We have populated the solutions for the 10 easiest problems for your support.*/
/* Click on the SUBMIT button to make a submission to this problem.*/

var arr = '';
process.stdin.on('data',function(chunk){
    arr += chunk;
});

process.stdin.on('end',function(){
   arr = arr.split('\n');
   let t = parseInt(arr[0]),i=1,j,k,num,result,carry,prod;
   while(i<=t){
   	num = parseInt(arr[i]);
   	//console.log("for num.........");
   	//console.log(num);
   	result = [1],carry=0;
	for(j=2;j<=num;j++){
	    for(k=0;k<result.length;k++){
	    	prod = result[k] * j + carry;
	    	//console.log("for prod");
	    	//console.log(prod);
		    result[k] = prod%10;
		    carry = Math.floor(prod/10);
		    //console.log("for carry");
	    	//console.log(carry);
	    }
	    while(carry>0){
	        result[k]=carry%10;
	        carry = Math.floor(carry/10);
	        k++;
	    }
	}
	//console.log("for result");
	//console.log(result);
	//console.log("for result length:"+result.length);
	let fact = '';
	for(j=result.length-1;j>=0;j--){
	   fact += result[j];
	}
	//console.log(`factorial of a num:${num} is : ${fact}`);
	console.log(fact);
   	i++;
   }
});