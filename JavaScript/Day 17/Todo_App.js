let todo = [];
let req = prompt("please enter your request")
console.log(req);

while (true) {
    if (req == "quit") {
        console.log("quitting app");
        break;
    }
    if (req == "list") {
        console.log("_________________")
        for (task of todo) {
            console.log(task);
        }
        console.log("_______________");
        break;

    } else if (req == "add") {

        let task = prompt("please enter the task you want to add");
        todo.push(task)
        console.log("task add");
        
    } else if (req == "delete") {

        let idx = prompt("please enter the task index");
        todo.splice(idx, 1);
        console.log("task deleted");
    } else {
        console.log("wrong request");
    }
    req = prompt("please enter your request");
}