import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import UserList from './components/UserList.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <UserList />
  </Provider>
)
