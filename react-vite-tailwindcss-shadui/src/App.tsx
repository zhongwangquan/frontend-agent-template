import "./App.css";
import { Button } from "@/components/ui/button";
function App() {
  return (
    <>
      <div className="flex min-h-svh flex-col items-center justify-center">
        <Button variant="default" className="!text-primary-foreground">
          Click me
        </Button>
      </div>
    </>
  );
}

export default App;
