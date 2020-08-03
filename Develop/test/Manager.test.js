const Manager = require("../lib/Manager");
describe("Manager", () => {
    test("should set officeNumber property to new object via constructor" , () => {
        const testValue = 124;
        const e = new Manager("Sarah", 100,"test@test.com",testValue);
        expect(e.officeNumber).toBe(testValue);

    });
    test("Can get office Number via getOfficeNumber()", () => {
        const testValue = 124;
        const e = new Manager("Sarah", 100, "test@test.com", testValue);
        expect(e.getOfficeNumber()).toBe(testValue);
    });
    test("should get the role of the new engineer object using getRole() method", () => {
        const testValue = "Manager";
        const e = new Manager("Sarah", 100, "test@test.com", 124, testValue);
        expect(e.getRole()).toBe(testValue);
    });
});
