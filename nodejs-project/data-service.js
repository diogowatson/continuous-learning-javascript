var employees       = [];
var departments     = [];
var empCount        = 0;
const fs            = require('fs');
var Promise         = require('promise');

var employeesPath   = './data/employees.json';
var departmentsPath = './data/departments.json';

module.exports.initialize = function (){
    return new Promise((resolve, reject) =>
    {
            fs.readFile(employeesPath , (err, data) => {
            if (err) 
                reject (err);
            else
                employees = JSON.parse(data);
         
                fs.readFile(departmentsPath, (err, data) => {
                   if(err)
                      reject (err);
                   else
                       departments = JSON.parse(data);
           
                       if(departments.length == 0 || employees.length == 0)
                    
                           reject(Error("unable to read files"));

                       else//somethig came wrong..
                        empCount = employees.length;//count number of new employees--inserted in assigment 4
                        resolve("initialize() read and convert the file into objects. Sucesses!!");
    
    
             });
        });
    });
}
//function added at assigment 4
module.exports.addEmployee = function (employeeData){
    
    return new Promise((resolve, reject) => 
    {
        empCount++;//increment empcount
        console.log(employeeData)
        if(employeeData != 'undefined'){
        employeeData.employeeNum = empCount; ///assig empcount to employee number
        employees.push(employeeData);//add new employee object to employees array
        resolve(); //call promisse
    }else{
        reject(Error("cannot add employee"));

    }
     })
}
module.exports.getAllEmployees = function(){
    
    return new Promise((resolve, reject) =>
        {
       if(employees.length > 0)
        {
          resolve(employees);
        }
       else
        {
          reject(Error(": error 11"));
        }
    })

}
  
      module.exports.EmployeesByStatus = function(status){
          return new Promise((resolve, reject) =>
      { 
            var temp = [];   
            
            for( let i = 0;i < employees.length; i++ )
            {   
            if (employees[i].status == status)
               
                temp.push(employees[i]);
            
        }      
            if (temp.length > 0) 
             
                resolve(temp);
            else//if employees array is empty
             
                reject(Error("ERROR 12"));
            
      });
    };//end of   EmployeesByStatus

          

      module.exports.getEmployeesByDepartment = function(department){ 
          var temp = [];

          return new Promise((resolve, reject) =>
          {
             for( var i = 0; i < employees.length; i++ ){    
                    if (employees[i].department == department)
                       {
                    temp.push(employees[i]);
                       }       
                }//end of for loop
                       
            if(temp.length > 0)       
               resolve(temp);
            else
               reject(Error(""));
            
      })} // end of getEmployeesByDepartment()

      module.exports.getEmployeesByManager = function(manager)
      {
        return new Promise((resolve, reject) =>
      {
          var temp = [];
          for( let i = 0; i < employees.length; i++ )  
            {
                if(employees[i].employeeManagerNum == manager)
                    temp.push(employees[i]);
                    
            }//end of for loop
        if(temp.length > 0)
            resolve(temp);
            else
            reject(Error("No results returned"));
            
      })}//end of   getEmployeesByManager

      module.exports.getEmployessByNum = function(num)
      {
        return new Promise((resolve, reject) =>
      { var temp =[]       
        for( let i = 0; i<employees.length; i++ )  
              {
                if(employees[i].employeeNum == num)
                  temp.push(employees[i]);
                }//end of loop
        if(temp!='')
          resolve(temp);
           else
          reject(Error("Cannot find employee number"));
            
      })}; ///end of  getEmployessByNum

      module.exports.getManagers = function()
      {
        return new Promise((resolve, reject) =>
        {
        var temp = [];

        for( let i = 0; i < employees.length; i++ )  
        
          {
             if(employees[i].isManager == true)
             temp.push(employees[i]);
             
          }///end of loop
      
        if(temp.length > 0)
            {
                resolve(temp);
            }else{
                reject(Error("no results returned"));
            }
      })}; ///end of getManagers 

      module.exports.getDepartments = function()
      {
        return new Promise((resolve, reject) =>
      {
        if(departments.length > 0)
            {
                resolve(departments);
            }else{
                reject(Error("No departments found"));
            }
      })};  
     
      module.exports.updateEmployee = function (employeeData){
          return new Promise((resolve, reject) => {
            for( let i = 0; i < employees.length; i++ ) 
                {
                    if (employeeData.employeeNum = employees[i].employeeNum)
                        {
                            empĺoyees[i]=employeeData;
                        }
                }
                resolve();
          })
      }
 