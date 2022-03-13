import { Container } from '@/components/Container'
import { Text } from '@/components/Text'
import Link from 'next/link'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import stories from 'stories'
import { StoryInterface } from 'stories/stories'
import { useRouter } from 'next/router'

interface PageProps {
  story: StoryInterface
}

const Page: NextPage<PageProps> = (props) => {
  const router = useRouter()
  const { 'story-id': storyId } = router.query
  return (
    <Container className='flex h-screen p-6'>
      <div className='m-auto text-center'>
        <Text className='text-2xl'>{props.story.title}</Text>
        <div>
          <Link href={`/stories/${storyId}/start`}>
            <a>
              <Text fontType='sans' color='sky-600'>
                Leer
              </Text>
            </a>
          </Link>
        </div>
      </div>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const storyId = context.params?.['story-id'] as string | undefined
  if (!storyId) {
    return {
      notFound: true
    }
  }
  const story = stories[storyId]
  if (!story) {
    return {
      notFound: true
    }
  }
  return {
    props: {
      story
    },
    revalidate: 10
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Object.keys(stories).map((storyId) => ({
      params: {
        'story-id': storyId
      }
    })),
    fallback: 'blocking'
  }
}

export default Page
