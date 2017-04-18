goog.provide('API.Client.List_order');

/**
 * @record
 */
API.Client.ListOrder = function() {}

/**
 * Order types: ASC, DESC
 * @type {!string}
 * @export
 */
API.Client.ListOrder.prototype.type;

/**
 * Column name.
 * @type {!string}
 * @export
 */
API.Client.ListOrder.prototype.by;

