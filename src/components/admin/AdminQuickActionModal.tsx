'use client';

import { FormEvent, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Loader2, X } from 'lucide-react';

type Field = {
  name: string;
  label: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'tel' | 'date' | 'number' | 'textarea' | 'select';
  options?: string[];
};

type Props = {
  open: boolean;
  title: string;
  eyebrow: string;
  submitLabel: string;
  fields: Field[];
  busy?: boolean;
  onClose: () => void;
  onSubmit: (values: Record<string, string>) => void | Promise<void>;
};

export default function AdminQuickActionModal({
  open,
  title,
  eyebrow,
  submitLabel,
  fields,
  busy = false,
  onClose,
  onSubmit,
}: Props) {
  const [values, setValues] = useState<Record<string, string>>({});

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    await onSubmit(values);
    setValues({});
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            aria-label="Close dialog backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[110] bg-[#0B1C2C]/65 backdrop-blur-md"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="admin-action-title"
            initial={{ opacity: 0, scale: 0.96, y: 28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 28 }}
            className="admin-action-modal fixed left-1/2 top-1/2 z-[120] w-[min(92vw,46rem)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[2rem] border border-osg-navy/10 bg-white shadow-premium"
          >
            <div className="flex items-start justify-between gap-6 border-b border-osg-navy/10 bg-[#F8F9FB] p-6 sm:p-8">
              <div className="min-w-0">
                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-osg-gold">{eyebrow}</p>
                <h2 id="admin-action-title" className="mt-2 text-3xl font-black uppercase leading-none text-osg-navy sm:text-4xl">
                  {title}
                </h2>
              </div>
              <button
                type="button"
                aria-label="Close dialog"
                onClick={onClose}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-osg-navy/10 bg-white text-osg-navy/50 transition hover:text-red-600"
              >
                <X size={22} />
              </button>
            </div>

            <form onSubmit={submit} className="max-h-[70vh] space-y-5 overflow-y-auto p-6 sm:p-8">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {fields.map((field) => {
                  const commonProps = {
                    id: field.name,
                    value: values[field.name] || '',
                    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
                      setValues((current) => ({ ...current, [field.name]: event.target.value })),
                    className:
                      'w-full rounded-2xl border border-osg-navy/10 bg-white px-4 py-3 text-sm font-bold text-osg-navy outline-none transition placeholder:text-osg-navy/30 focus:border-osg-gold focus:ring-4 focus:ring-osg-gold/10',
                    placeholder: field.placeholder,
                  };

                  return (
                    <label key={field.name} className={field.type === 'textarea' ? 'sm:col-span-2' : ''}>
                      <span className="mb-2 block text-[10px] font-black uppercase tracking-[0.2em] text-osg-navy/45">
                        {field.label}
                      </span>
                      {field.type === 'textarea' ? (
                        <textarea {...commonProps} rows={5} />
                      ) : field.type === 'select' ? (
                        <select {...commonProps}>
                          {(field.options || []).map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input {...commonProps} type={field.type || 'text'} />
                      )}
                    </label>
                  );
                })}
              </div>

              <button type="submit" disabled={busy} className="btn-cta w-full !py-4 !text-[11px]">
                {busy ? <Loader2 className="animate-spin" size={20} /> : submitLabel}
              </button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
