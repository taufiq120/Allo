'use client'; // Mark this as a Client Component
import React from 'react';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6">Front Desk Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/queue">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold mb-4">Queue Management</h2>
            <p>Manage patient queues and update their status.</p>
          </div>
        </Link>
        <Link href="/appointments">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold mb-4">Appointment Management</h2>
            <p>Book, reschedule, or cancel appointments.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}