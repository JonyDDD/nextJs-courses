import { lusitana } from '@/app/ui/fonts';
import clsx from 'clsx';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div
        className={clsx(
          ' bg-yellow-500 p-4 text-lg text-gray-600',
          lusitana.className,
        )}
      >
        <p>
          Invoice Page
          <span className="inline-block text-blue-500 hover:translate-x-1">
            No.9527
          </span>
        </p>
      </div>
    </main>
  );
}
