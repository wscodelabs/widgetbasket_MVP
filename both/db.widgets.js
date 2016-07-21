import ComponentModel from './db.components'

let widgetDb = new Mongo.Collection("widget")

Meteor.methods({
  insertWidget:(widget, compoenet)=>{
    // insert Components
    new ComponentModel().insertMany(compoenet)

    return widgetDb.insert(widget)
  },
  getWidget:() =>{
    let parsedWidget=[]
    let widgetData= widgetDb.find({}).fetch()
    _.each(widgetData,(widget)=>{
      parsedWidget.push(
        {widget:widget, elements:new ComponentModel().getComponentOfWidget(widget.elements)}
      )
    })
    console.log("widget,", widgetData)
    return parsedWidget
  }
});
