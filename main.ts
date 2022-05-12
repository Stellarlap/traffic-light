function green_light () {
    range = strip.range(0, 3)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
}
function countdown (sound_: boolean, walk: boolean) {
    green_light()
    if (walk) {
        basic.showIcon(IconNames.StickFigure)
        for (let index2 = 0; index2 <= 20; index2++) {
            basic.showNumber(20 - index2)
            if (sound_) {
                music.playTone(440, music.beat(BeatFraction.Whole))
            }
        }
    }
    yellow_light()
    basic.pause(3700)
    if (walk) {
        basic.showLeds(`
            . . # # .
            . . # # #
            . # # # #
            . # # # #
            . # # # .
            `)
    }
    red_light()
}
input.onButtonPressed(Button.A, function () {
    countdown(false, true)
})
input.onButtonPressed(Button.AB, function () {
    countdown(false, false)
})
input.onButtonPressed(Button.B, function () {
    countdown(true, true)
})
function red_light () {
    range = strip.range(0, 3)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
}
function yellow_light () {
    range = strip.range(0, 3)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Yellow))
}
let distance = 0
let range: neopixel.Strip = null
let strip: neopixel.Strip = null
basic.showIcon(IconNames.Yes)
strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
strip.setBrightness(255)
basic.showLeds(`
    . . # # .
    . . # # #
    . # # # #
    . # # # #
    . # # # .
    `)
red_light()
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P1, 0)
    distance = pins.pulseIn(DigitalPin.P2, PulseValue.High) / 58
    if (distance < 0) {
    	
    }
})
