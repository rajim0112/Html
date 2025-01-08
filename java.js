// function func1(){
//     document.getElementById("welcome").innerHTML="Text is Change"
// }

// ***********************************************************************

// function addNumbers(){
//     let number1=parseInt(document.getElementById("num1").value)
//     let number2=parseInt(document.getElementById("num2").value)

//     let sum=number1+number2;
//     document.getElementById("result").innerHTML="The sum is:"+sum;
// }

// ********************************** operators ********************************

// let a = 10;
// let b = 20;
// console.log(a+b);

// let a = 10;
// let b = 20;
// b += 10;
// console.log(b);

// let a = 10;
// let b = 20;
// let temp = a;
// a = b;
// console.log(a,b)

// let a = 3;
// let b = (100*50)*a;
// console.log(b)

// let a = 10
// let str1 = "raji"
// let bool1 = true
// console.log(typeof(a))
// console.log(typeof(str1))
// console.log(typeof(bool1))

// let a = 10;
// let b = 20;
// if(a>b){
//     console.log("a is greater than b")
// }
// else{
//     console.log("b is greater than a")
// }

// for(let i=1; i<=5; i++){
//     console.log("i=",i)
// }

// let sum = 0;
// for(let i=1; i<=5; i++){
//     sum=sum+i;
// }
// console.log("sum:",sum)

// let i = 1;
// while(i<=5){
//     console.log("i:",i)
//     i++;
// }

// let i = 20;
// do{
//     console.log("hello")
// }
// while(i<=5);

// for-of-loop, for-in-loop
// const fruits = ['apple','banana','mango'];
// for(let fruit of fruits){
//     console.log(fruit)
// }

// let language = 'javascript';
// for(let char of language){
//     console.log(char)
// }

// const colors = ['red','green','orange'];
// for(let i in colors){
//     console.log(i)
// }

// for(let num = 0; num<=100; num++){
//     console.log("num=",num)
// }

// for(let num = 0; num<=100; num++){
//     if(num%2==0){
//         console.log("even num=", num)
//     }
// }

// let cities = ['delhi','pune','chennai','hyderabad']
// for(let city of cities){
//     console.log(city)
// }

// let cities = ['delhi','pune','chennai','hyderabad']
// for(let city in cities){
//     console.log(city)
// }

// let marks = [85,97,44,37,76,60]
// let sum = 0;
// for(let i=0 ; i<marks.length ; i++){
//     console.log(marks[i])
// }

// let marks = [85,97,44,37,76,60]
// let sum = 0;
// for(let val of marks){
//     console.log(val)
// }

// let str="rajeswari"
// console.log(str)

// let str="rajeswari"
// console.log(typeof str)

// let str = "hello"
// console.log(str)
// console.log(str.le)
// console.log(str.length)
// console.log(str[0])
// console.log(str[4])

// ***************** template literals ********************

// let obj = {
//     item: "pen",
//     price: 10
// }
// console.log("The cost of",obj.item,"is",obj.price)

// let obj = {
//     item: "pen",
//     price: 10
// }
// // console.log("The cost of",obj.item,"is",obj.price)
// let res = the cost of ${obj.item} is ${obj.price}
// console.log(res)

// ************************ string methods **********************

// str = "abcd"
// console.log(str.toUpperCase())

// str = "ABCD"
// console.log(str.toLowerCase())

// str = "              abcd           "
// console.log(str.trim())

// ***************************** slicing *************************

// str = "0123456789"
// console.log(str.slice(1,3))

// let str1 = "hello"
// let str2 = "raji"
// let res = str1+str2
// console.log(res)

// let str1 = "hello"
// let str2 = "raji"
// let res = str1+" "+str2
// console.log(res)

// *******************************concat******************************

// let str1 = "hello"
// let str2 = "raji"
// console.log(str1.concat(str2))

// let arr1 = [1,2,3,4,5,6]
// let arr2 = [7,8,9,10]
// console.log(arr1.concat(arr2))

// ***************************** string replacement *****************************

// str = "hello"
// console.log(str.replace("h","y"))

// ******************************* CharAt(index) ****************************

// let str = "helloraji"
// console.log(str.charAt(0))

// *********************************arrays*********************************

// let marks = [96,75,37,97,34]
// console.log(marks)

// let marks = [96,75,37,97,34]
// console.log(typeof marks)

// let marks = [96,75,37,97,34]
// console.log(...marks)

// let marks = [96,75,37,97,34]
// console.log(marks[0])
// console.log(marks[1])

// *********************************Math.max*****************************

// let marks = [96,75,37,97,34]
// console.log(Math.max(...marks))

// *********************************Math.min*****************************

// let marks = [96,75,37,97,34]
// console.log(Math.min(...marks))

// *********************************strings*********************************

// let str = "hello"
// console.log(str)
// console.log(str[0])
// console.log(str[3])

// ************************************************************************

// let marks = [85,97,44,37,76,60]
// let sum = 0;
// for(let val of marks){
//     sum = sum + val;
// }
// let avg = sum/marks.length;
// console.log('avg marks of class' ${avg})

// *******************************push*****************************

// let hero_names = ['ironman','hulk','thor']
// hero_names.push('antman')
// console.log(hero_names)

// *********************************pop*******************************

// let hero_names = ['ironman','hulk','thor','antman']
// hero_names.pop()
// console.log(hero_names)

// ********************************toString*****************************

// let hero_names = ['ironman','hulk','thor','antman']
// console.log(hero_names.toString())

// let arr1 = [1,2,3,4,5,6,7,8]
// console.log(arr1.toString())

// let arr1 = [1,2,3,4,5,6,7,8]
// console.log(typeof arr1.toString())

// *******************************function***********************************

// function functionName(){
//     console.log("Hello There!");
//     console.log("This is javascript class");
// }
// functionName();

// function functionName(msg){
//     console.log(msg)
// }
// functionName("I love JS")

// function sum(x,y){
//     console.log(x+y)
// }
// sum(2,8)

// function sum(x,y){
//     console.log("Before Function")
//     s = x+y
//     return s
//     console.log("After Function")
// }
// sum(2,3)

// function sum(x,y){
//     console.log("Before Function")
//     console.log(x)
//     s = x+y
//     return s
//     console.log("After Function")
// }
// sum(2,3)

// const sum = (x,y) => x+y;

// function countVowels(str){
//     console.log(str)
// }
// countVowels("hello")

// function countVowels(str){
//     for(const char of str){
//         console.log(char)
//     }
// }
// countVowels("hello")

// function countVowels(str){
//     let count = 0;
//     for(const char of str){
//         if(char == 'a'|| char == 'e'|| char == 'i'|| char == 'o'|| char == 'u'){
//             count +=1
//          }
//     }
//     console.log(count)
// }
// countVowels("hello")

// ******************************text*********************************