function iterativeLog(array){
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback){
  var myArray = [1, 2, 3, 4]
  myArray.forEach(array =>{
    callback()
  })
  return myArray
}

function doToArray(array, callback){
  array.forEach(array =>{
    callback()
  })
}
