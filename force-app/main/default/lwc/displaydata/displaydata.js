import { LightningElement,wire } from 'lwc';
import getAccount from '@salesforce/apex/AccountController.getAccount';
export default class Display extends LightningElement {
   
    @wire(getAccount) accounts

    }
