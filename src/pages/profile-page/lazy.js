import { Suspense, lazy } from 'react'
import { Loading } from '../../components'

const ProfilePage = lazy(() =>
  import('./profile-page').then((module) => ({
    default: module.ProfilePage
  }))
)

export const LazyProfilePage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <ProfilePage />
    </Suspense>
  )
}
