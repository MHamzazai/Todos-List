#! /usr/bin/env node
import inquirer from "inquirer";

// greeting the user

console.log("WELCOME! To Your Todays Todos list. ");

// storing task in a array

let todos : string[] = ["To take a shower", "To perform salah", "To eat breakfast", "To do exercise", "To do officework"];

// asking the first question

let todosList = await inquirer.prompt(
    [
        {
            message: "Select The Option Which You Want To Do In Your Todos list.!",
            type: "list",
            name: "list",
            choices:["To Add New Task", "To Remove Task", "Check Your Todos List",],
        },
    ]
);  

// now to add first conditions for user

if(todosList.list === "To Add New Task"){
    let newTask = await inquirer.prompt(
    [
        {
            message: "Enter Your New Task.",
            type: "string",
            name: "new",
        },
    ]
); 
// printing the result

console.log("Your New Task Is Added Below!.");

// by using unshift() method

todos.unshift(newTask.new);

// by using forEach loop method

todos.forEach(mode => {
    console.log(mode);
});
} 

// now second condition for user

else if(todosList.list === "To Remove Task"){
    let removeTask = await inquirer.prompt(
        [
            {
            message: "Select the task which you want to remove!.",
            name: "remove",
            type: "list",
            choices:["To take a shower", "To perform salah", "To eat breakfast", "To do exercise", "To do officework"],
            },
        ]
    );

    // printing the result

    console.log(`Your ${removeTask.remove}, Task Is Removed From Your List!. `);
}

//now printing the third condition

else if(todosList.list === "Check Your Todos List") {
    console.log("Your Todos list Are Displayed Below!.");
    todos.forEach(mode => {
        console.log(mode);
    });
}

   
