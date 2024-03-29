import {SSR} from 'meteor/meteorhacks:ssr'

export default class Renderer {
  renderAllAnnimation(elements){
    let styles={css:""}
    _.each(elements,(element)=>{
      if(!element.style.animationName || element.style.animationName.toUpperCase()=="NONE") return

      styles.css+=this._render({fileName:element.style.animationName,extension:"css",folder:"animation"})
    })

    return styles
  }


  _render({fileName,extension,folder}){
    SSR.compileTemplate(fileName, Assets.getText(`${folder}/${fileName}.${extension}`));
    return SSR.render(fileName,{})
  }

}
