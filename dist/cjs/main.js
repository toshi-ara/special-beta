"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.betaln = exports.beta = void 0;
const special_gammaln_1 = require("@toshiara/special-gammaln");
// beta function
function beta(x, y) {
    return (x <= 0 || y <= 0)
        ? NaN
        : Math.exp((0, special_gammaln_1.gammaln)(x) + (0, special_gammaln_1.gammaln)(y) - (0, special_gammaln_1.gammaln)(x + y));
}
exports.beta = beta;
;
// natural logarithm of beta function
function betaln(x, y) {
    return (0, special_gammaln_1.gammaln)(x) + (0, special_gammaln_1.gammaln)(y) - (0, special_gammaln_1.gammaln)(x + y);
}
exports.betaln = betaln;
