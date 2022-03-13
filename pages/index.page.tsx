import { Container } from '@/components/Container'
import { Text } from '@/components/Text'
import { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import stories from 'stories'

interface PageProps {
  titles: {
    id: string
    title: string
  }[]
}

const Page: NextPage<PageProps> = ({ titles }) => {
  return (
    <Container className='flex h-screen p-6'>
      <div className='m-auto'>
        <Text as='h1' size='4xl'>
          Appventure
        </Text>
        <Text className='mt-4'>Historias:</Text>
        <ul>
          {titles.map((title) => (
            <Link key={title.id} href={`/stories/${title.id}`}>
              <a>
                <li className='text-sky-600'>{title.title}</li>
              </a>
            </Link>
          ))}
        </ul>
      </div>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  const titles = Object.entries(stories).map(([id, story]) => ({
    id,
    title: story.title
  }))
  return {
    props: {
      titles
    }
  }
}

export default Page
