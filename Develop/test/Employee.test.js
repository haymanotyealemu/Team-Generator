const Employee = require("../lib/Employee");
describe("Employee", () => {
    describe("Initialization", () => {
        it("is a base class instantiate Employee instance", () => {
            // Arrange
            const e = new Employee("Alex");
            //Assert
            expect(typeof (e)).toBe("object");
        });
        it("should set the name property via constructor as argument", () => {
        const name = "Chris";
        const e = new Employee(name);
        expect(e.name).toBe(name);
        });

        it("should set the id property via constructor as argument", () => {
            //Arrange || Act
            const testId = 29;
            const e = new Employee(testId);
            // Assert
            expect(e.id).toBe("Sarah",testId);
        });
        
        it("should set the email property via constructor as argument", () => {
            //Arrange || Act
            const testEmail = "test@test.com";
            const e = new Employee(testEmail);
            // Assert
            expect(e.email).toBe("Sarah",100, testEmail);
        });

    });
    describe("getName", () => {
        it("should return the name using getName() method", () => {
            const testValue = "Sarah";
            const e = new Employee(testValue);
            expect(e.getName()).toBe(testValue);
        });
    });
    describe("getId", () => {
        it("should return the id using getId() method", () => {
            const testValue = 20;
            const e = new Employee("Sarah", testValue);
            expect(e.getId()).toBe(testValue);
        });
    });
    describe("getEmail", () => {
        it("should return the email using getEmail() method", () => {
            const testValue = "test@test.com";
            const e = new Employee("Sarah", 100, testValue);
            expect(e.getEmail()).toBe(testValue);
        });
    });
    describe("getRole", () => {
        it("should return the role of the instance objects using getRole() method", () => {
            // Arrange
            const testValue = "Employee";
            // Act
            const e = new Employee("Sarah", 100, "test@test.com", testValue);
            // Assert
            expect(e.getRole()).toBe(testValue);
        });
    });

});