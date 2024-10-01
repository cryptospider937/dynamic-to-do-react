import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TodoItem, { TodoItemType } from "./TodoItem";
import { getTodos } from "../services/utils";

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

  useEffect(() => {
    if (getLocalStorageData) {
      const todos = JSON.parse(getLocalStorageData);
      setData(todos);
    } else {
      fetchTodosFromAPI("https://dummyjson.com/todos");
    }
  }, [getLocalStorageData]);

  return (
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
                />
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TodoList;
