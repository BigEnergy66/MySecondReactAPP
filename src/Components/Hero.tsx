import { motion } from 'framer-motion';
import { ChevronRight, Leaf, Sparkles, Wind } from 'lucide-react';

const Hero = () => (
  <section className="relative z-10 px-6 pt-16 pb-24 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lime-100 text-lime-700 text-xs font-bold uppercase tracking-wider">
        <Sparkles className="w-3 h-3" /> Design-Led Packaging
      </div>
      <h1 className="text-6xl lg:text-8xl font-bold leading-[1.1] tracking-tight text-emerald-900">
        Packaging that <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-lime-500">
          makes you bloom.
        </span>
      </h1>
      <p className="text-lg text-emerald-700/80 leading-relaxed max-w-lg font-medium">
        We create sophisticated, sensory-driven packaging for the modern cannabis club. From holographic
        mylars to precision pre-roll tubes, we help your brand feel established and unforgettable.
      </p>
      <div className="flex flex-wrap gap-4">
        <a
          href="#quote"
          className="px-8 py-4 bg-emerald-800 text-white rounded-full font-bold hover:bg-emerald-700 transition-all transform hover:scale-105 shadow-xl flex items-center gap-2"
        >
          Start Your Design <ChevronRight className="w-4 h-4" />
        </a>
        <a
          href="#showcase"
          className="px-8 py-4 border-2 border-emerald-200 text-emerald-800 rounded-full font-bold hover:bg-emerald-50 transition-all"
        >
          View Gallery
        </a>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, type: 'spring' }}
      className="relative"
    >
      <div className="relative w-full aspect-square flex items-center justify-center">
        <motion.div
          whileHover={{ rotate: -2, scale: 1.02 }}
          className="w-64 h-80 bg-white rounded-[3rem] shadow-2xl border-8 border-white relative overflow-hidden cursor-pointer"
          style={{ boxShadow: '0 25px 50px -12px rgba(5, 150, 105, 0.2)' }}
        >
          <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-lime-400 to-emerald-500 opacity-80" />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full mb-4 flex items-center justify-center">
              <Leaf className="text-emerald-600 w-8 h-8" />
            </div>
            <div className="h-2 w-24 bg-emerald-200 rounded-full mb-2" />
            <div className="h-2 w-16 bg-emerald-100 rounded-full" />
          </div>
          <div className="absolute bottom-4 right-4 w-12 h-12 bg-yellow-400 rounded-full blur-xl opacity-50" />
        </motion.div>

        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 right-10 bg-white p-4 rounded-2xl shadow-xl border border-emerald-50 flex items-center gap-3"
        >
          <div className="w-8 h-8 bg-lime-100 rounded-lg flex items-center justify-center">
            <Wind className="w-4 h-4 text-lime-600" />
          </div>
          <span className="text-xs font-bold text-emerald-800 uppercase">Smell-Proof Seal</span>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default Hero;
