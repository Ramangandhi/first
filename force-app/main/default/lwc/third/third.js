import { LightningElement,track } from 'lwc';

export default class third extends LightningElement {
    @track greeting;
    hanglechangegreeting(event)
    {
        this.greeting = event.target.value;
        console.log(this.greeting);
    }

}