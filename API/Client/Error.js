goog.provide('API.Client.Error');

/**
 * @record
 */
API.Client.Error = function() {}

/**
 * @type {!number}
 * @export
 */
API.Client.Error.prototype.responseTime;

/**
 * @type {!string}
 * @export
 */
API.Client.Error.prototype.response;

/**
 * @type {!string}
 * @export
 */
API.Client.Error.prototype.errorMessage;

