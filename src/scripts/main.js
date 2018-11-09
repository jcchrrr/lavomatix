import getContent from './api/content'
import slider from './components/slider'

const main = {
  init: function() {
    console.log('init de l\'app')

    getContent().then((val) => {
      console.log(val)
      this.myFunction()
    })
  },
  myFunction: function() {
    slider.init()
  }
}

export default main;