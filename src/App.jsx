import { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Input from "./components/Input";

function App() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleAddTask(event) {
    event.preventDefault();

    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: Math.floor(Math.random() * Date.now()),
        name: newTask,
        completed: false,
      },
    ]);

    event.target.task.value = "";
  }

  function handleCompleteTask(id) {
    const updateTask = tasks.map((task) => {
      if (id === task.id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }

      return task;
    });

    setTasks(updateTask);
  }

  function handleDeleteTask(id) {
    const deleteTask = tasks.filter((task) => task.id !== id);
    setTasks(deleteTask);
  }

  return (
    <div className="bg-slate-100 min-h-screen flex justify-center items-center">
      <Card>
        <Card.Title>Todo List</Card.Title>

        <Card.Body>
          <h6 className="font-semibold text-sm">List tasks :</h6>
          <ol>
            {tasks.map((task) => (
              <li key={task.id} className="border-y py-2">
                <div className={"flex justify-between items-center"}>
                  <p className={task.completed ? "line-through" : ""}>
                    {task.name}
                  </p>

                  <div className="flex gap-1">
                    <button
                      onClick={() => handleCompleteTask(task.id)}
                      type="button"
                      className="px-1 shadow rounded text-sm bg-sky-600 text-white"
                    >
                      Done
                    </button>
                    <button
                      onClick={() => handleDeleteTask(task.id)}
                      type="button"
                      className="px-1 shadow rounded text-sm bg-red-600 text-white"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </Card.Body>

        <Card.Body>
          <form onSubmit={handleAddTask}>
            <div className="flex items-center gap-2">
              <Input
                name="task"
                id="task"
                onChange={(event) => setNewTask(event.target.value)}
              />

              <Button>Add Task</Button>
            </div>
          </form>
        </Card.Body>

        <Card.Footer>You have {tasks.length} task</Card.Footer>
      </Card>
    </div>
  );
}

export default App;
