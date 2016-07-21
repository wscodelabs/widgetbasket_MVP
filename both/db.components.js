let componentDb = new Mongo.Collection("components")


 class ComponentModel {
  constructor(){

  }

  validate(){
    return true
  }

  insert(component){
    return componentDb.insert(component)
  }
}

export default ComponentModel