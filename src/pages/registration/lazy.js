import { Suspense, lazy } from 'react'
import { Loading } from '../../components'

const Registration = lazy(() =>
  import('./registration').then((module) => ({
    default: module.Registration
  }))
)

export const LazyRegistrationPage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Registration />
    </Suspense>
  )
}
