import { expect } from 'chai';
import { sum } from './sumNumbers.js'; 

describe('Sum numbers', () => {
    it('should return 0 for an empty array', () => {
        //Arrange
        const inputArray = [];
        //Act
        const result =sum(inputArray);
        // Assert
        expect(result).to.equal(0);
      });
    

      it('should return the single element as a sum if a single element array is given', () => {
        //Arrange
        const inputArray = [33];
        //Act
        const result =sum(inputArray);
        // Assert
        expect(result).to.equal(33);
      });

    it('should retunrn the total sum of an array if a multi value array is given',() =>
    {
        //Arrange
        const inputArray = [12, 3, 1]
        //Act
        const result = sum(inputArray)
        //Assert
        expect(result).to.equals(16)
    })
})
