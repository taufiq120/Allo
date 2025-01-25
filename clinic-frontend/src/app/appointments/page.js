'use client'; // Mark this as a Client Component
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AppointmentsPage() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await axios.get('http://localhost:3000/doctor');
      setDoctors(response.data);
    } catch (error) {
      toast.error('Failed to fetch doctors');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <ToastContainer />
      <h1 className="text-2xl font-bold mb-6">Appointment Management</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Available Doctors</h2>
        <div className="space-y-4">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="border p-4 rounded-md">
              <h3 className="font-bold">{doctor.name}</h3>
              <p className="text-sm text-gray-600">{doctor.specialization}</p>
              <div className="mt-2">
                <p className="text-sm font-medium">Available Slots:</p>
                <div className="flex space-x-2 mt-1">
                  {doctor.availability.map((slot, index) => (
                    <button
                      key={index}
                      className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-600"
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}