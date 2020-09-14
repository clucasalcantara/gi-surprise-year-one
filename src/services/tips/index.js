import tipsDataset from './dataset'
import { getAvailableTips, storeTips } from '../storage'

export const exchangeTips = (tips = []) => {
  tips.push(tipsDataset[tips.length])

  storeTips(tips)
}

export const getTips = () => getAvailableTips()
