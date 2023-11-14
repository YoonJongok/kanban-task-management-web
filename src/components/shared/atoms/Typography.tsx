import React, { HTMLAttributes, forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';

type TypographyElement = keyof Pick<
  JSX.IntrinsicElements,
  'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
>;
export type TypographyType =
  | 'heading-xl'
  | 'heading-lg'
  | 'heading-md'
  | 'heading-sm'
  | 'body-lg'
  | 'body-md';

type TypographyOverflow = 'ellipsis' | 'break-words' | 'break-all' | 'break-normal' | 'break-keep';

const typography = cva('', {
  variants: {
    type: {
      'heading-xl': ['text-[24px]', 'font-bold', 'leading-[30px]'],
      'heading-lg': ['text-[18px]', 'font-bold', 'leading-[23px]'],
      'heading-md': ['text-[15px]', 'font-bold', 'leading-[19px]'],
      'heading-sm': ['text-[12px]', 'font-bold', 'leading-[15px]'],
      'body-lg': ['text-[13px]', 'font-normal', 'leading-[23px]'],
      'body-md': ['text-[12px]', 'font-normal', 'leading-[15px]'],
    } satisfies Record<TypographyType, string[]>,
    overflow: {
      ellipsis: 'truncate',
      'break-words': 'break-words',
      'break-all': 'break-all',
      'break-normal': 'break-normal',
      'break-keep': 'break-keep',
    } satisfies Record<TypographyOverflow, string>,
  },
});

export interface ButtonProps
  extends Omit<HTMLAttributes<HTMLParagraphElement>, 'type'>,
    VariantProps<typeof typography> {
  type?: TypographyType;
  overflow?: TypographyOverflow;
  as?: TypographyElement;
}

const Typography = forwardRef<HTMLParagraphElement, ButtonProps>(
  (
    {
      className,
      children,
      type = 'body-md',
      overflow = titleTypes.includes(type) ? 'ellipsis' : undefined,
      title = overflow === 'ellipsis' && typeof children === 'string' ? children : undefined,
      as: CustomTypography = defaultElDict[type],
      ...props
    },
    ref
  ) => {
    return (
      <CustomTypography
        ref={ref}
        title={title}
        className={typography({ type, overflow, className })}
        {...props}
      >
        {children}
      </CustomTypography>
    );
  }
);

const defaultElDict: Record<TypographyType, TypographyElement> = {
  'heading-xl': 'h1',
  'heading-lg': 'h2',
  'heading-md': 'h3',
  'heading-sm': 'h4',
  'body-lg': 'p',
  'body-md': 'p',
};
const titleTypes: TypographyType[] = ['heading-xl', 'heading-lg'];

export default Typography;
