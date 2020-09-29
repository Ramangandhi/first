import { LightningElement } from 'lwc';
import Account_Name from '@salesforce/schema/Account.Name';
import Account_Type from '@salesforce/schema/Account.Type';
import Account_Industry from '@salesforce/schema/Account.Industry';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';



export default class Accountcreatesample extends LightningElement {
objectApiName = 'Account';
fieldList = [Account_Name,Account_Type,Account_Industry];

  showNotification() {
    const evt = new ShowToastEvent({
        title : 'Account Create',
        message : 'New Account and its record ID is showing',
        variant : 'success',
        mode : 'dismissable'
    });
    this.dispatchEvent(evt);
}
}