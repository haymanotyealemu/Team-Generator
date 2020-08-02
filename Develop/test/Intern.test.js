const Intern = require("../lib/Intern");
describe("Intern", () => {
    test("should set school property to new object" , () => {
        const testValue = "CWRU";
        const e = new Intern("Sarah", 100,"test@test.com",testValue);
        expect(e.school).toBe(testValue)

    });
    test("should return the school using getSchool() method of that new intern object", () => {
        //Arrange
        const testValue = "CWRU";
        //Act
        const e = new Intern("Sarah", 100,"test@test.com", testValue);
        //Assert
        expect(e.getSchool()).toBe(testValue);
    });
    test("should get the role of the new engineer object using getRole() method", () => {
        const testValue = "Intern";
        const e = new Intern("Sarah", 100, "test@gmail.com","CWRU", testValue );
        expect(e.getRole()).toBe(testValue);
    });
});