import { toast } from 'react-toastify';

export const generateMessage= (message: string, type: string) => {
  switch (type) {
    case 'success':
      toast.success(message, {
        position: 'top-center',
        autoClose: 3000,
      });
      break;
    case 'error':
      toast.error(message, {
        position: 'top-center',
        autoClose: 3000,
      });
      break;
    default:
      toast.info(message, {
        position: 'top-center',
        autoClose: 3000,
      });
  }
};