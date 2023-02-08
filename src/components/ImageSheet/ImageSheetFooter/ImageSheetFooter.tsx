import { useAppDispatch } from '../../customHooks/hooks'
import imageSheetFooterStyles from './ImageSheetFooter.module.css'
import { deleteImg } from '../../../store/images/images'
import { resetSelectedImg } from '../../../store/imageUiState/imageUiState'
import { ImageSheetFooterProps } from './types'
import { getString } from '../../../i18n'

const ImageDeleteBtn = ({
  selectedImage,
  toggleDrawer,
}: ImageSheetFooterProps) => {
  const dispatch = useAppDispatch()
  const handleBackBtnClick = (): void => {
    dispatch(resetSelectedImg())
    toggleDrawer()
  }
  const handleDeleteClick = (): void => {
    dispatch(deleteImg({ id: selectedImage.id }))
    dispatch(resetSelectedImg())
    toggleDrawer()
  }

  return (
    <div className={imageSheetFooterStyles.imageSheetFooter}>
      <div className={imageSheetFooterStyles.button}>
        <button
          className={imageSheetFooterStyles.deleteBtn}
          onClick={handleDeleteClick}
        >
          {getString('imageSheet.deleteBtnLabel')}
        </button>
      </div>
      <div className={imageSheetFooterStyles.button}>
        <button
          className={imageSheetFooterStyles.backBtn}
          onClick={handleBackBtnClick}
        >
          {getString('imageSheet.backBtnLabel')}
        </button>
      </div>
    </div>
  )
}

export default ImageDeleteBtn
