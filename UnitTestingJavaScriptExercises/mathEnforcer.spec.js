import { it } from "mocha";
import { mathEnforcer } from "./mathEnforcer.js"
import { expect } from "chai";

describe("mathEnforcer", () => {
    describe("addFive", () => {

        it("should return undefined when pass string as input", () => {

            //arrange
            const stringInput = "somestring"
            //act
            const undefiniedResult = mathEnforcer.addFive(stringInput);
            //assert
            expect(undefiniedResult).to.be.undefined;

        })

        it("should return undefined when pass undefined as input", () => {

            //arrange
            const undefinedInout = undefined;
            //act
            const undefiniedResult = mathEnforcer.addFive(undefinedInout);
            //assert
            expect(undefiniedResult).to.be.undefined;

        })


        it("should return undefined when pass number is string as input", () => {

            //arrange
            const stringInput = '5';
            //act
            const undefiniedResult = mathEnforcer.addFive(stringInput);
            //assert
            expect(undefiniedResult).to.be.undefined;

        })

        it("should return correct result when pass floating number as input and assert with close to", () => {

            //arrange
            const floatingInput = 5.50;
            //act
            const result = mathEnforcer.addFive(floatingInput);
            //assert
            expect(result).to.be.closeTo(10.50, 0.01);

        })

        it("should return correct result when pass floating number as input and assert with equal", () => {

            //arrange
            const floatingInput = 5.50;
            //act
            const result = mathEnforcer.addFive(floatingInput);
            //assert
            expect(result).to.be.equal(10.50);

        })

        it("should return correct result when pass floating number with a lot of digits as input and assert with close to", () => {

            //arrange
            const floatingInput = 5.000000001;
            //act
            const result = mathEnforcer.addFive(floatingInput);
            //assert
            expect(result).to.be.closeTo(10.01, 0.01);

        })

        it("should return correct result when pass number as input", () => {

            //arrange
            const numberInput = 5;
            //act
            const result = mathEnforcer.addFive(numberInput);
            //assert
            expect(result).to.be.eql(10);

        })

        it("should return correct result when pass negative number as input", () => {

            //arrange
            const neagitveNumberInput = -15;
            //act
            const result = mathEnforcer.addFive(neagitveNumberInput);
            //assert
            expect(result).to.be.eql(-10);

        })

        it("should return 0 when input number is equal to -5", () => {

            //arrange
            const neagitveNumberInput = -5;
            //act
            const result = mathEnforcer.addFive(neagitveNumberInput);
            //assert
            expect(result).to.be.eql(0);

        })


    })
    describe("substractTen", () => {
        it("should return undefined when pass string as input", () => {

            //arrange
            const stringInput = "somestring"
            //act
            const undefiniedResult = mathEnforcer.subtractTen(stringInput);
            //assert
            expect(undefiniedResult).to.be.undefined;

        })

        it("should return undefined when pass undefined as input", () => {

            //arrange
            const undefinedInout = undefined;
            //act
            const undefiniedResult = mathEnforcer.subtractTen(undefinedInout);
            //assert
            expect(undefiniedResult).to.be.undefined;

        })


        it("should return undefined when pass number is string as input", () => {

            //arrange
            const stringInput = '5';
            //act
            const undefiniedResult = mathEnforcer.subtractTen(stringInput);
            //assert
            expect(undefiniedResult).to.be.undefined;

        })

        it("should return correct result when pass floating number as input and assert with close to", () => {

            //arrange
            const floatingInput = 20.20;
            //act
            const result = mathEnforcer.subtractTen(floatingInput);
            //assert
            expect(result).to.be.closeTo(10.20, 0.01);

        })

        it("should return correct result when pass floating number as input and assert with equal", () => {

            //arrange
            const floatingInput = 20.20;
            //act
            const result = mathEnforcer.subtractTen(floatingInput);
            //assert
            expect(result).to.be.equal(10.20);

        })

        it("should return correct result when pass floating number with a lot of digits as input and assert with close to", () => {

            //arrange
            const floatingInput = 100.000000001;
            //act
            const result = mathEnforcer.subtractTen(floatingInput);
            //assert
            expect(result).to.be.closeTo(90.01, 0.01);

        })

        it("should return correct result when pass number as input", () => {

            //arrange
            const numberInput = 5;
            //act
            const result = mathEnforcer.subtractTen(numberInput);
            //assert
            expect(result).to.be.eql(-5);

        })

        it("should return correct result when pass negative number as input", () => {

            //arrange
            const neagitveNumberInput = -15;
            //act
            const result = mathEnforcer.subtractTen(neagitveNumberInput);
            //assert
            expect(result).to.be.eql(-25);

        })

        it("should return 0 when input number is equal to 10", () => {

            //arrange
            const neagitveNumberInput = 10;
            //act
            const result = mathEnforcer.subtractTen(neagitveNumberInput);
            //assert
            expect(result).to.be.eql(0);

        })

    })
    describe("sum", () => {
        it("should return undefined when param1 is wrong and param 2 is correct", () => {

            //arrange
            const wrongParam1 = "string"
            const correctParam2 = 2;
            //act
            const undefiniedResult = mathEnforcer.sum(wrongParam1,correctParam2);
            //assert
            expect(undefiniedResult).to.be.undefined;

        })

        it("should return undefined when param1 is correct and param 2 is wrong", () => {

            //arrange
            const correctParam1 = 1;
            const wrongParam2 = 'string';
            //act
            const undefiniedResult = mathEnforcer.sum(correctParam1,wrongParam2);
            //assert
            expect(undefiniedResult).to.be.undefined;

        })
        it("should return undefined when param1 is string and param 2 is correct", () => {

            //arrange
            const param1 = '2';
            const param2 = 2;
            //act
            const undefiniedResult = mathEnforcer.sum(param1,param2);
            //assert
            expect(undefiniedResult).to.be.undefined;

        })

        it("should return undefined when both parameters are incorrect", () => {

            //arrange
            const param1 = 'wrong';
            const param2 = 'wrong';
            //act
            const undefiniedResult = mathEnforcer.sum(param1,param2);
            //assert
            expect(undefiniedResult).to.be.undefined;

        })
        it("should return undefined when param1 is correct and param 2 is string", () => {

            //arrange
            const param1 = 2;
            const param2 = '2';
            //act
            const undefiniedResult = mathEnforcer.sum(param1,param2);
            //assert
            expect(undefiniedResult).to.be.undefined;

        })

        it("should return correct result when param1 is correct and param 2 is correct", () => {

            //arrange
            const param1 = 2;
            const param2 = 2;
            //act
            const result = mathEnforcer.sum(param1,param2);
            //assert
            expect(result).to.be.eql(4);

        })

        it("should return correct result when param1 is negative and param 2 is negative", () => {

            //arrange
            const param1 = -2;
            const param2 = -2;
            //act
            const result = mathEnforcer.sum(param1,param2);
            //assert
            expect(result).to.be.eql(-4);

        })

        it("should return correct result when param1 is floating number and param 2 is correct", () => {

            //arrange
            const param1 = 5.00001;
            const param2 = 5;
            //act
            const result = mathEnforcer.sum(param1,param2);
            //assert
            expect(result).to.be.closeTo(10.01,0.01);

        })


        it("should return correct result when param2 is floating number and param 1 is 0", () => {

            //arrange
            const param1 = 0;
            const param2 = 0.1;
            //act
            const result = mathEnforcer.sum(param1,param2);
            //assert
            expect(result).to.be.closeTo(0.1,0.01);

        })

        it("should return 0 result when param1 is positive and param 2 the same number negative ", () => {

            //arrange
            const param1 = 2;
            const param2 = -2;
            //act
            const result = mathEnforcer.sum(param1,param2);
            //assert
            expect(result).to.be.eql(0);

        })

    })

})