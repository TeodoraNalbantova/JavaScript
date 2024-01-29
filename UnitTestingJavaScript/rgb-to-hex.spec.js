import { rgbToHexColor} from './rgb-to-hex.js'
import { expect } from 'chai'

describe ('rgbToHex', () => {

it('should return undefined if red value is invlaid', () => {

    //Arrange
    //Act
    const nonNumericRedValueREsult = rgbToHexColor('red', 0, 0)
    const negatieRedValueREsult = rgbToHexColor(-125, 0, 0)
    const tooBigRedValue = rgbToHexColor(999, 0, 0)
    //Assert
    expect(nonNumericRedValueREsult).to.be.undefined
    expect(negatieRedValueREsult).to.be.undefined
    expect(tooBigRedValue).to.be.undefined
})

it('should return undefined if green value is invlaid', () => {

    //Arrange
    //Act
    const nonNumericGreenValueREsult = rgbToHexColor(0, 'green', 0)
    const negatieGreenValueREsult = rgbToHexColor( 0, -125, 0)
    const tooBigGreenValue = rgbToHexColor(0, 999, 0)
    //Assert
    expect(nonNumericGreenValueREsult).to.be.undefined
    expect(negatieGreenValueREsult).to.be.undefined
    expect(tooBigGreenValue).to.be.undefined

})


it('should return undefined if blue value is invlaid', () => {
//Arrange
    //Act
    const nonNumericBlueValueREsult = rgbToHexColor(0, 0, 'blue')
    const negatieBlueValueREsult = rgbToHexColor( 0, 0, -125)
    const tooBigBlueValue = rgbToHexColor(0, 0, 999)
    //Assert
    expect(nonNumericBlueValueREsult).to.be.undefined
    expect(negatieBlueValueREsult).to.be.undefined
    expect(tooBigBlueValue).to.be.undefined

})

it('should return correct value if correct rgb value is given', () => {
//Arrange
const redValue = 203;
const greenValue = 32;
const blueValue = 107;
// Act
const result = rgbToHexColor(redValue,greenValue,blueValue)
// Assert
expect(result).to.equals('#CB206B')
})

it('should return correct value if max rgb value is given', () => {
    //Arrange
    const redValue = 255;
    const greenValue = 255;
    const blueValue = 255;
    // Act
    const result = rgbToHexColor(redValue,greenValue,blueValue)
    // Assert
    expect(result).to.equals('#FFFFFF')
    })

    it('should return correct value if min rgb value is given', () => {
        //Arrange
        const redValue = 0;
        const greenValue = 0;
        const blueValue = 0;
        // Act
        const result = rgbToHexColor(redValue,greenValue,blueValue)
        // Assert
        expect(result).to.equals('#000000')
        })

})