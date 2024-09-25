import { LogoColor } from './icons';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 bg-black p-4 px-32 flex justify-between items-center w-full">
      <LogoColor className="h-10 w-auto mb-2 fill-white" />
      <div className="flex items-center">
        <span className="text-white font-bold">
          © 2024 RIMAC Seguros y Reaseguros.
        </span>
      </div>
    </footer>
  );
};

export { Footer };
