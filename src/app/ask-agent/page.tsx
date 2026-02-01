'use client';

import { ChatKit, useChatKit } from '@openai/chatkit-react';
import Link from 'next/link';
import { useState } from 'react';

export default function AskAgentPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Initialize ChatKit with your backend
  const { control } = useChatKit({
    api: {
      async getClientSecret(existingSecret) {
        try {
          // If we already have a valid secret, try to refresh
          // Otherwise, get a new one
          const res = await fetch('/api/chatkit/session', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              // You can add a deviceId here for user tracking
              deviceId: localStorage.getItem('chatkit_device_id') || undefined,
            }),
          });

          if (!res.ok) {
            throw new Error('Failed to create session');
          }

          const data = await res.json();
          
          // Store device ID for future sessions
          if (!localStorage.getItem('chatkit_device_id')) {
            localStorage.setItem('chatkit_device_id', `user_${Date.now()}`);
          }

          setIsLoading(false);
          return data.client_secret;
        } catch (err) {
          console.error('ChatKit session error:', err);
          setError('Unable to connect to AI assistant. Please try again later.');
          setIsLoading(false);
          throw err;
        }
      },
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDFCFA] to-[#F0F7F1]">
      {/* Hero Header */}
      <section className="relative py-12 md:py-16 bg-gradient-to-br from-[#2D5A3D] to-[#1E3D29] overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ask Our AI Agent
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Get instant answers about Clark Pampanga. Our AI-powered assistant is here to help you 24/7.
          </p>
        </div>
      </section>

      {/* Chat Interface */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Error State */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl flex items-start gap-3">
            <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="font-semibold text-red-800">Connection Error</p>
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        )}

        {/* ChatKit Container */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          {/* Loading State */}
          {isLoading && (
            <div className="h-[500px] md:h-[600px] flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 border-4 border-[#2D5A3D] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-[#5A6B5C]">Connecting to AI Assistant...</p>
              </div>
            </div>
          )}
          
          {/* ChatKit Widget */}
          {!isLoading && !error && (
            <ChatKit
              control={control}
              className="h-[500px] md:h-[600px] w-full"
            />
          )}
        </div>

        {/* Features */}
        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-[#2D5A3D] to-[#4A7C59] rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-[#2C3E2D] mb-2">24/7 Availability</h3>
            <p className="text-sm text-[#5A6B5C]">Get answers anytime, day or night. Our AI never sleeps.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-[#5B9BD5] to-[#4A8BC9] rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-bold text-[#2C3E2D] mb-2">Instant Responses</h3>
            <p className="text-sm text-[#5A6B5C]">No waiting on hold. Get immediate answers to your questions.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-[#E07C3E] to-[#D06B2D] rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-bold text-[#2C3E2D] mb-2">Accurate Information</h3>
            <p className="text-sm text-[#5A6B5C]">Powered by official Clark data for reliable answers.</p>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-12 text-center">
          <p className="text-[#5A6B5C] mb-4">
            Need human assistance? Our team is always ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary">
              Contact Support
            </Link>
            <a href="tel:+6345-599-9000" className="btn-secondary flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Hotline
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}