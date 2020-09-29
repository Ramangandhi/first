import { LightningElement, track } from 'lwc';

export default class Second extends LightningElement {
    @track greetings;
    hanglechangegreeting(event)
    {
        this.greetings = event.target.value;
    }

}