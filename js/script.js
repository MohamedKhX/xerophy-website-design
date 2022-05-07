let typed = new TypeIt('.ele', {
    speed: 80,
    startDelay: 900,
})
    .type('a powerful')
    .move(-9)
    .delete(1)
    .type('A')
    .move(10)
    .type(' framework')
    .pause(500)
    .delete(20, { delay: 400 })
    .type('a lightweight ')
    .pause(1000)
    .type('Python')
    .pause(1000)
    .delete(6, {delay: 500})
    .type('PHP framework')
    .go();


/*
let typed = new Typed('.ele', {
    strings: ["A powerful framework", 'A lightweight ^700 Python'],
    typeSpeed: 50,
    smartBackspace: true,
    showCursor: false,
});

function terminalHeight(){
    let termHeight = $(".terminal-height");
    let value = termHeight.text();
    value = parseInt(value);
    setTimeout(function(){
        if (value > 10){
            value = value-1;
            this.txtValue = value.toString();
            termHeight.text(this.txtValue);
            self.terminalHeight();
        }
        else{
            clearTimeout();
        }
    }, 10);
}*/
