import { useState, type ChangeEvent, type FormEvent } from 'react';
import { ChevronRight } from 'lucide-react';
import { FINISHES, PRODUCTS, type Finish, type ProductType } from '../catalog';

interface QuoteFormProps {
  productType: ProductType;
  finish: Finish;
  onProductTypeChange: (type: ProductType) => void;
  onFinishChange: (finish: Finish) => void;
}

interface FormState {
  name: string;
  business: string;
  email: string;
  phone: string;
  size: string;
  quantity: string;
  notes: string;
}

const emptyForm: FormState = { name: '', business: '', email: '', phone: '', size: '', quantity: '', notes: '' };

const inputClass =
  'w-full px-4 py-3 rounded-2xl bg-white border-2 border-emerald-100 text-emerald-900 placeholder:text-emerald-700/40 focus:outline-none focus:border-lime-500 transition-colors';
const labelClass = 'block text-xs font-bold uppercase tracking-wider text-emerald-200 mb-2';

const QuoteForm = ({ productType, finish, onProductTypeChange, onFinishChange }: QuoteFormProps) => {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  const sizes = PRODUCTS.find((p) => p.type === productType)?.sizes ?? [];
  const size = sizes.includes(form.size) ? form.size : sizes[0] ?? '';

  const handleChange =
    (field: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = { ...form, size, productType, finish };
    // TODO: send `payload` to your backend, Formspree, or an email service.
    console.log('Quote request', payload);
    setSubmitted(true);
  };

  return (
    <section id="quote" className="relative z-10 py-24 px-6">
      <div className="max-w-3xl mx-auto bg-emerald-900 rounded-[3rem] p-8 md:p-14 text-white shadow-2xl">
        <div className="text-center mb-10 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">Start Your Design</h2>
          <p className="text-emerald-200/80 font-medium">Tell us what you need and we'll come back with a quote.</p>
        </div>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <p className="text-2xl font-bold text-lime-300">Thank you, {form.name || 'friend'}!</p>
            <p className="text-emerald-200/80">We've got your request and will be in touch shortly.</p>
            <button
              type="button"
              onClick={() => { setForm(emptyForm); setSubmitted(false); }}
              className="px-6 py-2 rounded-full bg-emerald-800 text-emerald-200 text-sm font-bold hover:bg-emerald-700 transition-colors"
            >
              Send another request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className={labelClass}>Your name</label>
              <input id="name" required className={inputClass} value={form.name} onChange={handleChange('name')} />
            </div>
            <div>
              <label htmlFor="business" className={labelClass}>Shop / brand</label>
              <input id="business" required className={inputClass} value={form.business} onChange={handleChange('business')} />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>Email</label>
              <input id="email" type="email" required className={inputClass} value={form.email} onChange={handleChange('email')} />
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>Phone / WhatsApp</label>
              <input id="phone" type="tel" className={inputClass} value={form.phone} onChange={handleChange('phone')} />
            </div>

            <div>
              <label htmlFor="product" className={labelClass}>Packaging type</label>
              <select
                id="product"
                className={inputClass}
                value={productType}
                onChange={(e) => onProductTypeChange(e.target.value as ProductType)}
              >
                {PRODUCTS.map((p) => (
                  <option key={p.id} value={p.type}>{p.type}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="size" className={labelClass}>Size</label>
              <select id="size" className={inputClass} value={size} onChange={handleChange('size')}>
                {sizes.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="finish" className={labelClass}>Finish</label>
              <select
                id="finish"
                className={inputClass}
                value={finish}
                onChange={(e) => onFinishChange(e.target.value as Finish)}
              >
                {FINISHES.map((f) => (
                  <option key={f} value={f}>{f}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="quantity" className={labelClass}>Approx. quantity</label>
              <input
                id="quantity"
                type="number"
                min={1}
                required
                className={inputClass}
                value={form.quantity}
                onChange={handleChange('quantity')}
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="notes" className={labelClass}>Anything else?</label>
              <textarea id="notes" rows={4} className={inputClass} value={form.notes} onChange={handleChange('notes')} />
            </div>

            <button
              type="submit"
              className="sm:col-span-2 px-8 py-4 bg-lime-400 text-emerald-900 rounded-full font-bold hover:bg-lime-300 transition-all transform hover:scale-[1.02] shadow-xl flex items-center justify-center gap-2"
            >
              Request a Quote <ChevronRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default QuoteForm;
