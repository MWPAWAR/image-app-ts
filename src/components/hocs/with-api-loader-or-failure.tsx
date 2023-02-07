import { ComponentType, FC } from 'react'
import { useAppSelector } from '../../customHooks/hooks'
import { selectImagesFetchStatus } from '../../store/images/selectors'
import { ComponentProps } from './types'

const withApiLoaderOrFailure =
  <P extends Object>(Component: ComponentType<P>): FC<P & ComponentProps> =>
  (props: P & ComponentProps) => {
    const imagesFetchStatus: string = useAppSelector(selectImagesFetchStatus)

    if (imagesFetchStatus === 'loading') return <div>Loading...</div>
    if (imagesFetchStatus === 'error') return <div>Error...</div>

    return <Component {...props} />
  }

export default withApiLoaderOrFailure
