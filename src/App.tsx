import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import ProductShowcase from './Components/ProductShowcase';
import Practicals from './Components/Practicals';
import QuoteForm from './Components/QuoteForm';
import { type Finish, type ProductType } from './catalog';

const App: React.FC = () => {
  const [selectedFinish, setSelectedFinish] = useState<Finish>('Matte');
  const [selectedProductType, setSelectedProductType] = useState<ProductType>('Mylar Bag');

  const handleCustomize = (type: ProductType) => {
    setSelectedProductType(type);
    const quoteElement = document.getElementById('quote');
    if (quoteElement) {
      quoteElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDF5] text-emerald-900 font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <ProductShowcase 
        finish={selectedFinish} 
        onFinishChange={setSelectedFinish} 
        onCustomize={handleCustomize} 
      />
      <Practicals />
      <QuoteForm 
        productType={selectedProductType}
        finish={selectedFinish}
        onProductTypeChange={setSelectedProductType}
        onFinishChange={setSelectedFinish}
      />
    </div>
  );
};

export default App;