import defaultCode from '@/assets/binaryCode.png'
import xiaolingCode from '@/assets/xiaoling-code.png'
export enum ModalType {
  SAAS = 'saas',
  AVATOR = 'avator',
}

//
export enum ModalTypeSaas {
  title = '',
  avator = '',
  desc = '',
  src = '',
}

// enum string  not permitted numeric
export const ModalXiaoLing: Readonly<ModalTypeInfo> = {
  title: 'HI,我是你的首席私域运营官',
  avator: 'xiaoling',
  desc: '扫码加微信，送你专属大礼包',
  src: xiaolingCode,
}
export const ModalDefault: Readonly<ModalTypeInfo> = {
  title: 'HI,我是你的专属增长顾问',
  avator: 'zavator',
  desc: '扫码加微信，送你专属大礼包',
  src: defaultCode,
}

export const ModalMall: Readonly<ModalTypeInfo> = {
  title: 'HI,我是你的开店助手',
  avator: 'zavator',
  desc: '扫码加微信，送你专属大礼包',
  src: defaultCode,
}
export const HomeMall: Readonly<ModalTypeInfo> = {
  title: 'HI,我是你的数字化顾问',
  avator: 'zavator',
  desc: '扫码加微信，送你专属大礼包',
  src: defaultCode,
}

export const modalSass: Readonly<ModalTypeInfo> = {
  title: 'HI,我是你的SaaS顾问',
  avator: 'zavator',
  desc: '扫码加微信，送你专属大礼包',
  src: defaultCode,
}
