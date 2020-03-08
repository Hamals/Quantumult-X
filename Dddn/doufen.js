var bonus = {
  url: 'https://www.doufen.me/user/checkin',
  method: "POST",
  headers: {
    "Cookie": $prefs.valueForKey("CookieWA"),
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.4 Mobile/15E148 Safari/604.1",
    "Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language":"zh-cn",
    "Connection":"keep-alive",
    "Accept-Encoding":"gzip, deflate, br",
    "Content-Type": "application/x-www-form-urlencoded"
  }
};

$task.fetch(bonus).then(response => {
      var result = JSON.parse(response.body)
      var remsg = unescape(result.msg);
      if (result.ret == 1 && remsg.match(/获得/)) {
      $notify("豆豆豆奶", "签到成功",  remsg+"🎉")
    } else {
      if (result.ret == 1 && remsg.match(/续过命/)) {
         $notify("豆豆豆奶", "签到失败",  "重复签到！⚠️")
        } else {
          $notify("豆豆豆奶", "未知错误", "请尝试重新获取cookie‼️‼️")
        }
      }
    
}, reason => {
    $notify("豆豆豆奶签到出现未知错误‼️‼️‼️", "", reason.error)
});