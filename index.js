const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('/src/page-generator');
const Manager = require('.lib/Manager');
const Engineer = require('.lib/Engineer');
const Intern = require('.lib/Intern');
const Employees = [];

init()
    .then(data => {
        addEmployee(data)
    })
    .catch(err => {
        console.log(err);
    })