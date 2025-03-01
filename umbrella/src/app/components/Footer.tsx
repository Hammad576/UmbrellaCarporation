"use client";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 mt-12">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm text-gray-400 mb-4">
          &copy; {new Date().getFullYear()} Umbrella Corporation. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#"
            className="text-green-400 hover:text-green-500 transition-colors"
          >
            Facebook
          </a>
          <a
            href="#"
            className="text-green-400 hover:text-green-500 transition-colors"
          >
            Twitter
          </a>
          <a
            href="#"
            className="text-green-400 hover:text-green-500 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}