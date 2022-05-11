function Green_Light () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
}
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.StickFigure)
    while (true) {
        for (let index = 0; index <= 20; index++) {
            Green_Light()
            basic.showNumber(20 - index)
        }
        OFF()
        yellow()
        basic.pause(3700)
        OFF2()
        basic.showLeds(`
            . . # # .
            . . # # #
            . # # # #
            . # # # #
            . # # # .
            `)
        Red()
        basic.pause(20000)
        off3()
    }
})
function OFF2 () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.StickFigure)
    while (true) {
        for (let index = 0; index <= 20; index++) {
            Green_Light()
            basic.showNumber(20 - index)
            music.playTone(440, music.beat(BeatFraction.Whole))
        }
        music.playTone(220, music.beat(BeatFraction.Quarter))
        OFF()
        yellow()
        basic.pause(3700)
        OFF2()
        basic.showLeds(`
            . . # # .
            . . # # #
            . # # # #
            . # # # #
            . # # # .
            `)
        Red()
        basic.pause(20000)
        off3()
    }
})
function off3 () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
function yellow () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Yellow))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
function OFF () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
function Red () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
let range: neopixel.Strip = null
let strip: neopixel.Strip = null
basic.showIcon(IconNames.Yes)
strip = neopixel.create(DigitalPin.P16, 3, NeoPixelMode.RGB)
strip.setBrightness(255)
basic.showLeds(`
    . . # # .
    . . # # #
    . # # # #
    . # # # #
    . # # # .
    `)
Red()
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    control.waitMicros(5)
})
