/*1. Create a constructor function called Employee that will be used to create objects with properties: name and department.
2. All employees instantiated from Employee should inherit method whoAreYou that will return: "My name is [the employee's name] and I am working in department [the employee's department]"
3. Create a constructor function called Manager that inherits from Employee and will have the employees property (whose value defaults to an empty array, intended to have an array of 
Employee objects as its value). The department for all managers is "general". All Manager should have the ability to fire people. This should be a method which will remove the employee 
from the 'employees' property. The employee that should be fired will be passed by name as argument to the method
4. Create a constructor function called SalesPerson that inherits from Employee and will have the quota property. (The department for all sales people is "sales")*/

//1. Constructor Function
function Employee(name, department) {
    this.name = name;
    this.department = department;
}

//2. Adding whoAreYou to the Employee prototype
Employee.prototype.whoAreYou = function () {
    return `My name is ${this.name} and I am working in department ${this.department}`;
}

//3. Constructor function for Manager obj. that inherits from Employee 
function Manager(name) {
    Employee.call(this, name, "general");
    this.employees = [];
}

//Inherit from Employee
Manager.prototype.__proto__ = Employee.prototype;

//Add fireEmployee() to Manager prototype
Manager.prototype.fireEmployee = function(firedEmp){
        this.employees = this.employees.filter(x => x != firedEmp);
    }

//4. Constructor function for SalesPerson that inherits from Employee
function SalesPerson(name, quota) {
    Employee.call(this, name, "sales");
    this.quota = quota;
}
//Inherit from Employee
SalesPerson.prototype.__proto__ = Employee.prototype;


