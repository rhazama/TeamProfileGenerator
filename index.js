const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('/src/page-generator');
const Manager = require('.lib/Manager');
const Engineer = require('.lib/Engineer');
const Intern = require('.lib/Intern');
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
        const manager = new Manager(name, email, office);

        employees.push(manager);
        return extraEmployee;
    });
}


init()
    .then(data => {
        addEmployee(data)
    })
    .catch(err => {
        console.log(err);
    })