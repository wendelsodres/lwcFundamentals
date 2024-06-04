public with sharing class AccountTriggerHandler {
  public static void afterInsertHandler(List<Account> accounts) {
    List<Account> lstAccounts = new List<Account>();

    try {
      for (Account acc : accounts) {
        Account sc = new Account();

        sc = acc.clone();
        sc.Name = acc.Name + ' - Super';
        sc.ParentId = acc.Id;

        lstAccounts.add(sc);
      }
    } catch (Exception e) {
      System.debug(e.getMessage());
    }
  }
}
