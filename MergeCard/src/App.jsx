import MessageCard from './components/MergeCard';

function App() {
  return (
    <div className="app">
      <h1>Message Cards</h1>

      <MessageCard
        title="Welcome to React"
        message="React is a JavaScript library for building user interfaces. 
        It makes building complex UIs simple by breaking them down into reusable components."
      />

      <MessageCard
        title="Props Make Components Reusable"
        message="By using props, you can pass different data to the same component and render 
        it multiple times with unique content. This is the power of component-based architecture!"
      />

      <MessageCard
        title="Learn by Doing"
        message="The best way to learn React is to build projects. Start small, experiment with 
        different features, and gradually take on more complex challenges."
      />

      <MessageCard
        title="Keep Building"
        message="Every expert was once a beginner. Stay curious, keep coding, 
        and don't be afraid to make mistakes. They're your best teachers on this journey!"
      />
    </div>
  );
}

export default App;