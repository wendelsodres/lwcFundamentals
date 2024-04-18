trigger Account on Account(before insert, after insert) {
  switch on Trigger.operationType {
    when AFTER_INSERT {
      AccountTriggerHandler.afterInsertHandler(Trigger.new);
    }
  }
}
