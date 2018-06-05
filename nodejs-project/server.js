

/*********************************************************************************
*  WEB322 – Assignment 03
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part of this
*  assignment has been copied manually or electronically from any other source (including web sites) or 
*  distributed to other students.
* 
*  Name:Diogo Watson Manhaes de Andrade Student ID: 104176169 Date: October 8, 2017*
*
* 
*  
*
*  Online (Heroku) Link: https://webaaa.herokuapp.com/
*
********************************************************************************/ 



const express      = require('express');
const path         = require("path");
const data         = require('./data-service.js');
const exphbs       = require ('express-handlebars'); //call handlebars
const bodyParser   =  require ('body-parser');
//var to declare path of departments
const departments  = path.join(__dirname,'data/departments.json');
//var to declare path of employees
const employees    = path.join (__dirname, 'data/employees.json');
const app          = express();
const configPort   = process.env.PORT||8080;

app.use(express.static('public'));


app.use(bodyParser.urlencoded({ extended: true }));

app.engine(".hbs", exphbs({
  extname: ".hbs",
  defaultLayout: 'layout',
  helpers: {
    equal: function (lvalue, rvalue, options) {
      if (arguments.length < 3)
        throw new Error("Handlebars Helper equal needs 2 parameters");
      if (lvalue != rvalue) {
        return options.inverse(this);
      } else {
        return options.fn(this);
      }
    }
  }
}));
app.set("view engine", ".hbs");

function  onHttpStart() {
    console.log("server started");
} 

 app.get('/', function(req, res){
    res.render("home");
    
})

app.get('/about', function(req, res){
    res.render("about");
  
})

app.get('/employees', (req, res) =>{
   
    if(req.query.status)
    {
       //****************funcionando */
        data.EmployeesByStatus(req.query.status).then((data) => {
          
           res.render("employeeList", {data: data, title: "Employees"});
        }).catch((err) => {
            res.render("employeeList", { data: {}, title: "Employees" });
        })//end employees bys status

    }else if(req.query.department){////funcionando
        data.getEmployeesByDepartment(req.query.department).then((data) => {

            res.render("employeeList", { data:data, title:"Employees (Managers)" });
        }).catch((err) => {
            res.render("employeeList", { data: {}, title: "Employees (Managers)" });
        })//end employees by department

    }else if(req.query.manager){///working!!!!!
        data.getEmployeesByManager(req.query.manager).then((data) => {
           res.render("employeeList", { data:data, title:"Employees (Managers)"});
        }).catch((err) => {
            res.render("employeeList", { data: {}, title: "Employees (Managers)" }); 
        })//end employeers by manager

    }
    //  ****************funcionando**************
    else{
        data.getAllEmployees().then((data) =>{
            res.render("employeeList", {data: data, title: "Employees"});

        }).catch((err) => {
            res.render("employeeList", { data: {}, title: "Employees" });
        })
    }//end get all employees */
     

})//end of empĺoyees route
///working!!!!
app.get('/employee', (req, res) => {
    data.getEmployessByNum(req.query.status).then((data) =>{
        res.render("employeeList", {data: data, title: "employeeList"});
    }).catch((err) => {
        res.render("employeeList", { data: {}, title: "Employees" });
    })

})
//working
app.get('/managers', (req, res) => {
    
    data.getManagers().then((data) => {
        res.render("employeeList", { data: data, title: "Employees (Managers)" });
    }).catch((err) => {
        res.render("employeeList", { data: {}, title: "Employees (Managers)" }); 
    })
})
//working
app.get('/departments', (req, res) => {
    data.getDepartments().then((data) => {
        res.render("departmentList", { data:data, title:"Departments"});
    }).catch((err) => {
        res.render("departmentList", { data: {}, title: "Departments"});
    })
    
})


app.get("/employees/add", (req,res) => {
    res.render("addEmployee");
});
//router to POST the employees add
//working
app.post("/employees/add", (req, res) => {
    
    data.addEmployee(req.body).then(()=> {
         res.redirect("/employees");
     
    })
})
//working
app.get("/employee/:empNum", (req, res) =>{
    console.log("testS");
    data.getEmployessByNum(req.params.empNum).then( (data)=> {
       
        res.render("employee", {data:data});
       
    }).catch(()=>{
        res.status(404).send("Employee Not Found");
    })
 
})

app.post("/employee/update", (req, res) => {
    data.addEmployee(req.params.empNum).then(() => {
       console.log('employee updated');
        res.redirect("/employees");
    }).catch(() =>{
        res.send("oops..somethig got wrong...cant update employee")
    })
    
})
app.use((req, res) => {
    res.status(404).send("Page Not Found");
})

app.use(express.static('public'));

//recipe to body parser work correctly


data.initialize().then(()=>{
     app.listen(configPort, onHttpStart);

}).catch((Error) => {
    console.log("error: " + Error);
});

