import React from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  router.push('/news');
  return <div>Добро пожаловать на бета-версию Волонтерии</div>;
}
