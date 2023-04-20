import { Suspense, lazy } from 'react'
import { Loading } from '../../components'

const AllUserPage = lazy(() =>
  import('./all-users-page').then((module) => ({
    default: module.AllUserPage
  }))
)

export const LazyAllUserPage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <AllUserPage />
    </Suspense>
  )
}
