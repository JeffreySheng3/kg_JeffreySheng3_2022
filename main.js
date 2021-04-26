var myArgs = process.argv.slice(2)

function main(){
	var nums = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
	for(i = 0; i < myArgs.length; i++){
		var str = myArgs[i].toString();
		for(j = 0; j < str.length; j++){
			process.stdout.write(nums[Number(str[j])]);
			// console.log(nums[Number(str[j])]);
		}
		if(i != myArgs.length-1){
			process.stdout.write(",");
			// console.log(",");
		}
	}
}
