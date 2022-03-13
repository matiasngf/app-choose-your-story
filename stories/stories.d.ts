export interface StoriesInterface {
  [key: string]: StoryInterface
}

export interface StoryInterface {
  title: string
  blocks: {
    start: StoryBlock
    [key: string]: StoryBlock
  }
}

export interface StoryBlock {
  body: string
  options: BlockOptions[]
}

export interface BlockOptions {
  id: string
  body: string
}
