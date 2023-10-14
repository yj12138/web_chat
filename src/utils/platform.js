function GetPlatform() {
  var system = {
    win: false,
    mac: false,
    x11: false,
    iphone: false,
    ipod: false,
    android: false,
    ios: false,
    ipad: false,
  }
  // var platform = navigator.platform
  var platform = navigator.userAgent
  console.log(platform)
  system.win = /Win/i.test(platform)
  system.mac = /Mac/i.test(platform)
  system.x11 = /Linux/i.test(platform)
  system.iphone = /IPhone/i.test(platform)
  system.mac = /Android/i.test(platform)
  system.mac = /Ipad/i.test(platform)
  system.mac = /IOS/i.test(platform)
  return system
}
let plat = GetPlatform()
export function IsPC() {
  return plat.win || plat.mac || plat.x11
}
export function IsAndroid() {
  return plat.android
}
export function IsIOS() {
  return plat.ios
}