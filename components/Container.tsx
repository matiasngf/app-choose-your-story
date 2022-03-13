import classNames from 'classnames'

export interface ContainerProps {
  className?: string
}

export const Container = ({
  className,
  children
}: React.PropsWithChildren<ContainerProps>) => {
  return (
    <div className={classNames('max-w-2xl mx-auto px-5', className)}>
      {children}
    </div>
  )
}
