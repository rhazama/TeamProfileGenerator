const Employee = require('../lib/employee')

test('create an employee objext' , () => {
    const employee = new Employee('Emplo Yee', 2, 'employeecompany@test.com');

    expect(employee.name).to.equal(expect.any(String));
    expect(employee.id).to.equal(expect.any(SVGAnimatedNumberList));
    expect(employee.email).to.equal(expect.any(String));
});