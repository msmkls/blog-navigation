
var spaceutil = {
    user: null,
    lan: "zh_CN",
    lanobj: null,

    errmsg: function (msg) {
        if (typeof(console) != 'undefined') console.log(msg);
    },

    check_ulogin: function (url) {
        var u = $.cookie('oneuser');
        if (typeof(u) == 'undefined' || u == "") {
            window.location.href = url;
            return false;
        }

        spaceutil.user = JSON.parse(u);
        return true;
    },

    check_login: function () {
        return spaceutil.check_ulogin("/ulogin.html");
    },

    logout: function(url) {
        $.removeCookie('oneuser', {path: '/'});
        $.removeCookie('session', {path: '/'});
        window.location.href = url;
    },

    do_ajax: function (url, args, success_func, complete_func) {
        $.ajax({
            url: url,
            type: "POST",
            cache: false,
            data: args,
            async: true,
            dataType: "json",
            success: function(response){
                success_func(response);
            },
            complete: function() {
                if (complete_func) complete_func();
            }
        });
    },

    do_ajax_sync: function (url, args, success_func, complete_func) {
        $.ajax({
            url: url,
            type: "POST",
            cache: false,
            data: args,
            async: false,
            dataType: "json",
            success: function(response){
                success_func(response);
            },
            complete: function() {
                if (complete_func) complete_func();
            }
        });
    },

    get_language: function(datapart) {
        $.ajax({
            url: "/language/language.lua",
            type: "POST",
            data: {part: datapart},
            cache: false,
            async: false,
            dataType: "json",
            success: function(response){
                spaceutil.lan    = response.lan;
                spaceutil.lanobj = response.lanobj;
            },
        });
    },

    apply_language: function() {
        $.each(spaceutil.lanobj, function(k,v){
            $('.language_'+k).html(v);
        });
    },

};
