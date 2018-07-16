var datePattern = /^(\d{4})(\/|-)(\d{1,2})(\/|-)(\d{1,2})$/;
exports.isDate = function (x) { return Boolean(x.match(datePattern)); };
var validPasswordPattern = /^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])|(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&\/=?_.,:;\\-])|(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%&\/=?_.,:;\\-])|(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&\/=?_.,:;\\-])).{8,}$/;
exports.isStrongPassword = function (x) { return Boolean(x.match(validPasswordPattern)); };
var validPostcodePattern = /^(\d{4})$/;
exports.isValidPostcode = function (x) { return Boolean(x.match(validPostcodePattern)); };