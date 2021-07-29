var Links = {
    setColor:function (color) {
        var i = 0;
        var alist = document.querySelectorAll('a');
        while(i < alist.length) {
            alist[i].style.color = color;
            i = i+1;
        }
    }
}
var Body = {
    setColor:function (color) {
        document.querySelector('body').style.color = color;
    },
    setBackgroundColor:function (color) {
        document.querySelector('body').style.backgroundColor = color;
    }
}
function nightDayHandler(self) {
    if(self.value === 'night') {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = 'day';
        Links.setColor('powderblue');
    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = 'night';
        Links.setColor('blue');
    }
}