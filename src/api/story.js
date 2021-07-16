import apiUrl from '../apiConfig'
import axios from 'axios'

export const createStory = (story, user) => {
  console.log('this is story', story)
  console.log('this is user', user.id)
  return axios({
    url: apiUrl + '/stories/',
    method: 'POST',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: {
      story: {
        title: story
      },
      owner: user.id
    }
  })
}

export const indexStory = (user) => {
  return axios({
    url: apiUrl + '/stories/',
    method: 'GET',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}
