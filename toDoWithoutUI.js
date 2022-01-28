const TODO = 'To Do';
const IN_PROGRESS = 'In Progress';
const DONE = 'Done';
const list = {
  "create a new practice task": "In Progress",
  "make a bed": "Done",
  "write a post": "To Do",
};
function changeStatus(task, changeStatus) {
    if (task in list) {
      if (changeStatus === TODO || changeStatus === IN_PROGRESS || changeStatus === DONE) {
        list[task] = changeStatus;
        return list;
      } return 'Status is not valid';
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
    return 'Task is not found';
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
    if (!inProgress) inProgress = `-\n`;
    if (!done) done = `-\n`;
    
    return (`Todo:\n${toDo}` + `In Progress:\n${inProgress}` + `Done:\n${done}`);
}