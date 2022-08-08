import { HomeMall, MobileModal } from '@/enums/modal'
export function getModalCodeInfo() {
  const clientWidth = document.documentElement.clientWidth
  if (clientWidth < 768)
    return MobileModal
  return HomeMall
}
