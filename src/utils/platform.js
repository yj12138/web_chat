function GetPlatform() {
  var system = {
    win: false,
    mac: false,
    x11: false,
    iphone: false,
    ios: false,
    ipad: false,
    android: false,
  }
  // var platform = navigator.platform
  var platform = navigator.userAgent.toLowerCase()
  system.win = /win/i.test(platform)
  system.mac = /mac/i.test(platform)
  system.x11 = /linux/i.test(platform)
  system.iphone = /iphone/i.test(platform)
  system.ipad = /ipad/i.test(platform)
  system.ios = /ios/i.test(platform)
  system.android = /android/i.test(platform)
  return system
}
let plat = GetPlatform()
export function IsPC() {
  if (IsAndroid() || IsIOS()) {
    return false
  }
  return plat.win || plat.mac || plat.x11
}
export function IsAndroid() {
  return plat.android
}
export function IsIOS() {
  return plat.ios
}