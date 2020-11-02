import {
  URL_INCIDENTS,
  FORM_SET_USER_NAME,
  FORM_SET_USER_EMAIL,
  FORM_SET_NAME_ERROR,
  FORM_SET_EMAIL_ERROR,
  FORM_SET_MAP_CENTER,
  FORM_SET_TAGS,
  FORM_SET_IMAGES,
  FORM_GET_SUBMIT_LOADING,
  FORM_GET_SUBMIT_COMPLETE,
  FORM_SET_IMAGE_URL_COMPLETE,
  FORM_GET_SUBMIT_ERROR,
  URL_POST_PHOTOS,
  FORM_SET_IMAGE_URL_ERROR,
  FORM_DELETE_IMAGE_URL,
  FORM_SET_IMAGES_URLSS,
  FORM_SET_IMAGES_URLS_LOADING,
  FORM_SET_IMAGES_URLS_COMPLETE,
  URL_POST_REPORT
} from '../../constants';
import API from '../../utils/API';

export const formDeleteImage = id => dispatch => {
  dispatch({
    type: FORM_DELETE_IMAGE_URL,
    payload: id
  })
}

export const formSetName = name => dispatch => {
  dispatch({
    type: FORM_SET_USER_NAME,
    payload: name
  })
}

export const formSetNameError = error => dispatch => {
  dispatch({
    type: FORM_SET_NAME_ERROR,
    payload: error
  })
}

export const formSetEmail = email => dispatch => {
  dispatch({
    type: FORM_SET_USER_EMAIL,
    payload: email
  })
}

export const formSetEmailError = error => dispatch => {
  dispatch({
    type: FORM_SET_EMAIL_ERROR,
    payload: error
  })
}

export const formSetMapCenter = center => dispatch => {
  dispatch({
    type: FORM_SET_MAP_CENTER,
    payload: center
  })
}

export const formSetTags = tagList => dispatch => {
  dispatch({
    type: FORM_SET_TAGS,
    payload: tagList
  })
}

export const formSetImages = images => dispatch => {
  dispatch({
    type: FORM_SET_IMAGES,
    payload: images
  })
}

export const formSetattachments = images => dispatch => {
  dispatch({
    type: FORM_SET_IMAGES_URLSS,
    payload: images
  })
}

// const formPostPhoto = image => dispatch => {
//   const formData = new FormData();
//   const config = { headers: { 'Content-Type': 'multipart/form-data' } }
//   formData.append('files', image.file);

//   return API.post(URL_POST_PHOTOS, formData, config)
//     .then(response => response && response.data)
//     .then(result => {
//       dispatch({
//         type: FORM_SET_IMAGE_URL_COMPLETE,
//         payload: result
//       })
//     })
//     .catch(error => dispatch({
//       type: FORM_SET_IMAGE_URL_ERROR,
//       payload: error
//     }))
// }

// async function asyncPormPostPhotos(images, dispatch) {
//   console.log('__asyncPormPostPhotos __OUTSIDE', images)
//   for(const image of images) {
//     console.log('__asyncPormPostPhotos __INSIDE', image)
//     await dispatch(formPostPhoto(image));
//   }
// };

// export const formPostPhotos = images => dispatch => {
//   console.log('__formPostPhotos')
//   console.log('')
//   asyncPormPostPhotos(images, dispatch)
// }

const formPostPhoto = image => dispatch => {
  const formData = new FormData();
  const config = { headers: { 'Content-Type': 'multipart/form-data' } }
  formData.append('files', image.file);

  return API.post(URL_POST_PHOTOS, formData, config)
    .then(response => response && response.data && response.data[0])
    .catch(error => dispatch({
      type: FORM_SET_IMAGE_URL_ERROR,
      payload: error
    }))
}

export const formPostPhotos = images => dispatch => {
  dispatch({
    type: FORM_SET_IMAGES_URLS_LOADING
  })

  const promises = []
  console.log('images', images)

  images.forEach(image => promises.push(dispatch(formPostPhoto(image))))

  Promise
    .all(promises)
    .then(result => {
      console.log('result', result)
      dispatch({
        type: FORM_SET_IMAGES_URLS_COMPLETE,
        payload: result
      })
    });
}

export const formPostReport = postData => dispatch => {
  const formData = new FormData();
  const config = { headers: { 
    'Content-Type': 'multipart/form-data'
  } }
  console.log('postData', postData)
  console.log('formData', formData)
  formData.append('data', postData);

  dispatch({
    type: FORM_GET_SUBMIT_LOADING
  })

  const requestData = { data: postData }

  API.post('/incidents', postData, config)
    .then(response => response && response.data)
    .then(data => dispatch({
      type: FORM_GET_SUBMIT_COMPLETE,
      payload: data
    }))
    .catch(error => dispatch({
      type: FORM_GET_SUBMIT_ERROR,
      payload: error
    }))
}
