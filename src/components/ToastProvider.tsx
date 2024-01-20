import { ToastContainer } from 'react-toastify';

export const ToastProvider = () => (
  <ToastContainer autoClose={4000} newestOnTop closeOnClick pauseOnFocusLoss draggable pauseOnHover />
);
