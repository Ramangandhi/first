import { LightningElement,track,wire } from 'lwc';
import getAccount from '@salesforce/apex/AccountController.getAccount';
export default class Lightningtable extends LightningElement {
@track data;
@track columns = [
    { label: 'Label', fieldName: 'Name', type: 'text'},
    { label: 'Phone', fieldName: 'Phone', type: 'phone'},
    { label: 'Industry', fieldName: 'Industry', type: 'text'},
];
@wire (getAccount) accountrecords({error,data})
{
    if(data)
    {
        this.data = data;
    }
    else if (error)
    {

        this.data = undefined;
    }
}


}