import { isOddOrEven } from "./isOddOrEven.js";
import { expect } from "chai";

describe("isOddOrEven", () => {


    it("should return undefiened when pass non string value as input", () => {


        //Arrange
        const inputValueNumber = 15;
        const inputValueUndefined = undefined;
        const inputValueNull = null;
        const inputValueFloatNumber = 10.10;


        //Act
        const resultNumber = isOddOrEven(inputValueNumber);
        const resultUndefined = isOddOrEven(inputValueUndefined)
        const resultNull = isOddOrEven(inputValueNull);
        const resultFloatNumber = isOddOrEven(inputValueFloatNumber);
        
        //Assert
        expect(resultNumber).to.be.undefined;
        expect(resultUndefined).to.be.undefined;
        expect(resultNull).to.be.undefined;
        expect(resultFloatNumber).to.be.undefined;


    })
    it("shold return even when the input string length is even", () => {

        //Arrane
        const evenStringLength = "1234"
        //Act
        const resultEven = isOddOrEven(evenStringLength);
        //Assert
        expect(resultEven).to.be.equal("even")
        
    })
    it("should return odd when input string length is odd", () => {
         //Arrane
         const oddStringLength = "123"
         //Act
         const resultOdd = isOddOrEven(oddStringLength);
         //Assert
         expect(resultOdd).to.be.equal("odd")
    })

    it("should return even when input string length is 0", () => {
        //Arrane
        const zeroString = ""
        //Act
        const resultzero = isOddOrEven(zeroString);
        //Assert
        expect(resultzero).to.be.equal("even")
   })

})