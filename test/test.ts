import { beta, betaln } from "../dist/esm/index.js";


let digits = 14;

describe("betaln/beta functions", () => {
    it("Check betaln function", () => {
        // results by lbeta(x, y) in SpecialFunctions.jl
        expect(betaln(1, 2)).toBeCloseTo(-0.6931471805599453, digits);
        expect(betaln(0.1, 0.2)).toBeCloseTo(2.680978479346917, digits);
    });

    it("Check beta function", () => {
        // results by lbeta(x, y) in SpecialFunctions.jl
        expect(beta(1.2, 2.4)).toBeCloseTo(0.3068371659652528, digits);
        expect(beta(0.1, 0.3)).toBeCloseTo(12.8305985363213, digits);
    });
})

