import ProductList from "../components/ProductList";
import ProductForm from "../components/ProductForm";
import { useState } from "react";

export default function ProductsPage() {
  const [refresh, setRefresh] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleRefresh = () => {
    setRefresh(!refresh);
    setSelectedProduct(null);
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">🛒 Products Page</h1>
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          {selectedProduct ? '✏️ Edit Product' : '➕ Add New Product'}
        </h2>
        <ProductForm 
          onProductAdded={handleRefresh} 
          productToEdit={selectedProduct}
        />
      </div>
      <ProductList 
        key={refresh} 
        onEdit={handleEdit}
      />
    </div>
  );
}
