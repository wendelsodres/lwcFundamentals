public class AccountHandler {
  public static Account insertNewAccount(String n) {
    Account acct = new Account(Name = n);

    try {
      insert acct;
    } catch (DmlException e) {
      return null;
    }

    return acct;
  }
}
