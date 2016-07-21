import ComponentModel from './db.components'

let widgetDb = new Mongo.Collection("widget")

Meteor.methods({
  insertWidget:(widget, compoenet)=>{
    // insert Components
    new ComponentModel().insertMany(compoenet)

    return widgetDb.insert(widget)
  }
});
