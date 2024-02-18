import { gammaln } from "@toshiara/special-gammaln";


// beta function
export function beta(x:number, y:number): number {
    return (x <= 0 || y <= 0)
        ? NaN
        : Math.exp(gammaln(x) + gammaln(y) - gammaln(x + y));
};


// natural logarithm of beta function
export function betaln(x:number, y:number): number {
    return gammaln(x) + gammaln(y) - gammaln(x + y);
}
