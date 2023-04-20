import { Suspense, lazy } from 'react'
import { Loading } from '../../components'

const PostPage = lazy(() =>
  import('./post-page').then((module) => ({
    default: module.PostPage
  }))
)

export const LazyPostPage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <PostPage />
    </Suspense>
  )
}
