'use client'; // Mark this as a Client Component
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function QueuePage() {
  const [queue, setQueue] = useState([]);

  useEffect(() => {
    fetchQueue();
  }, []);

  const fetchQueue = async () => {
    try {
      const response = await axios.get('http://localhost:3000/queue');
      setQueue(response.data);
    } catch (error) {
      toast.error('Failed to fetch queue');
    }
  };

  const updateStatus = async (id, newStatus) => {
    try {
      await axios.put(`http://localhost:3000/queue/${id}/status`, { status: newStatus });
      fetchQueue();
    } catch (error) {
      toast.error('Failed to update status');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <ToastContainer />
      <h1 className="text-2xl font-bold mb-6">Queue Management</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">Patient Name</th>
              <th className="text-left p-2">Status</th>
              <th className="text-left p-2">Priority</th>
              <th className="text-left p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {queue.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="p-2">{item.patient.name}</td>
                <td className="p-2">{item.status}</td>
                <td className="p-2">{item.priority}</td>
                <td className="p-2">
                  <select
                    value={item.status}
                    onChange={(e) => updateStatus(item.id, e.target.value)}
                    className="p-1 border rounded-md"
                  >
                    <option value="waiting">Waiting</option>
                    <option value="with_doctor">With Doctor</option>
                    <option value="completed">Completed</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          onClick={() => fetchQueue()}
        >
          Refresh Queue
        </button>
      </div>
    </div>
  );
}