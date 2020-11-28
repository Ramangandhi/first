public with sharing class accountt {
        @AuraEnabled(cacheable=true)
        public static List<Account> getAccount(){
            return [SELECT Id, Name, Phone FROM Account Limit 10];
}
