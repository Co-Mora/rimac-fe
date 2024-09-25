import { LogoColor } from './icons';
import { Phone } from 'lucide-react';
const NavBar = () => {
  return (
    <header className="bg-gray-50 p-4 px-32 flex justify-between items-center">
      <LogoColor className="h-10 w-auto mb-2 fill-red-600" />
      <div className="flex items-center space-x-2">
        <span className="mr-2 text-gray-600">¿Compra por este medio?</span>
        <div className="flex flex-row items-center space-x-2">
          <Phone size={18} />
          <span className="font-bold">(01) 411 6001</span>
        </div>
      </div>
    </header>
  );
};

export { NavBar };
