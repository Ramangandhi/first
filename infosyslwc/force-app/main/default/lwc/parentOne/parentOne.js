import { LightningElement, track } from 'lwc';

export default class ParentOne extends LightningElement {
    @track value;

checkboxSelectHandler()
{

const childComponent = this.template.querySelector('c-child-One');
const returnMessage = childComponent.selectCheckbox(this.value);
console.log('Returned Message :', returnMessage);
}
onInoutChange(event)
{

    this.value=event.target.value;
}

}