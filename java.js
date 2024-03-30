/*const x = 1
let y =5

console.log(x, y)
y+=10
console.log(x, y)
y = 'sometext'
console.log(x,y)
*/


/*------------ejemplo1----------------
const t = [1,-1,3]
t.push(5)

console.log(t.length)
console.log(t[1])
t.forEach(value => {
    console.log(value)
})
*/


/*------------ejemplo2----------------
const t =[1,-1,3]
const t2 = t.concat(5)
console.log(t)
console.log(t2)
*/


/*------------ejemplo3----------------
const t = [1,2,3]
const m1 = t.map(value => value *2)
console.log(m1)
*/


/*------------ejemplo4----------------
const t = [1,2,3]
const m2 = t.map(value=>'<li>'+value+'</li>')
console.log(m2)
*/


/*------------ejemplo5----------------
const t =[1,2,3,4,5]
const [first,second,...rest] = t
console.log(first,second)
console.log(rest)
*/

/*------------objects----------------
const object1 ={
    name: 'Arto Hellas',
    age:35,
    education:'PhD'
}
const object2 ={
    name: 'Full Stack web application development',
    level: 'intermediate studies',
    size:5
}
const object3={
    name:{
        first:'Dan',
        last:'Abramov'
    },
    grades:[2,3,5,3],
    department: 'Stanford University'
}
console.log(object1.name)
const filedName = 'age'
console.log(object1[filedName])
object1.address = 'Helsinki'
object1['secret number'] =12341
console.log(object1)
*/



/*------------funciones----------------
const sum = (p1,p2)=>{
    console.log(p1)
    console.log(p2)
    return p1+p2
}
const result = sum(1,5)
console.log(result)

const square = p => {
    console.log(p)
    return p * p
  }

console.log(square(2))
*/
/* funciones2
const t = [1, 2, 3]
const tSquared = t.map(p => p * p)

function product(a, b) {
    return a * b
  }
  
  const result = product(2, 6)
  console.log(result)

const average = function(a, b) {
  return (a + b) / 2
}

const result = average(2, 5)


  */