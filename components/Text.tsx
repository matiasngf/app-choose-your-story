import classNames from 'classnames'
import React from 'react'

const textConfig = {
  fontType: {
    sans: 'font-sans',
    serif: 'font-serif'
  },
  color: {
    'slate-900': 'text-slate-900',
    'sky-600': 'text-sky-600',
    'indigo-700': 'text-indigo-700'
  },
  size: {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl'
  }
}

export interface TextProps {
  as?: string
  className?: string
  fontType?: keyof typeof textConfig.fontType
  color?: keyof typeof textConfig.color
  size?: keyof typeof textConfig.size
}

export const Text = React.forwardRef<
  HTMLParagraphElement,
  React.PropsWithChildren<TextProps>
>(
  (
    {
      className,
      children,
      as = 'div',
      fontType = 'serif',
      color = 'slate-900',
      size = 'lg',
      ...props
    },
    ref
  ) => {
    const TextComponent = as as any
    return (
      <TextComponent
        ref={ref}
        {...props}
        className={classNames(
          'leading-relaxed',
          textConfig.fontType[fontType],
          textConfig.color[color],
          textConfig.size[size],
          className
        )}
      >
        {children}
      </TextComponent>
    )
  }
)
Text.displayName = 'Text'
