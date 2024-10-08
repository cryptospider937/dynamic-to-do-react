import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import TodoList from "./TodoList";

function TodoApp() {
  return (
    <div className="container p-2 mx-auto">
      <div className="flex flex-row flex-wrap">
        <main role="main" className="w-full pt-1 px-2">
          <h1 className="mt-8 mb-8" id="home">
            Todo App
          </h1>
          <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow">
            <div className="h-full flex-1 flex-col space-y-8 p-8 ">
              <div className="flex items-center justify-between space-y-2">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">
                    Welcome back!
                  </h2>
                  <p className="text-muted-foreground">
                    Here's a list of your tasks for this month!
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              <TodoList />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default TodoApp;
