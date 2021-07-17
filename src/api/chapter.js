import apiUrl from '../apiConfig'
import axios from 'axios'

export const createChapter = (chapterName, chapterBody, storyId, user) => {
  return axios({
    url: apiUrl + '/chapters/',
    method: 'POST',
    headers: {
      'Authorization': `Token ${user.token}`
    },
    data: {
      chapter: {
        name: chapterName,
        body: chapterBody,
        story: storyId
      }
    }
  })
}

export const indexChapters = (user) => {
  return axios({
    url: apiUrl + '/chapters/',
    method: 'GET',
    headers: {
      'Authorization': `Token ${user.token}`
    }
  })
}

export const showChapter = (chapterId, user) => {
  return axios({
    url: apiUrl + '/chapters/' + chapterId,
    method: 'GET',
    headers: {
      'Authorization': `Token ${user.token}`
    }
  })
}
