import { Suspense, lazy } from 'react'
import { Loading } from '../../components'

const AllPostsPage = lazy(() =>
  import('./all-posts-page').then((module) => ({
    default: module.AllPostsPage
  }))
)

export const LazyAllPostsPage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <AllPostsPage />
    </Suspense>
  )
}
