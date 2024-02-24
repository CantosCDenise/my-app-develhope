import { createRoot} from 'react-dom/client'
import { Hello } from './Hello'
import { App } from './App'
import { StrictMode } from 'react'
import './index.css'
import { Root } from './Root'
import ReactDOM from 'react-dom';

// createRoot(document.getElementById("root")).render(
//     <StrictMode>
// <App/></StrictMode>
// )

const root = document.querySelector('#root')

ReactDOM.render(<Root />, root)