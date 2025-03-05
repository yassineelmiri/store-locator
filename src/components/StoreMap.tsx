import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import type { Store } from '../types';
import L from 'leaflet';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface StoreMapProps {
  stores: Store[];
  center: [number, number];
  zoom: number;
}

export function StoreMap({ stores, center, zoom }: StoreMapProps) {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      className="w-full h-[600px] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {stores.map((store) => (
        <Marker
          key={store.id}
          position={[store.latitude, store.longitude]}
        >
          <Popup>
            <div className="p-2">
              <h3 className="font-bold text-lg text-gray-900">{store.name}</h3>
              <p className="text-gray-600">{store.city}</p>
              <p className="text-gray-600">{store.postalCode}</p>
              <div className="mt-2">
                <strong className="text-gray-900">Services:</strong>
                <ul className="list-disc list-inside text-gray-700">
                  {store.services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}