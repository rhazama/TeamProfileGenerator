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

function generateHTML(data) {};

function htmlFinish() {
    const html = ` </div>
    </main>
    </body>
    </html>  `;

    fs.appendFile("./dist/index/.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("Profile has been created! Checkout the dist folder for the new file.");
}

module.exports = generateHTML, htmlFinish;