//  Suppose you are building a payment -he-kout page and must display the final pri-e after the dis-ount+
// Create a simple dis-ount -al-ulator that takes two values from the variables - the total -ost and the
// dis-ount per-entage - and prints the dis-ounted value+

let totalValue = 2000
let discountPercentage = 20
 
let finalPrice = totalValue - (discountPercentage *totalValue /100) 
// console.log(finalPrice)

// You are building a simple login system+ Implement the login feature that has two variables: username and
// password+ You should -he-k if the username is "admin" and the password is "12345"+ If both -onditions are
// true, print "Login su--essful"W otherwise, print "Invalid -redentials"+


let username = "admin"
let password = 12345
if(username=== "admin" && password === 12345){
    // console.log("login Successfully")
}else{
//   console.log("login Faild")
}
// You are developing a booking appli-ation for a -inema+ The ti-ket pri-e depends on the type of the
// viewer("child", "adult", or "senior")+ Write a program whi-h -al-ulates the pri-e a--ordingly and prints the total
// pri-e to be paid+ Let’s assume the ti-ket pri-e for a child is Rs+ 100, adult ti-ket pri-e is Rs+ 150 and ti-ket pri-e
// for a senior is Rs+ 120+



let ticketOfChild = 100
let ticketOfAdult = 150
let ticketOfSenior = 120

function totalTicketPrice(numberOfAdult, numberOfChild, numberOfSenior){

    let totalPrice = (numberOfAdult*ticketOfAdult) + (numberOfChild*ticketOfChild ) +  (numberOfSenior*ticketOfSenior)
    //  console.log(totalPrice)
  
}
totalTicketPrice(1,2,1)

// You are developin2 a form validation system. Write a pro2ram that takes user information(such as name,
//     email, a2e) and uses the typeof operator to check the data type of each input. Print appropriate messa2es
//     like "Name should be a strin2," "Email should be a strin2," or "02e should be a number." if any field is not
//     proper.
let name =  "mithun";
let email = "mithun.s@pw.live";
let age = 21
// console.log(`Name should be a ${typeof(name)}`)
// console.log(`email should be a ${typeof(email)}`)
// console.log(`age should be a ${typeof(age)}`)

let i = 1
while(i <= 10){
    // console.log(i++)
}


const arr = [1,2,999,"mithun", 56,12345, "PW"]
// console.log(`Found the first string ${arr[3]}`)

let array = [1,2,3,-9,-5,-4,55,100]
console.log(getPositives(array))