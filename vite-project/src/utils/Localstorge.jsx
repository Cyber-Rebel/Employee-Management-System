const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "firstName": "Amit",
    "tasks": [
      {
        "title": "Sales Report Preparation",
        "description": "Prepare sales report",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "category": "Sales",
        "date": "2024-10-20"
      },
      {
        "title": "Client Meeting",
        "description": "Client meeting",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "category": "Client Relations",
        "date": "2024-10-21"
      },
      {
        "title": "Expense Report Submission",
        "description": "Submit expense report",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "category": "Finance",
        "date": "2024-10-19"
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "firstName": "Priya",
    "tasks": [
      {
        "title": "Team Meeting",
        "description": "Team meeting",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "category": "Management",
        "date": "2024-10-20"
      },
      {
        "title": "Project Plan Update",
        "description": "Update project plan",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "category": "Project Management",
        "date": "2024-10-18"
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "firstName": "Rohit",
    "tasks": [
      {
        "title": "Code Review",
        "description": "Code review",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "category": "Development",
        "date": "2024-10-19"
      },
      {
        "title": "Bug Fixes",
        "description": "Fix bugs in app",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "category": "Development",
        "date": "2024-10-20"
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    }
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "firstName": "Neha",
    "tasks": [
      {
        "title": "UI Design",
        "description": "Design new UI",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "category": "Design",
        "date": "2024-10-21"
      },
      {
        "title": "Wireframe Creation",
        "description": "Create wireframes",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "category": "Design",
        "date": "2024-10-17"
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "firstName": "Vikram",
    "tasks": [
      {
        "title": "Database Optimization",
        "description": "Database optimization",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "category": "Database",
        "date": "2024-10-20"
      },
      {
        "title": "Database Backup",
        "description": "Backup database",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true,
        "category": "Database",
        "date": "2024-10-18"
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 0,
      "failed": 1
    }
  }
];

const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123",
    "firstName": "Anjali"
  }
];


export const setLocalStorage=()=>{
   localStorage.setItem("employees", JSON.stringify(employees))
   localStorage.setItem("admin", JSON.stringify(admin))
   // es name se "employees" es data  save karo employees

}
setLocalStorage()
export const getLocalStorage=()=>{
  const employee= JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem("admin"))
  // console.log("Admin:", admin);
  // getItem only one arugment magta hae 
  //( ) es bracket se sirf ek hi data agega  use {  } bracket
  return {employee, admin} 
}






//"datas ",data
// esme datas nam se data storage hoga hae 
    