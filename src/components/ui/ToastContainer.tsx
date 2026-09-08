import React from 'react';
import { useToast } from '../../context/ToastContext';
import { CheckCircle2, Info, AlertTriangle, X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts, dismissToast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div
      id="toast-container"
      className="fixed top-5 right-5 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none px-4 sm:px-0"
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          id={`toast-${toast.id}`}
          className="pointer-events-auto flex items-start gap-3 p-4 rounded-xl bg-[#1E1E1E]/95 border border-[#333333] shadow-2xl backdrop-blur-md text-[#FFF8EE] transition-all animate-in fade-in slide-in-from-top-2 duration-300"
        >
          <div className="mt-0.5 shrink-0">
            {toast.type === 'info' ? (
              <Info className="w-5 h-5 text-sky-400" />
            ) : toast.type === 'warning' ? (
              <AlertTriangle className="w-5 h-5 text-amber-400" />
            ) : (
              <CheckCircle2 className="w-5 h-5 text-[#F4B400]" />
            )}
          </div>
          <div className="flex-1 text-sm">
            <h4 className="font-bold text-white leading-tight">{toast.title}</h4>
            {toast.description && (
              <p className="text-xs text-neutral-300 mt-1 leading-snug">{toast.description}</p>
            )}
          </div>
          <button
            onClick={() => dismissToast(toast.id)}
            className="text-neutral-400 hover:text-white p-1 rounded-md transition-colors"
            aria-label="Dismiss notification"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};
