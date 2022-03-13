import Link, { LinkProps } from 'next/link'
import { Text } from './Text'

export interface ChoiceProps extends LinkProps {}

export const Choice = ({
  href,
  children
}: React.PropsWithChildren<ChoiceProps>) => {
  return (
    <Link href={href} passHref>
      <a>
        <div className='p-4 border-2 border-indigo-400 rounded-md bg-indigo-100'>
          <Text
            color='indigo-700'
            className='font-sans leading-normal mb-0 font-medium'
          >
            {children}
          </Text>
        </div>
      </a>
    </Link>
  )
}
