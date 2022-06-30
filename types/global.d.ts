export {}
import type { Type } from 'naive-ui/es/button/src/interface'
declare global{
  type Recordable<T = any> = Record<string, T>;
  interface ImportMetaEnv {
    VITE_BASE_URL: string;
    VITE_PORT: number;
    VITE_API_BASE_URL: string;
  }
  // banner
  interface BannerInfoImg {
    url: string;
    top?: number;
    left?: number;
    right?: number;
  }
  interface BannerInfoDesc {
    desc: string;
    style?: string;
  }
  interface BannerInfobutton {
    text?: string;
    type?: Type ;
    top?: number;
    left?: number;
    width?: number;
    height?: number;
  }
  interface BannerInfo {
    image: BannerInfoImg;
    title: BannerInfoDesc;
    subTitle: BannerInfoDesc;
    button?:BannerInfobutton
  }
  
}
