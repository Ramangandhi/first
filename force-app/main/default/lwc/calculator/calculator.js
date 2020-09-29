import { LightningElement,track } from 'lwc';

export default class Calculator extends LightningElement {

    firstNumber=0;
    secondNumber=0;
    @track results=0;
    handleChange(event)
    {
        if(event.target.name==='fnumber')
        {
            this.firstNumber= event.target.value;
        }
        if(event.target.name==='Snumber')
        {
            this.secondNumber= event.target.value;
        }
        this.results = parseInt(this.firstNumber)+parseInt(this.secondNumber)
    }
}