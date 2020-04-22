import { MUSIC_BASE_URL } from './constant'

export const renderMusicSrc = id => `${MUSIC_BASE_URL}${id}.mp3`;

/**
 * @docs 单一层级的对象混合，补充缺失对象
 * @param {*} targetObj 混合目标对象
 * @param {*} metaObj 混合提供对象
 * @param {*} metaKey 对象映射字段
 * @param {*} targetKey 混合对象字段
 */
export const oneLevelObjectCombine = (targetObj, metaObj, metaKey, targetKey) => {
  if(targetObj[metaKey] === metaObj[metaKey]) {
    return {
      ...targetObj,
      [targetKey]: metaObj[targetKey]
    }
  }

  return {
    ...targetObj
  }
}