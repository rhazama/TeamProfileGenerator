const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-generator');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employees = [];

//writes html file
const writeFile = (data) => {
    return new Promise((resolve,reject) => {
        fs.writeFile('.dist/index.html', data, err => {
            if(err) {
                reject(err);
                return;
            }
            resolve({
                ok:true,
                message: 'File Created!'
            });
       });
    });
};

//function to create team object from other employee functions
const init = () => {
    return inquirer.prompt([
        {
            type: `input`,
            name: `name`,
            message: `Team manager: (Required)`,
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log(`Please enter the team manager's name`);
                    return false;
                }
            }
        },
        {
            type: `input`,
            name: `id`,
            message: `Team manager's id: (Required)`,
            validate: idInput => {
                if(idInput) {
                    return true;
                } else {
                    console.log(`Please enter the team manager's id`);
                    return false;
                }
            }
        },
        {
            type: `input`,
            name: `office`,
            message: `Team manager's office number: (Required)`,
            validate: officeInput => {
                if(officeInput) {
                    return true;
                } else {
                    console.log(`Please enter the team manager's name`);
                    return false;
                }
            }
        },
        {
            type: `list`,
            name: `extraEmployee`,
            message: `Would you like to add another employee?`,
            choices: ['Add Engineer', 'Add Intern', 'Finish building my team']
        }
    ])
    .then(data => {
        const {name, id, email, office, extraEmployee} = data;
        const manager = new Manager(name, id, email, office);

        Employees.push(manager);
        return extraEmployee;
    });
}

const addEmployee = (data) => {
    if(data === 'Add Engineer') {
        return inquirer.prompt([
            {
                type: `input`,
                name: `name`,
                message: `Engineer: (Required)`,
                validate: nameInput => {
                    if(nameInput) {
                        return true;
                    } else {
                        console.log(`Please enter the engineer's name`);
                        return false;
                    }
                }
            },
            {
                type: `input`,
                name: `id`,
                message: `Engineer's id: (Required)`,
                validate: idInput => {
                    if(idInput) {
                        return true;
                    } else {
                        console.log(`Please enter engineer's id`);
                        return false;
                    }
                }
            },
            {
                type: `input`,
                name: `email`,
                message: `Engineer's email: (Required)`,
                validate: idInput => {
                    if(idInput) {
                        return true;
                    } else {
                        console.log(`Please enter the engineer's id`);
                        return false;
                    }
                }
            },
            {
                type: `input`,
                name: `github`,
                message: `Enter engineer's Github: (Required)`,
                validate: idInput => {
                    if(idInput) {
                        return true;
                    } else {
                        console.log(`Please enter engineer's Github username`);
                        return false;
                    }
                }
            },
            {
                type: `list`,
                name: `extraEmployee`,
                message: `Would you like to add another employee?`,
                choices: ['Add Engineer', 'Add Intern', 'Finish building my team']
            }
        ])
        .then(data => {
            const { name, id, email, github, extraEmployee } = data;
            const engineer = new Engineer(name, id, email, github);

            Employees.push(engineer);

            addEmployee(extraEmployee);
        })
    } else if (data === 'Add Intern') {
        return inquirer.prompt([
            {
                type: `input`,
                name: `name`,
                message: `Intern: (Required)`,
                validate: nameInput => {
                    if(nameInput) {
                        return true;
                    } else {
                        console.log(`Please enter your intern's name`);
                        return false;
                    }
                }
            },
            {
                type: `input`,
                name: `id`,
                message: `Intern's id: (Required)`,
                validate: idInput => {
                    if(idInput) {
                        return true;
                    } else {
                        console.log(`Please enter intern's id`);
                        return false;
                    }
                }
            },
            {
                type: `input`,
                name: `email`,
                message: `Intern's email: (Required)`,
                validate: idInput => {
                    if(idInput) {
                        return true;
                    } else {
                        console.log(`Please enter the intern's id`);
                        return false;
                    }
                }
            },
            {
                type: `input`,
                name: `school`,
                message: `Enter intern's school: (Required)`,
                validate: idInput => {
                    if(idInput) {
                        return true;
                    } else {
                        console.log(`Please enter intern's school name`);
                        return false;
                    }
                }
            },
            {
                type: `list`,
                name: `extraEmployee`,
                message: `Would you like to add another employee?`,
                choices: ['Add Engineer', 'Add Intern', 'Finish building my team']
            }
        ])
        .then(data => {
            const { name, id, email, school, extraEmployee } = data;
            const intern = new Intern(name, id, email, school);

            employee.push(intern);

            addEmployee(extraEmployee);
        })
    } else {
        const html = generatePage(Employees);
        return writeFile(html);
    }
}

init()
    .then(data => {
        addEmployee(data)
    })
    .catch(err => {
        console.log(err);
    })