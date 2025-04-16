'use client';

import { CSSProperties } from 'react';

const buttonClass = {
  outline:
    'bg-background text-(--variant) hover:bg-(--variant) hover:text-background',
  filled: 'bg-(--variant) text-background hover:bg-(--variant-hover)',
};

export interface ButtonRootProps {
  variant?: 'primary' | 'secondary' | 'tertiary-dark';
  filling?: 'outline' | 'filled';
  size?: 'sm' | 'base' | 'xl' | '2xl';
  radius?: '2xl' | '4xl';
  borderWidth?: 0 | 1;
}

export const getStyle = ({
  variant,
  size,
  borderWidth,
  radius,
}: {
  variant: string;
  size: string;
  borderWidth: number;
  radius: '2xl' | '4xl';
}): CSSProperties => ({
  ['--variant' as string]: `var(--${variant})`,
  ['--variant-hover' as string]: `var(--${variant}-hover)`,
  ['--radius' as string]: `var(--radius-${radius})`,
  fontSize: `var(--text-${size})`,
  borderWidth: borderWidth,
});

export const getClassName = ({
  filling,
  classes,
}: {
  filling: 'outline' | 'filled';
  classes: string;
}) =>
  `${buttonClass[filling]} font-semibold border-(--variant) rounded-(--radius) ${classes}`;
