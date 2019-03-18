import main from "./scripts/main.js"

import "@babel/polyfill";

// Polyfills
import './scripts/polyfills/forEach';
import './scripts/polyfills/includes';
import './scripts/polyfills/customEvent';
import './scripts/polyfills/scrollingElement';
import './scripts/polyfills/prepend';
import './scripts/polyfills/closest';

// Function to make IE9+ support forEach:
(function () {
    if (typeof NodeList.prototype.forEach === "function")
        return false;
    else
        NodeList.prototype.forEach = Array.prototype.forEach;
})();

// Create Element.remove() function if not exist
if (!('remove' in Element.prototype)) {
  Element.prototype.remove = function() {
      if (this.parentNode) {
          this.parentNode.removeChild(this);
      }
  };
}

main.init()



