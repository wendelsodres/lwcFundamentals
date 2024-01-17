@isTest
private class FitnessTest {
  @isTest
  public static void calculateBMITest() {
    Decimal resCalc = Fitness.calculateBMI(60, 1.2);
    resCalc = resCalc.setScale(2);
    System.assertEquals(
      41.67,
      resCalc,
      'BMI should be 41.67 for 60kg wight and 1.2 mtr height'
    );
  }

  @isTest
  public static void calculatePaceTest() {
    Decimal resCalcPace = Fitness.calculatePace(4, 15);
    Assert.areEqual(
      16,
      resCalcPace,
      'Pace should be 16 for 16 distance and 15 minutes'
    );
  }
}
