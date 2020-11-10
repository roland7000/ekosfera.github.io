import React from 'react';
import cx from 'classnames';
import Button from '../../Button';
import ImageUploading from 'react-images-uploading';
import { ReactComponent as ImageIcon } from '../../../assets/icon-image.svg';
import styles from './styles.module.scss';

// Hooks
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

// Action Creators
import { formDeleteImage } from '../../../store/actions/report.action';

const ImageUploader = ({
  setImages,
  className
}) => {
  const [t] = useTranslation();
  const { images } = useSelector(state => state.report.submitData)
  const dispatch = useDispatch();
  const maxNumber = 3;

  const onChange = imageList => setImages(imageList)
  const handleRemoveImage = index => dispatch(formDeleteImage(index))

  return (
    <div className={cx(
      styles['upload-wrap'],
      { [className]: className }
    )}>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({ imageList, onImageUpload, onImageRemove }) => (<>
          <ul className={styles['upload-list']}>
            {imageList.map((image, index) => {
              const { name = '' } = image && image.file
              return (
                <li key={index} className={styles['upload-list_item']}>
                  <ImageIcon className={styles['upload-list_item-icon']} />
                  <p className={styles['upload-list_item-name']}>{name}</p>
                  <button
                    onClick={() => {
                      onImageRemove(index)
                      handleRemoveImage(index)
                    }}
                    className={styles['upload-list_item-handler']}
                  >
                    {t('delete')}
                  </button>
                </li>
              )
            })}
          </ul>
          <Button
            className={styles['upload-button']}
            handleClick={onImageUpload}
            isPrimary
          >
            {t('download')}
          </Button>
        </>
        )}
      </ImageUploading>
    </div>
  );
}

export default ImageUploader;