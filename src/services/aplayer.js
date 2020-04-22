import request from '../utils/request'

/**
 * @docs 获取音乐url
 * @param {*} id 
 */
export const fetchMusic = id => {
  return request('/song/url', {
    method: 'post',
    data: {
      id
    },
  }).then(res => res.data)
}

/**
 * @docs 获取音乐url
 * @param {*} id 
 */
export const fetchMusicDetail = ids => {
  return request('/song/detail', {
    method: 'post',
    data: {
      ids
    },
  }).then(res => res.data)
}


/**
 * @docs 检查歌曲是否可用
 * @param {*} id 
 */
export const checkMusic = id => {
  return request('/check/music', {
    method: 'post',
    data: {
      id
    },
  }).then(res => res.data)
}

/**
 * @docs 获取歌单详情
 * @param {*} id 
 */
export const playlistDetail = id => {
  return request('/playlist/detail', {
    method: 'post',
    data: {
      id,
      s: 0
    },
  }).then(res => res.data)
}

/**
 * @docs 获取歌曲歌词
 * @param {*} id 
 */
export const fetchLrc = id => {
  return request('/lyric', {
    method: 'post',
    data: {
      id,
    },
  }).then(res => res.data)
}