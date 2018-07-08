var datePattern = /^(\d{4})(\/|-)(\d{1,2})(\/|-)(\d{1,2})$/;
exports.isDate = function (x) { return Boolean(x.match(datePattern)); };