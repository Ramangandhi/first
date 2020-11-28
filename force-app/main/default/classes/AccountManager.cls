public with sharing class AccountManager {
 @AuraEnabled
 public static List<Account> getAccounts(){
     return [SELECT Id, Name, Phone FROM Account Limit 10];
}
