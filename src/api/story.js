import apiUrl from '../apiConfig'
import axios from 'axios'

export const createStory = (story, user) => {
  console.log('this is story', story)
  console.log('this is user', user.id)
  return axios({
    url: apiUrl + '/stories/',
    method: 'POST',
    headers: {
      'Authorization': `Token ${user.token}`
    },
    data: {
      story: {
        title: story
      }
    }
  })
}

export const indexStory = (user) => {
  return axios({
    url: apiUrl + '/stories/',
    method: 'GET',
    headers: {
      'Authorization': `Token ${user.token}`
    }
  })
}
