'use client'; // Mark this as a Client Component
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/dashboard">
          <span className="text-white text-xl font-bold cursor-pointer">Clinic Front Desk</span>
        </Link>
        <div className="space-x-4">
          <Link href="/queue">
            <span className="text-white hover:text-gray-200 cursor-pointer">Queue</span>
          </Link>
          <Link href="/appointments">
            <span className="text-white hover:text-gray-200 cursor-pointer">Appointments</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}