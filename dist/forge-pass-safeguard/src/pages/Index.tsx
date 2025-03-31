
import React from 'react';
import PasswordGenerator from '@/components/PasswordGenerator';
import { cn } from '@/lib/utils';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4 py-12">
      <div className={cn(
        "w-full max-w-[600px] mx-auto",
        "rounded-xl p-6 md:p-8",
        "bg-white",
        "shadow-sm border border-border",
        "transition-all duration-300 ease-out",
        "animate-slideUpAndFade"
      )}>
        <header className="text-center mb-8">
          <div className="inline-block rounded-full bg-forgeblue-light px-3 py-1 text-xs font-medium text-forgeblue mb-3">
            Secure Password Generator Demo
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            ForgePass
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            Create strong, unique passwords to enhance your online security.
          </p>
        </header>
        
        <PasswordGenerator />
        
        <footer className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          <p>
            Demo version. Passwords are generated in your browser and never stored or transmitted.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
