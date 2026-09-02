
'use client';
import { useState } from 'react';
export function useToast() {
  const [toasts, setToasts] = useState<any[]>([]);
  const toast = (props: any) => setToasts([...toasts, props]);
  return { toasts, toast };
}
