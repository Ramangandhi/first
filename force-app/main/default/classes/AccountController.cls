public with sharing class AccountController {
   
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccount(){
        return [SELECT Id, Name, Phone, Type, Fax 
        FROM Account limit 10];
    }

    @AuraEnabled
    public static List<Account> getAccountRecordsList()
    {
      return [select id,name,type,phone,industry from Account limit 10];    
    }
}
