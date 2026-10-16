import { motion } from 'framer-motion';
import { ChevronRight, Package } from 'lucide-react';
import { FINISHES, PRODUCTS, type Finish, type ProductType } from '../catalog';

interface ProductShowcaseProps {
  finish: Finish;
  onFinishChange: (finish: Finish) => void;
  onCustomize: (type: ProductType) => void;
}

const previewClasses: Record<Finish, string> = {
  Matte: 'bg-emerald-100',
  Holographic: 'bg-gradient-to-tr from-indigo-300 via-lime-300 to-pink-300 animate-pulse',
  Window: 'bg-emerald-200 border-8 border-emerald-100',
  'Custom Print': 'bg-yellow-100 border-4 border-dashed border-emerald-500',
};

const ProductShowcase = ({ finish, onFinishChange, onCustomize }: ProductShowcaseProps) => (
  <section id="showcase" className="relative z-10 py-24 px-6 bg-emerald-50/50">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20 space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 tracking-tight">Curated Collections</h2>
        <p className="text-emerald-700/70 font-medium">Tactile quality you can feel through the screen.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {PRODUCTS.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -10 }}
            className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-emerald-100 group"
          >
            <div className="w-14 h-14 bg-lime-100 rounded-2xl mb-6 flex items-center justify-center group-hover:bg-lime-500 group-hover:text-white transition-colors">
              <Package className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-emerald-900 mb-3">{product.label}</h3>
            <p className="text-emerald-700/60 text-sm leading-relaxed mb-6">{product.description}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {product.sizes.map((size) => (
                <span
                  key={size}
                  className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase rounded-full border border-emerald-100"
                >
                  {size}
                </span>
              ))}
            </div>

            <button
              type="button"
              onClick={() => onCustomize(product.type)}
              className="w-full py-3 rounded-2xl border-2 border-emerald-100 text-emerald-800 font-bold text-sm hover:bg-emerald-800 hover:text-white transition-all flex items-center justify-center gap-2 group-hover:border-emerald-800"
            >
              Customize <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </div>

      {/* Finish preview */}
      <div className="mt-24 bg-emerald-900 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold">Tailor Your Texture</h3>
            <p className="text-emerald-200/80 font-medium">
              Select a finish to see how your brand transforms from subtle elegance to high-energy attraction.
            </p>
            <div className="flex flex-wrap gap-3">
              {FINISHES.map((f) => (
                <button
                  type="button"
                  key={f}
                  onClick={() => onFinishChange(f)}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                    finish === f
                      ? 'bg-lime-400 text-emerald-900 shadow-lg scale-110'
                      : 'bg-emerald-800 text-emerald-300 hover:bg-emerald-700'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <motion.div
              key={finish}
              initial={{ opacity: 0, rotate: 10, scale: 0.9 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              className={`w-48 h-64 rounded-3xl shadow-2xl transition-all duration-500 flex items-center justify-center ${previewClasses[finish]}`}
            >
              <span className="text-emerald-900 font-bold text-xs uppercase tracking-widest opacity-50">Preview</span>
            </motion.div>
          </div>
        </div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-lime-500/20 rounded-full blur-3xl" />
      </div>
    </div>
  </section>
);

export default ProductShowcase;
