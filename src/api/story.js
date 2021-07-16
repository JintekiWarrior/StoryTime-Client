import apiUrl from '../apiConfig'
import axios from 'axios'

export const createStory = (story, user) => {
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

export const showStory = (user, storyId) => {
  return axios({
    url: apiUrl + '/stories/' + storyId,
    method: 'GET',
    headers: {
      'Authorization': `Token ${user.token}`
    }
  })
}
