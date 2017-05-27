$(document).ready(function() {
  init()

  function init() {
    getAjax();
    enlarge();
    submit();
    upload();
    star();
    textArea();
  }

  //地图
  function createMap(x, y) {
    var map = new BMap.Map("mapShow"); //在百度地图容器中创建一个地图
    var point = new BMap.Point(x, y); //定义一个中心点坐标
    map.centerAndZoom(point, 16); //设定地图的中心点和坐标并将地图显示在地图容器中


    window.map = map; //将map变量存储在全局

    var local = new BMap.LocalSearch(map, {
      renderOptions: {
        map: map
      }
    });
    var name = $(".destination").html();
    local.search(name);
  }

  //调取位置经纬度
  function getAjax() {
    var locationName = $(".destination").html();
    var shopName = $(".location-name").html();
    var url = "http://api.map.baidu.com/place/v2/search?q=" + shopName + "&region=北京&output=json&ak=CFl65IH1HyiLKmGytgDbr5xvm5me8xWU";
    $.ajax({
      url: url,
      dataType: "jsonp",
      jsonp: "callback",
      success: function(data) {
        var x = data.results[0].location.lat;
        var y = data.results[0].location.lng;
        createMap(x, y);
      }
    })
  }

  //enlarge
  function enlarge() {
    $(".pic div").mouseover(function() {
      $(this).children("img").addClass("enlarge")
    }).mouseout(function() {
      $(this).children("img").removeClass("enlarge");
    })
  }

  //textarea 字数
  function textArea() {
    var ie = !!window.ActiveXObject;
    if (ie) {
      $(".text-wrap textarea").on("propertychange", function() {
        textnum = $(this).val().length;
        if (textnum > 490) {
          $(".num").css({
            "color": "red",
            "font-weight": "600"
          });
        } else {
          $(".num").css({
            "color": "black",
            "font-weight": "300"
          });
        }
        $(".num").html(textnum);
        if (textnum >= 500) {
          $(".num").html(500);
        }
      })
    } else {
      $(".text-wrap textarea").on("input", function() {
        textnum = $(this).val().length;
        if (textnum > 490) {
          $(".num").css({
            "color": "red",
            "font-weight": "600"
          });
        } else {
          $(".num").css({
            "color": "black",
            "font-weight": "300"
          });
        }
        $(".num").html(textnum);
        if (textnum >= 500) {
          $(".num").html(500);
        }
      })
    }
  }


  //上传图片
  function upload() {
    $('#upload_image').on("change", function(event) {
      var files = event.target.files,
        file;
      if (files && files.length > 0 && files.length <= 5) {
        var a = $(".upload").find(".upload-item");
        files = Array.prototype.slice.call(files);
        var other = 5 - a.length;
        if (a && files.length > other) {
          files = files.slice(0, other);
        }
        file = files;
        var URL = window.URL || window.webkitURL;
        // 通过 file 生成目标 url
        var wid = $(".upload-bt").width();
        for (var i = 0; i < file.length; i++) {
          var imgURL = URL.createObjectURL(file[i]);
          $(".upload").append($('<img/>').attr({
            'src': imgURL,
            "class": "upload-item",
            "height": wid
          }));
        }
        if ($(".upload").find(".upload-item").length >= 5) {
          $(".upload-bt").hide();
        } else {
          $(".upload-bt").show();
        }
      } else if (files.length > 5) {
        alert("最多上传5张图片")
      }
    });
  }


  //星星数量
  function star() {
    $(".comment-star").on("click", function() {
      $(".comment-star").attr("src", "images/hide-star.png");
      var showStar = $(this).attr("data") * 1;
      for (var i = 1; i < showStar + 1; i++) {
        $(".comment-star:nth-of-type(" + i + ")").attr("src", "images/show-star.png");
      }
    })
  }

  //提交评价
  function submit() {
    $(".btnSub").on("click", function() {
      alert("上传成功");
    })
  }

})
