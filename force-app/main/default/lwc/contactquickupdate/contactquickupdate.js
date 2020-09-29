import { LightningElement,api } from 'lwc';
import Contact_Phone from '@salesforce/schema/Contact.Phone';
import Contact_Email from '@salesforce/schema/Contact.Email';
import Contact_LastName from '@salesforce/schema/Contact.LastName';
import Contact_FirstName from '@salesforce/schema/Contact.FirstName';
import Contact_Account from '@salesforce/schema/Contact.AccountId';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Contactquickupdate extends LightningElement {
    @api recordId;
    @api objectApiName;
    fieldList= [Contact_FirstName,Contact_LastName,Contact_Phone,Contact_Email];
    handleContactUpdate(event)
    {
        const evt = new ShowToastEvent({
          title: "Contact Update",
          message: "Contact Record:"+event.detail.fields.LastName.value+" is Successfully updated",
          variant: "Success",

        });
        this.dispatchEvent(evt);
    }
}
