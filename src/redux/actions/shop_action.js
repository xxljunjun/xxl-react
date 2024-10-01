import {
    UPDATE_SHOPNUMS
  } from '@/redux/constant.js'

export function updateShopnums(payload) {
    return {
        type: UPDATE_SHOPNUMS,
        payload
    }
}