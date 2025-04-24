import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { CopilotKit } from '@copilotkit/react-core';

import App from './App.tsx';

import './index.css';

import '@copilotkit/react-ui/styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CopilotKit publicApiKey="ck_pub_03f3ae57a746976815930960b629c15e">
      <App />
    </CopilotKit>
  </StrictMode>,
);
