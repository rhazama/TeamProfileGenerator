function employeeCard(employee) {
    if (employee.getRole() ==='Engineer') {
        return `
        <div class="shadow col-3 m-2">
            <div>
                <h2 class="text-center bg-secondary text-light p-2">
                    ${employee.getName()}<br>
                    Engineer
                </h2>
                <p class="text-center border">ID: 002</p>
                <p class="text-center border">Email: <a href="mailto:engineercompany@test.com">engineercompany@test.com</a></p>
                <p class="text-center border">Github: <a href="https://github.com/test" target="_blank">jProbst</a></p>
            </div>
        </div>
        `
    } else if(employee.getRole()==='Intern'){
        return `
        <div class="shadow col-3 m-2">
            <div>
                <h2 class="text-center bg-danger text-light p-2">
                    ${employee.getName()}<br>
                    Intern
                </h2>
                <p class="text-center border">ID: ${employee.getId()}</p>
                <p class="text-center border">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
                <p class="text-center border">School: ${employee.getSchool()}</p>
            </div>
        </div>
        `
    } else {
        return;
    }
}

function generateHTML(data) {
    const employeeCards = [];

    data.map(employee => {
        employeeCards.push(employeeCard(employee));
    });

    const joinedCards = employeeCards.join('');

    return `
    <!doctype html>
        <html lang="en">
        <head>
            <title>Team Profile Generator</title>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        </head>
            
        <body>
            <div class="container-fluid">
                <div class="row">
                    <h1 class="bg-info col-12 text-center p-3 text-light">My Team</h1>
                </div>
                <div class="row justify-content-evenly p-3">
                    <div>
                        <h2 class="text-center bg-danger text-light p-2">
                            ${data[0].getName()}<br>
                            Manager
                        </h2>
                        <p class="text-center border">ID: ${data[0].getId()}</p>
                        <p class="text-center border">Email: <a href="mailto:${data[0].getEmail()}">m${data[0].getEmail()}</a></p>
                        <p class="text-center border">Office Number: ${data[0].getOfficeNum()}</p>
                    </div>
                </div>
                ${joinedCards}
            </div>
            </div>
        </body>
        </html>
    `
};

function htmlFinish() {
    const html = `
    </div>
    </main>
    </body>
    </html>  
    `;

    fs.appendFile("./dist/index/.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("Profile has been created! Checkout the dist folder for the new file.");
}

module.exports = generateHTML, htmlFinish;