
'use client';

import { useToast } from "@/hooks/use-toast";
import { 
  Toast, 
  ToastClose, 
  ToastDescription, 
  ToastProvider, 
  ToastTitle, 
  ToastViewport 
} from "@/components/ui/toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }: any) {
        return (
          <Toast key={id} {...props} className="glass-panel border-white/10 p-4 rounded-2xl shadow-2xl flex items-center justify-between pointer-events-auto">
            <div className="grid gap-1">
              {title && <ToastTitle className="text-[10px] font-black uppercase tracking-widest text-primary">{title}</ToastTitle>}
              {description && (
                <ToastDescription className="text-[9px] text-white/60 font-medium uppercase tracking-wider">{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport className="fixed bottom-0 right-0 z-[100] flex flex-col p-6 gap-2 w-full max-w-[420px] outline-none" />
    </ToastProvider>
  );
}
