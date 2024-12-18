import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { UserProvider } from './storage/UsersProvider.tsx'
import { FetchApiHttp } from './infra/http/FetchApiHttp.ts'
const http = new FetchApiHttp()
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserProvider http={http}>
    <App />
    </UserProvider>
  </StrictMode>,
)
