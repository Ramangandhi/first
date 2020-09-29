import { LightningElement, track } from 'lwc';

export default class Bmicalculator extends LightningElement {
    cardTitle = 'BMI Calculator';

    weight;
    height;
    @track bmi;

    onWeightChange(event)
    {
        this.weight = parseFloat(event.target.value);
    }
    
    onHeightChange(event)
    {
        this.height = parseFloat(event.target.value);
    }

    bmicalculator()
    {
        this.bmi = this.weight/(this.height*this.height);
    }
}