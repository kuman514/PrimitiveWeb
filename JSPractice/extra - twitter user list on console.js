var f = document.getElementsByClassName("css-1dbjc4n r-j7yic r-qklmqi r-1adg3ll r-1ny4l3l");
var alluserstr = '';
for (var i = 0; i < f.length; i++) {
    var element = f[i].getElementsByClassName("css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0")[2];

    if (typeof element == 'undefined') {
        continue;
    }

    var id = element.textContent;
    if (id[0] == '@') {
        alluserstr += (id + ' ');
    }
}
