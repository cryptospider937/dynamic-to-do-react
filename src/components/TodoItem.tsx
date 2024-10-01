import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";

export type TodoItemType = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number
}

const TodoItem = ({id, userId, todo, completed}: TodoItemType) => {
  return (
    <TableRow>
      <TableCell className="font-medium">{id}</TableCell>
      <TableCell>{userId}</TableCell>
      <TableCell>{todo}</TableCell>
      <TableCell className="text-right">{completed ? 'Completed' : 'Pending'}</TableCell>
    </TableRow>
  );
};

export default TodoItem;
