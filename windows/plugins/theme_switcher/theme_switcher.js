$(function () {

    //此处预定义了背景数据，其实可以用ajax获取
    var themes = [
        {
            "pic": "./plugins/theme_switcher/bg/bg13.jpg",
            "thumb": "./bg/bg13_small.jpg",
            "title": "Winxp"
        },
        {
            "pic": "./plugins/theme_switcher/bg/bg15.jpg",
            "thumb": "./bg/bg15_small.jpg",
            "title": "Win7"
        },   
        {
            "pic": "./plugins/theme_switcher/bg/bg6.jpg",
            "thumb": "./bg/bg6_small.jpg",
            "title": "Win8"
        },        
        {
            "pic": "./plugins/theme_switcher/bg/bg1.jpg",
            "thumb": "./bg/bg1_small.jpg",
            "title": "win10"
        },              
        {
            "pic": "https://unsplash.it/1920/1080/?random",
            "thumb": "./bg/bg14_small.jpg",
            "title": "Random"
        },            {
            "pic": "./plugins/theme_switcher/bing.php",
            "thumb": "./bg/bg5_small.jpg",
            "title": "Bing"
        },     
    ];

    var theme_area=$("#theme_area");
    theme_area.on('click','.theme_setting',function () {
        var pic=$(this).data('pic');
        Win10_parent.setBgUrl({main:pic});

        //此处你也许想用ajax把修改信息保存到服务器。。。

    });




    themes.forEach(function (t) {
        var theme=$("<a href=\"javascript:;\" data-pic=\""+t.pic+"\" class=\"theme_setting \">\n" +
            "            <div class=\"theme_icon\"><img src=\""+t.thumb+"\"></div>\n" +
            "            <div class=\"theme_text\">"+t.title+"</div>\n" +
            "        </a>");
        theme_area.append(theme)
    });


});
