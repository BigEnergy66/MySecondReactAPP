import { Clock, ShieldCheck, ShoppingBag, Truck } from 'lucide-react';

// Placeholder copy: replace with your real minimums, lead times and delivery terms.
const items = [
  { icon: ShoppingBag, title: 'Small-Batch Friendly', text: 'Order quantities that suit a new shop, not just big brands.' },
  { icon: Clock, title: 'Quick Turnaround', text: 'Clear production timelines, confirmed before you pay.' },
  { icon: Truck, title: 'Delivered To You', text: 'Shipping across South Africa straight to your shop.' },
  { icon: ShieldCheck, title: 'Built To Protect', text: 'Air-tight, smell-proof materials that keep product fresh.' },
];

const Practicals = () => (
  <section id="practicals" className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
    <div className="text-center mb-16 space-y-4">
      <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 tracking-tight">The Practical Bits</h2>
      <p className="text-emerald-700/70 font-medium">Beautiful is nice. Reliable is better.</p>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map(({ icon: Icon, title, text }) => (
        <div key={title} className="bg-white/70 p-6 rounded-3xl border border-emerald-100">
          <div className="w-12 h-12 bg-lime-100 rounded-2xl mb-4 flex items-center justify-center">
            <Icon className="w-6 h-6 text-emerald-700" />
          </div>
          <h3 className="font-bold text-emerald-900 mb-2">{title}</h3>
          <p className="text-sm text-emerald-700/70 leading-relaxed">{text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Practicals;
