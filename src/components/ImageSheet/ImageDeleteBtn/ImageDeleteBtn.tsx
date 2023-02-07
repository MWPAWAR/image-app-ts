import { useAppDispatch } from '../../../customHooks/hooks'
import imageDeleteBtnStyles from './ImageDeleteBtn.module.css'
import { deleteImg } from '../../../store/images/images'
import { resetSelectedImg } from '../../../store/imageUiState/imageUiState'
import { ImageDeleteBtnProps } from './types'

const ImageDeleteBtn = ({ selectedImage }: ImageDeleteBtnProps) => {
  const dispatch = useAppDispatch()
  const handleDeleteClick = () => {
    dispatch(deleteImg({ id: selectedImage.id }))
    dispatch(resetSelectedImg())
  }

  return (
    <div className={imageDeleteBtnStyles.deleteBtnFooter}>
      <button
        className={imageDeleteBtnStyles.button}
        onClick={handleDeleteClick}
      >
        Delete
      </button>
    </div>
  )
}

export default ImageDeleteBtn
