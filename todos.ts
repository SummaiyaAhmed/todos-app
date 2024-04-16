#! /usr/bin/env node

import inquirer from 'inquirer'



//making to do list app 

console.log("\nWelcome to Todo list app\n ");
let todo_list: string[] = [];
let while_condition: boolean = true;

while (while_condition===true) {
  // ....................options.............
  let option = await inquirer.prompt(
    [
      {
        name: "user_option",
        type: "list",
        message: "select an option?",
        choices: ["add", "remove", "display", "exit"]
      }


    ]
  );

  //  .............Add.........
  if (option.user_option === "add") {
    let ans = await inquirer.prompt(
      [
        {
          name: "add_todo",
          type: "input",
          message: "Enter your todo: "
        }
      ]
    );
    if (ans.add_todo !== "") {
      todo_list.push(ans.add_todo);
      console.log(todo_list);


    }
    else {console.log("please write something to add in todo list.");

    }
}


// ..............remove............
else if (option.user_option === "remove") {
  let removechoice = await inquirer.prompt([{
    name: "remove_item",
    type: "list",

    message: "select a item to remove",
    choices: todo_list



  }]);
  let index_to_remove = todo_list.indexOf(removechoice.remove_item);
  if (index_to_remove >=0) {
    todo_list.splice(index_to_remove,1);
    console.log("you removed : " ,removechoice.remove_item)
    console.log(todo_list);
    
}
}
//...............confirmation to exit or continue........
let user_ans = await inquirer.prompt([{
  type: "confirm",
  name: "selection",
  message: "do you want to continue?",
  default: true


}])
if(user_ans.selection===false){
  while_condition=false;
  // console.log("\nThank you for using Todo list app\n");
}

}

console.log(`\nThank you for using Todo list app\n`);
