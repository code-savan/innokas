"use client"
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const productLinks = [
      { href: '/products/fruits', label: 'Fruits' },
    { href: '/products/frozen-foods', label: 'Frozen Foods' },
    { href: '/products/logistics', label: 'Logistics' },
    { href: '/products/farming', label: 'Farming' },
  ];

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    // { href: '/careers', label: 'Careers' },
    // { href: '/blog', label: 'News and Updates' },
    // { href: '/contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed bg-white w-full z-50 ${scrolled ? 'md:bg-white shadow-md md:py-2' : 'md:bg-transparent md:py-4 py-2'} `}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-primary">
            <Image src={"/logot.png"} alt='logo' className='md:w-[100px] w-[60px]' width={100} height={100} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${scrolled ? 'text-gray-600' : 'text-white'} hover:text-primary font-space-mono`}
              >
                {link.label}
              </Link>
            ))}

            {/* Products Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={`${scrolled ? 'text-gray-600' : 'text-white'} hover:text-primary font-space-mono`}>
                Products
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {productLinks.map((product) => (
                  <DropdownMenuItem key={product.href} className="cursor-pointer">
                    <Link
                      href={product.href}
                      className="w-full block py-2"
                    >
                      {product.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>


            <Link
                key={"/careers"}
                href={"/careers"}
                className={`${scrolled ? 'text-gray-600' : 'text-white'} hover:text-primary font-space-mono`}
              >
                Careers
              </Link>
            <Link
                key={"/blog"}
                href={"/blog"}
                className={`${scrolled ? 'text-gray-600' : 'text-white'} hover:text-primary font-space-mono`}
              >
                News and Updates
              </Link>
            <Link
                key={"/contact"}
                href={"/contact"}
                className={`${scrolled ? 'text-gray-600' : 'text-white'} hover:text-primary font-space-mono`}
              >
                Contact US
              </Link>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary font-space-mono"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              {/* Mobile Products Menu */}
              {productLinks.map((product) => (
                <Link
                  key={product.href}
                  href={product.href}
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary font-space-mono"
                  onClick={() => setIsOpen(false)}
                >
                  {product.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}















// "use client"
// import Link from 'next/link';
// import { Button } from './button';
// import { Menu } from 'lucide-react';
// import { useEffect, useState } from 'react';
// import Image from 'next/image';

// export default function Navigation() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const links = [
//     { href: '/', label: 'Home' },
//     { href: '/about', label: 'About Us' },
//     { href: '/products', label: 'Products' },
//     { href: '/careers', label: 'Careers' },
//     { href: '/blog', label: 'News and Updates' },
//     { href: '/contact', label: 'Contact' }
//   ];

//   return (
//     <nav className={`fixed bg-white w-full z-50 ${scrolled ? 'md:bg-white shadow-md py-2' : 'md:bg-transparent py-4'} `}>
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           <Link href="/" className="text-xl font-bold text-primary">
//            <Image src={"/logot.png"} alt='logo' className='md:w-[100px] w-[60px]' width={100} height={100} />
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex space-x-8">
//             {links.map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className={` ${scrolled ? 'text-gray-600' : 'text-white'} hover:text-primary font-space-mono`}
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </div>

//           {/* Mobile Navigation Button */}
//           <button
//             className="md:hidden"
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label="Toggle menu"
//           >
//             <Menu className="h-6 w-6" />
//           </button>
//         </div>

//         {/* Mobile Navigation Menu */}
//         {isOpen && (
//           <div className="md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               {links.map((link) => (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary font-space-mono"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }
