const Employee = require("../lib/Employee");
describe("Employee", () => {
    describe("Initialization", () => {
        test("is a base class instantiate Employee instance", () => {
            // Arrange
            const e = new Employee("Alex");
            //Assert
            expect(typeof (e)).toBe("object");
        });
        test("should set the name property via constructor as argument", () => {
        const name = "Chris";
        const e = new Employee(name);
        expect(e.name).toBe(name);
        });

        test("should set the id property via constructor as argument", () => {
            //Arrange || Act
            const testId = 29;
            const e = new Employee("Sarah",testId);
            // Assert
            expect(e.id).toBe(testId);
        });
        
        test("should set the email property via constructor as argument", () => {
            //Arrange || Act
            const testEmail = "test@test.com";
            const e = new Employee("Sarah",100,testEmail);
            // Assert
            expect(e.email).toBe(testEmail);
        });

    });
    describe("getName", () => {
        test("should return the name using getName() method", () => {
            const testValue = "Sarah";
            const e = new Employee(testValue);
            expect(e.getName()).toBe(testValue);
        });
    });
    describe("getId", () => {
        test("should return the id using getId() method", () => {
            const testValue = 20;
            const e = new Employee("Sarah", testValue);
            expect(e.getId()).toBe(testValue);
        });
    });
    describe("getEmail", () => {
        test("should return the email using getEmail() method", () => {
            const testValue = "test@test.com";
            const e = new Employee("Sarah", 100, testValue);
            expect(e.getEmail()).toBe(testValue);
        });
    });
    describe("getRole", () => {
        test("should return the role of the instance objects using getRole() method ", () => {
            // Arrange
            const testValue = "Employee";
            // Act
            const e = new Employee("Sarah", 100, "test@test.com", testValue);
            // Assert
            expect(e.getRole()).toBe(testValue);
        });
    });

});