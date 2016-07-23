import {JsonRoutes} from 'meteor/simple:json-routes'
import bodyParser from 'body-parser'
import widgetDb from '../both/db.widgets'
import Renderer from './Renderer'
import ComponentModel from '../both/db.components'
Picker.middleware(bodyParser.json());
Picker.middleware( bodyParser.urlencoded( { extended: false } ) );

let GetRoutes = Picker.filter(function( request, response ) {
  return request.method == "GET";
});

let PostRoute = Picker.filter(function( request, response ) {
  return request.method == "POST";
});

GetRoutes.route('/get/widget/:apikey',function(params,req,response){

  let widgetData=widgetDb.findOne({_id:id})


  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader('content-type', 'text/javascript');

  if(!widgetData){
    response.statusCode=200
    response.end(` alert("Widget Not Found")`)
  }

  const components=new ComponentModel().getComponentOfWidget(widgetData.elements)
  let styles=new Renderer().renderAllAnnimation(components)

  response.write(`window.animationStyles= ${styles.css}`);
  response.write(`window.widgetDom= ${widgetData.dom}`);

  let widgetScript=new Renderer()._render({filename:"widgetScript",extension:"js",folder:"js"})

  response.end(widgetScript)

});

