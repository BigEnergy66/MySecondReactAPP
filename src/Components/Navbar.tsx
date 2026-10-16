import { Leaf } from 'lucide-react';

const Navbar = () => (
  <nav className="relative z-10 px-6 py-8 max-w-7xl mx-auto flex justify-between items-center">
    <a href="#top" className="flex items-center gap-2 group">
      <div className="w-10 h-10 bg-emerald-600 rounded-2xl rotate-12 group-hover:rotate-0 transition-transform duration-300 flex items-center justify-center shadow-lg">
        <Leaf className="text-white w-6 h-6" />
      </div>
      <span className="text-2xl font-bold tracking-tight text-emerald-800">
        Bloom<span className="text-lime-600">Pack</span>
      </span>
    </a>

    <div className="flex items-center gap-8 text-sm font-medium text-emerald-700">
      <a href="#showcase" className="hidden md:block hover:text-lime-600 transition-colors">Collections</a>
      <a href="#practicals" className="hidden md:block hover:text-lime-600 transition-colors">Details</a>
      <a
        href="#quote"
        className="bg-emerald-800 text-white px-5 py-2.5 rounded-full hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg"
      >
        Get Sample Pack
      </a>
    </div>
  </nav>
);

export default Navbar;
