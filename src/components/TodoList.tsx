import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import TodoItem, { TodoItemType } from "./TodoItem";
import { getTodos } from "../services/utils";
import AddTodoItem from "./AddTodoItem";

const TodoList = () => {
  const [data, setData] = useState([]);
  const getLocalStorageData = localStorage.getItem("todos");

  const fetchTodosFromAPI = async (url: string) => {
    try {
      const result = await getTodos(url);
      setData(result.todos);
      localStorage.setItem("todos", JSON.stringify(result.todos));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const updateData = (obj: TodoItemType, taskType: string) => {
    const tempData = [...data];
    let result = [];
    switch (taskType) {
      case "UPDATE":
        tempData.find((o: TodoItemType, i) => {
          if (o.id === obj.id) {
            tempData[i].completed = !o.completed;
            setData(tempData);
            localStorage.setItem("todos", JSON.stringify(tempData));
            return true;
          }
        });
        break;
      case "DELETE":
        result = tempData.filter((o: TodoItemType) => {
          return o.id !== obj.id;
        });
        setData(result);
        localStorage.setItem("todos", JSON.stringify(result));
        break;
      case "ADD":
        tempData.push(obj);
        setData(tempData);
        localStorage.setItem("todos", JSON.stringify(tempData));
        break;
    }
  };

  useEffect(() => {
    if (getLocalStorageData) {
      const todos = JSON.parse(getLocalStorageData);
      setData(todos);
    } else {
      fetchTodosFromAPI("https://dummyjson.com/todos");
    }
  }, [getLocalStorageData]);

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex flex-1 items-center space-x-2">
          <Button variant="outline">Filter</Button>
          <Button variant="outline">Sort</Button>
        </div>
        <AddTodoItem updateData={updateData} />
      </div>
      <div className="rounded-md border">
        <div className="relative w-full overflow-auto">
          <Table>
            <TableCaption>A list of your recent todos.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Id</TableHead>
                <TableHead>UserId</TableHead>
                <TableHead>TodoItem Description</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((todoItem: TodoItemType) => {
                return (
                  <TodoItem
                    key={todoItem.id}
                    id={todoItem.id}
                    userId={todoItem.userId}
                    todo={todoItem.todo}
                    completed={todoItem.completed}
                    updateData={updateData}
                  />
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default TodoList;
