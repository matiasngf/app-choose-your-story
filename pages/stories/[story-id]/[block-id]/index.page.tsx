import { Choice } from '@/components/Choice'
import { Container } from '@/components/Container'
import { Text } from '@/components/Text'
import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import stories from 'stories'
import { StoryBlock } from 'stories/stories'

interface PageProps {
  block: StoryBlock
}

const Page: NextPage<PageProps> = ({ block }) => {
  const router = useRouter()
  const { 'story-id': storyId } = router.query
  return (
    <Container className='py-10'>
      {block.body.split('\n').map((line, index) => (
        <Text key={index}>{line}</Text>
      ))}
      {!!(block.options && block.options.length) && (
        <div className='grid grid-cols-1 gap-4'>
          {block.options.map((option, index) => (
            <Choice key={index} href={`/stories/${storyId}/${option.id}`}>
              {option.body}
            </Choice>
          ))}
        </div>
      )}
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const storyId = context.params?.['story-id'] as string | undefined
  const blockId = context.params?.['block-id'] as string | undefined
  if (!storyId || !blockId) {
    return {
      notFound: true
    }
  }
  const block = stories[storyId]?.blocks[blockId]
  if (!block) {
    return {
      notFound: true
    }
  }
  return {
    props: {
      block
    }
  }
}

export default Page
