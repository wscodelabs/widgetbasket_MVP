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

  insert(component){

    return componentDb.insert(component)
  }
}

export default ComponentModel