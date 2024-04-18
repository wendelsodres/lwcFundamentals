@isTest
private class AccountTriggerHandlerTest {
  @isTest
  public static void createAccountTest() {
    List<Account> testAccount = new List<Account>();

    testAccount.add(new Account(Name = 'Test Account 1'));
    testAccount.add(new Account(Name = 'Test Account 2'));
    testAccount.add(new Account(Name = 'Test Account 3'));

    insert testAccount;

    List<Account> lstAccounts = [
      SELECT Id, Name
      FROM Account
    ];

    System.assertEquals(3, testAccount.size());
    System.assertEquals('Test Account 1', testAccount[0].Name);
  }
}
