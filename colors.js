var isNight = false;

var Link = {
    "setColor": function (color) {
        /*
        var nodelist = document.querySelectorAll('a');
        nodelist.forEach(
            function(currentValue, currentIndex, listObj) {
                currentValue.style.color = color;
            }
        )
        */
        $('a').css("color", color);
    }
}

var Body = {
    "setColor": function (color) {
        //document.querySelector('body').style.color = color;
        $('body').css("color", color);
    },
    "setBackgroundColor": function (color) {
        //document.querySelector('body').style.backgroundColor = color;
        $('body').css("backgroundColor", color);
    }
}

function nightDayHandler(self) {
    if (isNight) {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        Link.setColor('blue');
        self.value = 'night';
        isNight = false;
    } else {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        Link.setColor('powderblue');
        self.value = 'day';
        isNight = true;
    }
}
