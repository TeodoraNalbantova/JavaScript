import { lookupChar } from "./charLookUp.js";
import { expect } from "chai";

describe ("charLookUp",() => {

it("should return undefined when first parameter is wrong type and second is correct ",() => {

// Arrange
const firstIncorrect = 123;
const secondCorrect = 1;
// Act
const undefinedResult = lookupChar(firstIncorrect,secondCorrect)
// Assert
expect(undefinedResult).to.be.undefined;

})

it("should return undefined when first parameter is correct and second is not ",() => {

    // Arrange
    const firstCorrect = 'some string';
    const secondIncorrect = '10';
    // Act
    const undefinedResult = lookupChar(firstCorrect,secondIncorrect)
    // Assert
    expect(undefinedResult).to.be.undefined;
    
    })

    it("should return undefined when first parameter is correct and second is float number ",() => {

        // Arrange
        const firstCorrect = 'some string';
        const secondIncorrect = 10.5;
        // Act
        const undefinedResult = lookupChar(firstCorrect,secondIncorrect)
        // Assert
        expect(undefinedResult).to.be.undefined;
        
        })


it("should return incorect index if first parameter is correct and second is begger than the tring length ",() => {

 // Arrange
 const firstCorrect = 'some string';
 const biggerlengthParam = 30;
 // Act
 const incorrectResult = lookupChar(firstCorrect,biggerlengthParam)
 // Assert
 expect(incorrectResult).to.be.equal("Incorrect index");
 
 })

 it("should return incorect index if first parameter is correct and second is lower than the tring length ",() => {

    // Arrange
    const firstCorrect = 'string';
    const lowerLengthParam = -1;
    // Act
    const incorrectResult = lookupChar(firstCorrect,lowerLengthParam)
    // Assert
    expect(incorrectResult).to.be.equal("Incorrect index");
    
    })


    it("should return char index when all parameters are correct",() => {

        // Arrange
        const string = 'some string';
        const index = 1;
        // Act
        const result = lookupChar(string,index)
        // Assert
        expect(result).to.be.equal("o");
        
        })

})


