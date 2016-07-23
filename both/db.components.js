import utils from './utils/utils'
let componentDb = new Mongo.Collection("components")

 class ComponentModel {
  constructor(){

  }

  validate(){
    return true
  }

  insertMany(component){
    let ArrayOfComponents= utils.objectToArray(component)
    if(!ArrayOfComponents || ArrayOfComponents.length <1 )
      throw new Meteor.Error("empty-component", "Need At least One Component To insert")

    _.each(ArrayOfComponents,(component)=> this.insert(component))

  }

  getComponentOfWidget(componentRandomKey){

    let components= componentDb.find({randomKey:{$in:componentRandomKey}}).fetch()
    if(components && components.length){
      let x= utils.arrayToObject(components,"randomKey")
      console.log(x)
      return x
    }

  }

  insert(component){
    if(component._id)
      return componentDb.update({_id: component._id},{$set:{style:component.style, value: component.value}})
    else
      return componentDb.insert(component)
  }
  update(component){

  }
}

export default ComponentModel
