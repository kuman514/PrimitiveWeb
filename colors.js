var Link = {
    "setColor": function (color) {
        var nodelist = document.querySelectorAll('a');
        nodelist.forEach(
            function(currentValue, currentIndex, listObj) {
                currentValue.style.color = color;
            }
        )
    }
}

var Body = {
    "setColor": function (color) {
        document.querySelector('body').style.color = color;
    },
    "setBackgroundColor": function (color) {
        document.querySelector('body').style.backgroundColor = color;
    }
}

function nightDayHandler(self) {
    if (self.value === 'day') {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        Link.setColor('blue');
        self.value = 'night';
    } else {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        Link.setColor('powderblue');
        self.value = 'day';
    }
}
