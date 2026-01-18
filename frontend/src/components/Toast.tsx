import React, { useEffect } from "react";
import { X, CheckCircle, AlertCircle, InfoIcon } from "lucide-react";

export interface ToastMessage {
  id: string;
  type: "success" | "error" | "info" | "warning";
  title: string;
  message?: string;
  duration?: number;
}

interface ToastProps extends ToastMessage {
  onClose: (id: string) => void;
}

const Toast: React.FC<ToastProps> = ({
  id,
  type,
  title,
  message,
  duration = 4000,
  onClose,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, duration);

    return () => clearTimeout(timer);
  }, [id, duration, onClose]);

  const typeStyles = {
    success: "bg-green-50 border-green-200",
    error: "bg-red-50 border-red-200",
    info: "bg-blue-50 border-blue-200",
    warning: "bg-yellow-50 border-yellow-200",
  };

  const iconStyles = {
    success: "text-green-600",
    error: "text-red-600",
    info: "text-blue-600",
    warning: "text-yellow-600",
  };

  const titleStyles = {
    success: "text-green-900",
    error: "text-red-900",
    info: "text-blue-900",
    warning: "text-yellow-900",
  };

  const messageStyles = {
    success: "text-green-800",
    error: "text-red-800",
    info: "text-blue-800",
    warning: "text-yellow-800",
  };

  const getIcon = () => {
    switch (type) {
      case "success":
        return <CheckCircle className={`w-5 h-5 ${iconStyles[type]}`} />;
      case "error":
        return <AlertCircle className={`w-5 h-5 ${iconStyles[type]}`} />;
      case "info":
        return <InfoIcon className={`w-5 h-5 ${iconStyles[type]}`} />;
      case "warning":
        return <AlertCircle className={`w-5 h-5 ${iconStyles[type]}`} />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`border rounded-lg p-4 flex gap-3 items-start shadow-lg animate-in fade-in slide-in-from-top-2 ${typeStyles[type]}`}
    >
      <div className="flex-shrink-0">{getIcon()}</div>
      <div className="flex-1">
        <h3 className={`font-semibold text-sm ${titleStyles[type]}`}>
          {title}
        </h3>
        {message && (
          <p className={`text-sm mt-1 ${messageStyles[type]}`}>{message}</p>
        )}
      </div>
      <button
        onClick={() => onClose(id)}
        className="flex-shrink-0 ml-2 text-gray-400 hover:text-gray-600"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
};

interface ToastContainerProps {
  toasts: ToastMessage[];
  onClose: (id: string) => void;
}

export const ToastContainer: React.FC<ToastContainerProps> = ({
  toasts,
  onClose,
}) => {
  return (
    <div className="fixed top-4 right-4 z-50 space-y-2 max-w-md">
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} onClose={onClose} />
      ))}
    </div>
  );
};

// Hook для управління тостами
export const useToast = () => {
  const [toasts, setToasts] = React.useState<ToastMessage[]>([]);

  const addToast = (
    type: "success" | "error" | "info" | "warning",
    title: string,
    message?: string,
    duration?: number,
  ) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast: ToastMessage = { id, type, title, message, duration };
    setToasts((prev) => [...prev, newToast]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const success = (title: string, message?: string) =>
    addToast("success", title, message);
  const error = (title: string, message?: string) =>
    addToast("error", title, message);
  const info = (title: string, message?: string) =>
    addToast("info", title, message);
  const warning = (title: string, message?: string) =>
    addToast("warning", title, message);

  return {
    toasts,
    addToast,
    removeToast,
    success,
    error,
    info,
    warning,
  };
};
