import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { setupStore } from './store/store'
import App from './App'
import './index.css'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={setupStore()}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
)
