// https://tc39.github.io/ecma262/#sec-array.prototype.includes
if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, 'includes', {
      value: function(searchElement, fromIndex) {
  
        if (this == null) {
          throw new TypeError('"this" est nul ou non défini');
        }
  
        // 1. Soit o égal à ? Object(cette valeur).
        var o = Object(this);
  
        // 2. Soit len égal à ? Length(? Get(o, "length")).
        var len = o.length >>> 0;
  
        // 3. Si len = 0, renvoyer "false".
        if (len === 0) {
          return false;
        }
  
        // 4. Soit n = ? ToInteger(fromIndex).
        // Pour la cohérence du code, on gardera le nom anglais "fromIndex" pour la variable auparavant appelée "indiceDépart"
        //    (Si fromIndex n'est pas défini, cette étape produit la valeur 0.)
        var n = fromIndex | 0;
  
        // 5. Si n ≥ 0,
        //  a. Alors k = n.
        // 6. Sinon, si n < 0,
        //  a. Alors k = len + n.
        //  b. Si k < 0, alors k = 0.
        var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
  
        function sameValueZero(x, y) {
          return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
        }
  
        // 7. Répéter tant que k < len
        while (k < len) {
          // a. Soit elementK le résultat de ? Get(O, ! ToString(k)).
          // b. Si SameValueZero(searchElement, elementK) est vrai, renvoyer "true".
          if (sameValueZero(o[k], searchElement)) {
            return true;
          }
          // c. Augmenter la valeur de k de 1. 
          k++;
        }
  
        // 8. Renvoyer "false"
        return false;
      }
    });
  }