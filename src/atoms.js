import { atom } from "recoil";

// export const allatoms = atom({
//   key:'allatoms',
//   default:{
//     numwords:0,
//     typereffectt:'',
//     currentindex:0,
//     wordss:[]
//   }
// })

export const numwords = atom({
  key:"numwords",
  default:0
})


export const wordss = atom({
  key:"wordss",
  default:[]
})


export const typereffectt = atom({
  key:"typereffect",
  default:''
})


export const currentindex = atom({
  key:"currentIndex",
  default:0
})

