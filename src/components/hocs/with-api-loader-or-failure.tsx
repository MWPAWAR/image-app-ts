import { ComponentType, FC } from 'react'
import { useAppSelector } from '../../customHooks/hooks'
import { selectImagesFetchStatus } from '../../store/images/selectors'
import { ComponentProps } from './types'
import { getString } from '../../i18n'
import { API_FETCH_STATUS } from '../../constants'
import styles from './styles.module.css'

const withApiLoaderOrFailure =
  <P extends Object>(Component: ComponentType<P>): FC<P & ComponentProps> =>
  (props: P & ComponentProps) => {
    const imagesFetchStatus: string = useAppSelector(selectImagesFetchStatus)

    if (imagesFetchStatus === API_FETCH_STATUS.LOADING)
      return (
        <div className={styles.loaderOrErrorContainer}>
          {getString('defaults.loadingText')}
        </div>
      )
    if (imagesFetchStatus === API_FETCH_STATUS.ERROR)
      return (
        <div className={styles.loaderOrErrorContainer}>
          {getString('defaults.errorText')}
        </div>
      )

    return <Component {...props} />
  }

export default withApiLoaderOrFailure
