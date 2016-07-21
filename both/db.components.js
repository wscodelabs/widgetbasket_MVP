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
    if(components && components.length)
      return utils.arrayToObject(components)
  }

  insert(component){

    return componentDb.insert(component)
  }
}

export default ComponentModel
