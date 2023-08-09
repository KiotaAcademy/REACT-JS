function TaskList(props) {
  return (
    <div>
      List of Tasks
      <li>{props.tasks.length}</li>
    </div>
  );
}

export default TaskList;
