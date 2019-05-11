import React from 'react';
import TodoContainer from "./todo";
import FormContainer from "./form";
import { StoreContainer } from "./store"


function App() {
  return (
    <div className="App">
      <StoreContainer.Provider>
        <FormContainer />
        <TodoContainer />
      </StoreContainer.Provider>
    </div>
  );
}

export default App;
