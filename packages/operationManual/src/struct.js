// 这个文件只是为了让IDE知道有这些字段

export class GuideTpl {
  type;
  title;
  desc;
  start_task_types;
  start_task_inputs;
  hidden;
  allow_undo;
  beforeRemove = () => {return true;};
}

export class TaskTpl {
  type;
  title;
  desc;
  required_inputs = [];
  required_outputs = [];
  show_do_button = false;
  show_done_button = true;
  do_button_title = 'Do it';
  done_button_title = 'done';
  next_tasks = () => {return [];}; // array、function()return array
  onDoClick = () => {};
  onDoneClick = () => {};
  beforeActive = () => {};
  beforeComplete = () => {};
  beforeUndoEnter = () => {};
  beforeUndoLeave = () => {};
  beforeRedoEnter = () => {};
  beforeRedoLeave = () => {};
}
