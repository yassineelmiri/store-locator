import { useState, useEffect } from 'react';
import { StoreForm } from './components/StoreForm';
import { StoreMap } from './components/StoreMap';
import { SearchBar } from './components/SearchBar';
import type { Store, StoreFormData } from './types';
import logo from './assets/logo.png';

function App() {
  const [stores, setStores] = useState<Store[]>([]);
  const [filteredStores, setFilteredStores] = useState<Store[]>([]);
  const [mapCenter, setMapCenter] = useState<[number, number]>([46.603354, 1.888334]); // France center
  const [mapZoom, setMapZoom] = useState(6);

  useEffect(() => {
    const savedStores = localStorage.getItem('stores');
    if (savedStores) {
      setStores(JSON.parse(savedStores));
      setFilteredStores(JSON.parse(savedStores));
    }
  }, []);

  const handleStoreSubmit = (data: StoreFormData) => {
    const newStore: Store = {
      id: crypto.randomUUID(),
      ...data,
      services: data.services.split(',').map(s => s.trim()),
    };

    const updatedStores = [...stores, newStore];
    setStores(updatedStores);
    setFilteredStores(updatedStores);
    localStorage.setItem('stores', JSON.stringify(updatedStores));
    
    setMapCenter([newStore.latitude, newStore.longitude]);
    setMapZoom(13);
  };

  const handleSearch = (query: string) => {
    const lowercaseQuery = query.toLowerCase();
    const filtered = stores.filter(store => 
      store.name.toLowerCase().includes(lowercaseQuery) ||
      store.city.toLowerCase().includes(lowercaseQuery) ||
      store.postalCode.includes(lowercaseQuery)
    );
    setFilteredStores(filtered);

    if (filtered.length > 0) {
      setMapCenter([filtered[0].latitude, filtered[0].longitude]);
      setMapZoom(13);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-center">
          <img src={logo} alt="Logo" className="h-32" />
        </div>
        <h1 className="text-4xl font-bold text-center text-white">Store Locator</h1>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <StoreForm onSubmit={handleStoreSubmit} />
          </div>
          
          <div className="md:col-span-2 space-y-4">
            <SearchBar onSearch={handleSearch} />
            <StoreMap
              stores={filteredStores}
              center={mapCenter}
              zoom={mapZoom}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
