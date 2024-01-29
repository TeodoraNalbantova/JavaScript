import { analyzeArray } from "./arrayAnalyzer.js"
import { expect } from "chai";

describe("analyzeArray", () => {

    it("should return unedfined when input is not array", () => {

        const nonArray = "someText";

        const undefinedResult = analyzeArray(nonArray);

        expect(undefinedResult).to.be.undefined;

    })

    it("should return undefind when input is empty", () => {

        const emptyArray = [];

        const undefinedResult = analyzeArray(emptyArray);

        expect(undefinedResult).to.be.undefined;

    })

    it("should return undefind when input is Null", () => {

        const nullArray = null;

        const undefinedResult = analyzeArray(nullArray);

        expect(undefinedResult).to.be.undefined;

    })
    it("should return correct resut when input is array with different numbers", () => {

        const array = [3, 5, -2, 4, 1];

        const result = analyzeArray(array);

        expect(result).to.be.deep.equal({ min: -2, max: 5, length: 5 });

    })

    it("should return correct resut when input is array with single element", () => {

        const array = [3];

        const result = analyzeArray(array);

        expect(result).to.be.deep.equal({ min: 3, max: 3, length: 1 });

    })

    
    it("should return correct resut when input is array with the same numbers", () => {

        const array = [3, 3, 3];

        const result = analyzeArray(array);

        expect(result).to.be.deep.equal({ min: 3, max: 3, length: 3 });

    })

})