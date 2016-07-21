let utils = {}

utils.ObjectToArray=function(obj){
  let arr= []
  for( var key in obj){
    if(obj.hasOwnProperty(key)){
      arr.push(obj[key])
    }
  }
  return arr
}

utils.arrayToObject=function(array, key){
  let obj={}
  _.each(array,(data)=>{
    obj[data[key]]=data
  })
  return obj
}

export default utils