import { Suspense, lazy } from 'react'
import { Loading } from '../../components'

/**
 * Чтобы увидеть loading
 */
// const LogginPage = lazy(() => {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res(
//         import('./loggin').then((module) => ({
//           default: module.Loggin
//         }))
//       )
//     }, 2000)
//   })
// })

const LogginPage = lazy(() =>
  import('./loggin').then((module) => ({
    default: module.Loggin
  }))
)

export const LazyLogginPage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <LogginPage />
    </Suspense>
  )
}
