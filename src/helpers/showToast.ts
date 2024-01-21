import { toast } from 'react-toastify';

export type ToastTypes = 'info' | 'success' | 'warning' | 'error';

export const showToast = (message: string, type: ToastTypes = 'success') => {
  toast.dismiss();
  toast[type](message);
};
