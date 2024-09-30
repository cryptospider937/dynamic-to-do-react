import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TodoApp from './components/TodoApp.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodoApp />
  </StrictMode>,
)
