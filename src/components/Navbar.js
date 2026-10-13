// components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <h1 className="text-xl font-bold">E-Ticaret Sitem</h1>
      <ul className="flex gap-4">
        
        <li><a href="/products">Ürünler</a></li>
        <li><a href="/cart">Sepetim</a></li>
      </ul>
    </nav>
  );
}