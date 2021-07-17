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
