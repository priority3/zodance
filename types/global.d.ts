export {}
declare global{
  type Recordable<T = any> = Record<string, T> 
  interface ImportMetaEnv {
    VITE_BASE_URL: string 
    VITE_PORT: number 
    VITE_GLOBAL_TITLE: string
  }
  // banner
  interface BannerInfoImg {
    url: string 
    top?: number 
    left?: number 
    right?: number 
  }
  interface BannerInfoDesc {
    desc: string 
    style?: string 
  }
  interface BannerInfobutton {
    text?: string
    type?: Type 
    top?: number
    left?: number
    width?: number
    height?: number
    style?: object
    textStyle?: object
    link?:string
    modal?: boolean,
    modalInfo?: ModalTypeInfo,
  }
  interface BannerInfo {
    image: BannerInfoImg 
    title: BannerInfoDesc 
    subTitle: BannerInfoDesc 
    button?:Array<BannerInfobutton>
  }
  interface MODAL extends HTMLElement {
    setShowModal: () => void
    setHideModal: () => void
    showModal: () => Ref<Boolean>
    setModalInfo: (modalInfo:ModalTypeInfo) => void
  }

  interface ModalTypeInfo {
    title: string,
    avator: string,
    desc: string,
    src: string
  }
  
}
