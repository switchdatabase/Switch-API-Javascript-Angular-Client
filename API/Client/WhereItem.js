goog.provide('API.Client.WhereItem');

/**
 * @record
 */
API.Client.WhereItem = function() {}

/**
 * You can explain the controls of more than one state with where. The controls of states: equal, notEqual, like, greaterThan, lessThan
 * @type {!string}
 * @export
 */
API.Client.WhereItem.prototype.type;

/**
 * Column name
 * @type {!string}
 * @export
 */
API.Client.WhereItem.prototype.column;

/**
 * Column value
 * @type {!string}
 * @export
 */
API.Client.WhereItem.prototype.value;

