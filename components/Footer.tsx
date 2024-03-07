import React from 'react';
import CosmicLogo from './logos/CosmicLogo';
import Link from 'next/link';

export default function Footer(): JSX.Element {
  return (
    <footer className="mx-auto flex w-full max-w-3xl items-center justify-between px-4 py-4 text-xs md:text-sm lg:px-0 lg:text-base">
      <Link
        href="/"
        target="_blank"
        className="no-underline"
      >
        <div className="flex items-center space-x-2">
          <CosmicLogo />
          <span className="text-zinc-700 dark:text-zinc-300">
            Desarrollado con NextJS
          </span>
        </div>
      </Link>
      <div className="text-zinc-700 dark:text-zinc-300">
        &copy;&nbsp;&nbsp;{new Date().getFullYear()} Empresa
      </div>
    </footer>
  );
}
