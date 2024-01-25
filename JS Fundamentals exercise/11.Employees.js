function solve(employees) {


    'use strict'
    const employeeData = [];
    for (const employeeRaw of employees){
        employeeData.push({
            name: employeeRaw,
            personalNumber: employeeRaw.length
        })
    }
    employeeData.forEach((employee) => console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`));

  
  
  //-------------------------------------
    // const employeeData = employees.map((employeeRaw) => ({
    //     name: employeeRaw,
    //     personalNumber: employeeRaw.length
    // }));

//     In this version, the map function is used to transform each element of the employees array into an object with name and personalNumber properties. The resulting array is then used in the forEach loop to print the information in the specified format.

// Using map is often a cleaner and more concise way to transform elements in an array, especially when you need to create a new array based on the existing one.

}
//-------------------------------
//     const employeeList = {};
//     for (const employee of employees) {
//         const personalNum = employee.length;
//         employeeList[employee] = personalNum;
//         //Use Object.entries to iterate over the properties (key-value pairs) of the employeeList object and print the information in the desired format.
//     }

//     for (const [name, personalNum] of Object.entries(employeeList)) {
//         console.log(`Name: ${name} -- Personal Number: ${personalNum}`);

//     }

//     //Object.entries(employeeList): This method returns an array of a given object's own enumerable property [key, value] pairs. In this case, it returns an array of key-value pairs representing the employee names and their corresponding personal numbers.
// 

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
)