class Calculator{
    constructor(){
        this.value = "";
        this.lastValue = "";
        this.isfloat = false;
        this.screen = document.getElementById('screen__input');
    }
    buttonValue(dataValue){
        switch(dataValue){
            case "." :
                if(this.isfloat===true){
                    break;
                }else{
                    this.value += dataValue;
                    this.isfloat=true;
                }
                break;
            case "*": 
                if(this.value.slice(-1)=="*"){
                    break;
                }
            default : 
                this.value += dataValue;
                //console.log(this.value);
                break;
        }
        //console.log(dataValue);
        //console.log(this.value);
        this.screen.value = this.value;
        //console.log(this.screen);
    }
    total(){
        let total = eval(this.value);
        this.value = total;
        this.screen.value = total;
    }
    reset(){
        this.value = "";
        //console.log(this.value);
        this.lastValue = "";
        //console.log(this.lastValue);
        this.screen.value = "";
        //console.log(this.screen.value);
        this.isfloat = false;
    }
}

let calc = new Calculator;

/***
* Set onclick event on numbers button to retrieve their value when the event occur
***/
function setOnclickEvent() {
    /***
     * Setting the onclick on numbers button
     **/
    for(let i=0; i<=9; i++){
        let element = document.getElementById(`number-${i}`);
        let value = element.getAttribute(`data-value`);
        element.addEventListener("click", function(ev){
            //console.log(`value of the clicked button is : ${value}`);
            calc.buttonValue(value);
        });
    }
    /***
     * Setting the onclick on clear button
     ***/
    let resetBtn = document.getElementById(`operators-reset`);
    resetBtn.addEventListener("click", function(ev){
        calc.reset();
    });
    let operators = document.getElementsByClassName("operators-item");
    for(operator of operators){
        let value = operator.getAttribute(`data-value`);
        operator.addEventListener("click", function(ev){
            calc.buttonValue(value);
        })
    }
    let totalBtn = document.getElementById('equal');
    totalBtn.addEventListener("click", function(ev){
        calc.total();
    })
}

setOnclickEvent();