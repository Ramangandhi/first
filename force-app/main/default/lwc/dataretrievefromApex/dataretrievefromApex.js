import { LightningElement,track} from 'lwc';
import getAccount from '@salesforce/apex/AccountController.getAccountRecordsList';
export default class DataretrievefromApex extends LightningElement {
    @track accountRecords;
    @track errors;
    @track columns = [{label:'Name',fieldName:'Name',type:'text'},
    {label:'Industry',fieldName:'Industry',type:'text'},];
    connectedCallback()
    {
        getAccount()
         .then(result=>{
             this.accountRecords = result;
         })
         .catch(error=>
         {
             this.errors = error;
         });
    }
}