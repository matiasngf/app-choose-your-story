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
  }
}

export interface TextProps {
  as?: string
  className?: string
  fontType?: 'sans' | 'serif'
  color?: 'slate-900' | 'sky-600' | 'indigo-700'
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
          'text-lg leading-relaxed',
          'mb-4',
          textConfig.fontType[fontType],
          textConfig.color[color],
          className
        )}
      >
        {children}
      </TextComponent>
    )
  }
)
Text.displayName = 'Text'
