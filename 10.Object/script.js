// let arr = Object.entries(obj)
// let obj2 = Object.create(null)
// obj2.status = true

// console.log(obj2)

// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.fromEntries(arr))

// let obj3 = {
// 	test: "test"
// }

// let obj4 = Object.assign(obj, obj2, obj3)

// console.log(obj4)
// console.log("age" in obj)
// console.log(key, typeof key)
// console.log(typeof key)

let obj = {
	name: "Alex",
	age: 34,
}

let obj2 = {...obj}

obj2.name = "John"

console.log(obj)
console.log(obj2)


// for in
// let obj2 = {}

// for(let key in obj){
// 	obj2[key] = obj[key]
// 	// obj2["name"] = obj["name"]
// }
//Object.assign
// let obj2 = Object.assign({}, obj)

// let arr = [2, 3, 4, 5, 6]

// for(let value of arr){
// 	console.log(value)
// }

// for(let a in arr){
// 	console.log(arr[key])
// }

let des = { name: "Alex", surname: "Smith", age: 34, }

let { name: firstname, surname, age } = des

console.log(firstname)

let brands = ["adidas", "nike", "puma", "apple"]

let [ brand2, brand1, brand3, brand4 ] = brands

console.log(brand1)




function gooseFilter (birds) {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let result = []
//let birds = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
  birds.forEach((item) => {
    if(!geese.includes("African")){
      result.push(item)
    }
  })
  return result
};
