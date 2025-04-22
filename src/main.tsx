import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './i18n';

const projectRoot = ReactDOM.createRoot(document.getElementById('root')!);
projectRoot.render(<App />);
