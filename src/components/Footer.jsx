import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
            Made with{' '}
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />{' '}
            by Shuvo Khan
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
