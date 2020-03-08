var DDDN = $request.headers["Cookie"];

if (DDDN) {
  if ($prefs.valueForKey("CookieDN") != undefined) {
    if ($prefs.valueForKey("CookieDN") != DDDN) {
      var cookie = $prefs.setValueForKey(DDDN, "CookieDN");
      if (!cookie) {
        $notify("更新豆豆豆奶签到Cookie失败‼️", "", "")
      } else {
        $notify("更新豆豆豆奶签到Cookie成功 🎉", "", "")
      }
    }
  } else {
    var cookie = $prefs.setValueForKey(DDDN, "CookieDN");
    if (!cookie) {
      $notify("首次写入豆豆豆奶Cookie失败‼️", "", "")
    } else {
      $notify("首次写入豆豆豆奶Cookie成功 🎉", "", "")
    }
  }
}
$done({})