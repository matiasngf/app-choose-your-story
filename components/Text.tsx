import classNames from 'classnames'
import React from 'react'

export interface TextProps {
  as?: string
  className?: string
  fontType?: 'sans' | 'serif'
  color?: string
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
          `font-${fontType}`,
          `text-${color}`,
          className
        )}
      >
        {children}
      </TextComponent>
    )
  }
)
Text.displayName = 'Text'
