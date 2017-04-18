goog.provide('API.Client.Body');

/**
 * @record
 */
API.Client.Body = function() {}

/**
 * List name.
 * @type {!string}
 * @export
 */
API.Client.Body.prototype.list;

/**
 * Item count.
 * @type {!number}
 * @export
 */
API.Client.Body.prototype.count;

/**
 * Page number.
 * @type {!number}
 * @export
 */
API.Client.Body.prototype.page;

/**
 * Optional enumerator. You can assign the mode of implementation of where criterions by using AND and OR types under whereType parameter.
 * @type {!string}
 * @export
 */
API.Client.Body.prototype.whereType;

/**
 * @type {!Array<!API.Client.WhereItem>}
 * @export
 */
API.Client.Body.prototype.where;

/**
 * @type {!API.Client.List_order}
 * @export
 */
API.Client.Body.prototype.order;

