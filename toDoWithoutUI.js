const TODO = 'To Do';
const IN_PROGRESS = 'In Progress';
const DONE = 'Done';
const list = {
  "create a new practice task": "In Progress",
  "make a bed": "Done",
  "write a post": "To Do",
};
function changeStatus(task, changeStatus) {
  for (let searchTask in list) {
    if (task === searchTask) {
      if (changeStatus === TODO || changeStatus === IN_PROGRESS || changeStatus === DONE) {
        list[searchTask] = changeStatus;
        return list;
      } return 'Status is not valid';
    }
  } return 'Task is not found';
};

function addTask(addTask) {
  list[addTask] = TODO;
  return list;
};
function deleteTask(deleteTask) {
  if (deleteTask in list) {
    delete list[deleteTask];
    return list;
  } else {
    return 'Task not found';
  }
};
function showList() {
  let toDo = '';
  let inProgress = '';
  let done = '';
  for (let searchStatus in list) {
    if(list[searchStatus] === TODO) {
      toDo += ` "${searchStatus}", \n`;
    } else if (list[searchStatus] === IN_PROGRESS) {
      inProgress += ` "${searchStatus}", \n`
    } else if (list[searchStatus] === DONE) {
      done += ` "${searchStatus}", \n`
    } 
  } if (!toDo) toDo = `-\n`;
    else if (!inProgress) inProgress = `-\n`;
    else if (!done) done = `-\n`;
    
    return (`Todo:\n${toDo}` + `In Progress:\n${inProgress}` + `Done:\n${done}`);
}