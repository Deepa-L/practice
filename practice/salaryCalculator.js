var name=process.argv[2];
var age=parseInt(process.argv[3]);
var basicsalary=parseFloat(process.argv[4]);

const hra=(50*basicsalary)/100;
const specailAllowance=(30*basicsalary)/100;
const pf=(12*basicsalary)/100;

let grossSalary=(hra+specailAllowance+basicsalary)-pf
let annualgrossSalary=12*grossSalary
console.log(`the annual gross income of ${name} is ${annualgrossSalary}`)