import { createCalculator } from "./add-substract.js"
import { expect } from "chai";

describe('createCalcualtor', () => {

    it('should return 0 if no opearation are expected on te calculator', () => {
        //Arrange
        const calcualtor = createCalculator()
        //Act
        const result = calcualtor.get()
        //Assert
        expect(result).to.equals(0);

    })

    it('should return a negatie number if only substract operations are executed with positive numbers on the calcualtor', () => {
        //Arrange
        const calcualtor = createCalculator()
        //Act
        calcualtor.subtract(3)
        calcualtor.subtract(3)
        calcualtor.subtract(10)
        const result = calcualtor.get()
        //Assert
        expect(result).to.equals(-16);

    })
    it('should return a positve number if only add operations are executed with positive numbers on the calcualtor', () => {
        //Arrange
        const calcualtor = createCalculator()
        //Act
        calcualtor.add(2)
        calcualtor.add(2)
        calcualtor.add(100)
        const result = calcualtor.get()
        //Assert
        expect(result).to.equals(104);

    })

    it('shuld handle number as string', () => {

        //Arrange
        const calcualtor = createCalculator()
        //Act
        calcualtor.add('2')
        calcualtor.add('2')
        calcualtor.add('100')
        calcualtor.subtract('104')
        const result = calcualtor.get()
        //Assert
        expect(result).to.equals(0);

    })

    it('should handle a mix of operations', () => {

//Arrange
const calcualtor = createCalculator()
//Act
calcualtor.add(2)
calcualtor.add(2)
calcualtor.add(100)
calcualtor.add(-4)
calcualtor.subtract(-100)
calcualtor.subtract(200)
const result = calcualtor.get()
//Assert
expect(result).to.equals(0);

    })


})