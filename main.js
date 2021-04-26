var myArgs = process.argv.slice(2);
var nums = [
   "Zero",
   "One",
   "Two",
   "Three",
   "Four",
   "Five",
   "Six",
   "Seven",
   "Eight",
   "Nine",
];

function main() {
   for (i = 0; i < myArgs.length; i++) {
      var str = myArgs[i].toString();
      for (j = 0; j < str.length; j++) {
         process.stdout.write(nums[Number(str[j])]);
      }
      if (i != myArgs.length - 1) {
         process.stdout.write(",");
      }
   }
}

main();
