'use strict'

//Gestion de la galerie de portraits
//pour la versions Desktop

const Portraits =  {
    elements: document.querySelectorAll(".portraits--people"),
    result:'',
    lines: 0,
    numberElement: 0,
      
    init: function(){
      
        // this.numberElement = this.elements.length;
        this.numberElement = 122;
  
        this.counter(this.numberElement);
        

    },
    counter: function(value){
        let result
        if (value%4 > 0 ) {
            result = this.counter(value - 1); 
        } 
        else {
            result = value;
           
        }
    
        this.createGrid(result)
        return result;

    },
    createGrid: function(value){
        let lastLine = this.numberElement-value;
        let preLine = 0; // avant derniere ligne

        if(value > 7){
            //pour des valeurs à partir de 8
            if(lastLine === 0) {
                console.log("OK tous les items : 25%")
            }
            else if(lastLine === 1){
                lastLine = lastLine+4
                if(value > 8){
                    value = value-8
                    preLine = preLine+4
                }
                else{
                    value = value-4
                }
              
                console.log("items à 25% - derniere ligne à 20%")
            }
            else if(lastLine === 2){
                lastLine = lastLine+3
                if(value > 8){
                    value = value-(4+4)
                    preLine = preLine+5
                }
                else{
                    value = value-3
                }
              
            }
            else if(lastLine === 3){
                lastLine = lastLine+3
                if(value > 8){
                    preLine = preLine+5
                    value = value-(4+4)
                }  
                else{
                    value = value-3
                }
               
            }

            console.log("valStart: "+value+" | preligne: "+ preLine + " | rest :"+ lastLine );
            if( value+preLine+lastLine === this.numberElement ){
                console.log("OK")
            }
            else{ console.log("ALLLERT", "style:")}
                
            

           
        }
        else{
            console.log("width of Items: "+ 100/this.numberElement + "%")
        }

    }

}


export default Portraits;
