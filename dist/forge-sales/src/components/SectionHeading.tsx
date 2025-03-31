
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  subtitleClassName?: string;
  gradient?: boolean;
}

const SectionHeading = ({
  title,
  subtitle,
  centered = true,
  className,
  subtitleClassName,
  gradient = false,
}: SectionHeadingProps) => {
  return (
    <div className={cn(
      centered ? 'text-center' : 'text-left',
      'mb-12',
      className
    )}>
      <h2 className={cn(
        'text-3xl md:text-4xl lg:text-5xl font-bold font-display',
        gradient ? 'text-gradient' : 'text-white',
        'mb-4 tracking-tight'
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          'text-lg md:text-xl text-revup-gray max-w-3xl',
          centered ? 'mx-auto' : '',
          subtitleClassName
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
