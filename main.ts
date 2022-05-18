radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        green_light()
    } else {
        Traffic_Light_cycle(false, false)
    }
})
function green_light () {
    range = strip.range(0, 3)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
}
input.onButtonPressed(Button.A, function () {
    Traffic_Light_cycle(false, true)
})
function Traffic_Light_cycle (sound_: boolean, walk: boolean) {
    basic.pause(3000)
    green_light()
    basic.showIcon(IconNames.StickFigure)
    if (walk) {
        for (let index2 = 0; index2 <= 20; index2++) {
            basic.showNumber(20 - index2)
            if (sound_) {
                music.playTone(440, music.beat(BeatFraction.Whole))
            }
        }
    }
    basic.pause(1000)
    basic.showLeds(`
        . . # # .
        . . # # #
        . # # # #
        . # # # #
        . # # # .
        `)
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
input.onButtonPressed(Button.AB, function () {
    Traffic_Light_cycle(false, false)
})
input.onButtonPressed(Button.B, function () {
    Traffic_Light_cycle(true, true)
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
let range: neopixel.Strip = null
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
strip.setBrightness(255)
basic.showLeds(`
    . . # # .
    . . # # #
    . # # # #
    . # # # #
    . # # # .
    `)
let count = 0
red_light()
let distance = 0
radio.setGroup(58)
basic.forever(function () {
    for (let index = 0; index < 10; index++) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        control.waitMicros(2)
        pins.digitalWritePin(DigitalPin.P1, 1)
        control.waitMicros(10)
        pins.digitalWritePin(DigitalPin.P1, 0)
        distance = pins.pulseIn(DigitalPin.P2, PulseValue.High) / 58
        if (distance <= 5) {
            count += 1
            Traffic_Light_cycle(false, false)
            basic.showLeds(`
                . . # # .
                . . # # #
                . # # # #
                . # # # #
                . # # # .
                `)
        }
    }
    if (count == 10) {
        Traffic_Light_cycle(false, false)
    }
})
