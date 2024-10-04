import { TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export type TodoItemType = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
  updateData: (...args: unknown[]) => unknown;
};

const TodoItem = ({
  id,
  userId,
  todo,
  completed,
  updateData,
}: TodoItemType) => {
  const onRowClick = (e) => {
    e.preventDefault();
    updateData({id}, 'UPDATE');
  };

  const deleteItem = (e) => {
    e.stopPropagation();
    updateData({id}, 'DELETE');
  };

  return (
    <TableRow onClick={onRowClick}>
      <TableCell className="font-medium">{id}</TableCell>
      <TableCell>{userId}</TableCell>
      <TableCell>{todo}</TableCell>
      <TableCell className="text-right">
        {completed ? (
          <Badge style={{ backgroundColor: "seagreen", color: "white" }}>
            Completed
          </Badge>
        ) : (
          <Badge variant="secondary">Pending</Badge>
        )}
      </TableCell>
      <TableCell onClick={deleteItem}>
        <Button variant="outline" className="hover:bg-red-500/30">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-archive-x h-4 w-4"
          >
            <rect width="20" height="5" x="2" y="3" rx="1"></rect>
            <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path>
            <path d="m9.5 17 5-5"></path>
            <path d="m9.5 12 5 5"></path>
          </svg>
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default TodoItem;
