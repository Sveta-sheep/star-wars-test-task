import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ToastProvider = () => (
  <ToastContainer autoClose={4000} newestOnTop closeOnClick pauseOnFocusLoss draggable pauseOnHover />
);
