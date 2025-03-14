import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';

// Mock data to demonstrate the dashboard
import { gameData } from '../data/mockData';

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <>
      <Head>
        <title>Netflix Games ASO Dashboard</title>
        <meta name="description" content="App Store Optimization analytics for Netflix Games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <header className="bg-netflix-red text-white p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">
                <div className="flex items-center">
                  <div className="mr-3">
                    <img 
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netflix/netflix-original.svg" 
                      alt="Netflix Logo" 
                      className="h-10" 
                    />
                  </div>
                  <span>Games ASO Dashboard</span>
                </div>
              </h1>
            </div>
            <div className="flex space-x-4">
              <button className="px-4 py-2 rounded bg-white text-netflix-red font-bold hover:bg-gray-100">
                Export Data
              </button>
            </div>
          </div>
        </header>

        <div className="container mx-auto py-8 px-4">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-netflix-red"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Featured Game Card */}
              <div className="col-span-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <img 
                      src="https://img.icons8.com/color/96/squid-game--v1.png" 
                      alt="Squid Game Icon" 
                      className="w-16 h-16 mr-4"
                    />
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white">Squid Game: Unleashed</h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Last updated: March 10, 2025
                      </p>
                    </div>
                  </div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    +24% Installs
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Total Installs</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">2.4M</p>
                    <p className="text-sm text-green-600 dark:text-green-400">+12% from last month</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 dark:text-gray-400">ASO Conversion</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">3.8%</p>
                    <p className="text-sm text-green-600 dark:text-green-400">+0.5% from last month</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Keywords Ranked #1-3</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">14</p>
                    <p className="text-sm text-green-600 dark:text-green-400">+3 from last month</p>
                  </div>
                </div>
              </div>
              
              {/* Key Performance Cards */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">App Store Performance</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Installs</span>
                    <span className="font-bold text-gray-900 dark:text-white">1.6M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Conversion Rate</span>
                    <span className="font-bold text-gray-900 dark:text-white">4.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Featured</span>
                    <span className="font-bold text-gray-900 dark:text-white">Yes (Games)</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Google Play Performance</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Installs</span>
                    <span className="font-bold text-gray-900 dark:text-white">0.8M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Conversion Rate</span>
                    <span className="font-bold text-gray-900 dark:text-white">3.5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Featured</span>
                    <span className="font-bold text-gray-900 dark:text-white">No</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Top Keywords</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">squid game</span>
                    <span className="font-bold text-gray-900 dark:text-white">#1</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">battle royale</span>
                    <span className="font-bold text-gray-900 dark:text-white">#3</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">netflix games</span>
                    <span className="font-bold text-gray-900 dark:text-white">#1</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">survival game</span>
                    <span className="font-bold text-gray-900 dark:text-white">#5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">pvp games</span>
                    <span className="font-bold text-gray-900 dark:text-white">#12</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
