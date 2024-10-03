import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TodoItemType } from "./TodoItem";

const AddTodoItem = ({ updateData }: TodoItemType) => {
  const [obj, setObj] = useState({});

  const onInputChange = (e) => {
    setObj({
      ...obj,
      [e.target.id]: e.target.value,
    });
  };

  const onSelectChange = (value) => {
    setObj({
      ...obj,
      completed: value,
    });
  };

  const onSaveClick = () => {
    const data: TodoItemType = { ...obj };
    data.id = Number(data.id);
    data.userId = Number(data.userId);
    updateData(data, "ADD");
  };

  const isFormValid = () => {
    const { id, userId, todo, completed } = obj;

    if (
      id != undefined &&
      userId != undefined &&
      todo?.length > 0 &&
      (completed === true || completed === false)
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Dialog onOpenChange={() => setObj({})}>
      <DialogTrigger asChild>
        <Button variant="outline">Add</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a todo</DialogTitle>
          <DialogDescription>Click save when you're done.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="id" className="text-right">
              Id
            </Label>
            <Input
              id="id"
              type="number"
              className="col-span-3"
              onChange={onInputChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="userId" className="text-right">
              UserId
            </Label>
            <Input
              id="userId"
              type="number"
              className="col-span-3"
              onChange={onInputChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input id="todo" className="col-span-3" onChange={onInputChange} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <div className="text-right">Status</div>
            <div className="col-span-3">
              <Select onValueChange={onSelectChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select todo status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={true}>Completed</SelectItem>
                  <SelectItem value={false}>Pending</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              type="submit"
              onClick={onSaveClick}
              disabled={!isFormValid()}
            >
              Save
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoItem;
