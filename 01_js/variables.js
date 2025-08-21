const accountId = 1454654
let accountEmail = "xyz@export.com"
var accountPassword = "dollychai12"
accountCity = "Noida"
let accountState;
// accountId = 154  -- not allowed
console.log(accountId);
// accountEmail = "dolly"  -- allowed
console.table([accountEmail,accountId,accountPassword,accountCity,accountState]);

// Prefer not to use var cz of issues related to scope
