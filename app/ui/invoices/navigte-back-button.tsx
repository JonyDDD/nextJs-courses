'use client';

import { ArrowLeftIcon } from '@heroicons/react/20/solid';
import { useRouter } from 'next/navigation';

const NavigateToBack = ({ url }: { url: string }) => {
  const router = useRouter();
  const navigateToBack = () => router.replace(url || '/dashboard');

  return (
    <ArrowLeftIcon
      className="mb-2 h-[20px] hover:cursor-pointer hover:text-orange-200"
      onClick={navigateToBack}
    />
  );
};

export default NavigateToBack;
