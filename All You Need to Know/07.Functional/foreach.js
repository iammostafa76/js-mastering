var arr = [1, 2, 3, 4, 5, 6, 7, 8]

var sum = 0;

arr.forEach(function(value, index, arr){
  //  console.log(value, index, arr)
  sum += value
})

console.log(sum)


function forEach(arr, cb){
    for(var i = 0; i < arr.length; i ++){
        cb(arr[i])
    }
}
forEach(arr, function(value){
    console.log(value)
})

arr.forEach(function(value, index, arr){
    arr[index] = value + 5
})

console.log(arr)