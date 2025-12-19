import { useState } from "react";
import ComponentA from "./components/componentA";
import ComponentB from "./components/componentB";
import StatusToggle from "./components/toggel"; 

function App() {
  const [status, setStatus] = useState(false);

  const toggleStatus = () => {
    setStatus(!status);
  };

  return (
    <div>
      <button onClick={toggleStatus}>Toggle Status</button>

      {status ? <ComponentA /> : <ComponentB />}
    </div>
  );
}

export default App;
