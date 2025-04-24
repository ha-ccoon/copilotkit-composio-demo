import { useState } from 'react';

import { useCopilotReadable } from '@copilotkit/react-core';
import { CopilotPopup } from '@copilotkit/react-ui';

import './App.css';

function App() {
  const [colleagues, setColleagues] = useState([
    { id: 1, name: 'John Doe', role: 'Developer' },
    { id: 2, name: 'Jane Smith', role: 'Designer' },
    { id: 3, name: 'Bob Wilson', role: 'Product Manager' },
  ]);

  // Define Copilot readable state
  useCopilotReadable({
    description: "The current user's colleagues",
    value: colleagues,
  });

  return (
    <>
      <CopilotPopup
        instructions={
          'You are assisting the user as best as you can. Answer in the best way possible given the data you have.'
        }
        labels={{
          title: 'Popup Assistant',
          initial: 'Need any help?',
        }}
      />
    </>
  );
}

export default App;
