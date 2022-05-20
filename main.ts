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
    abort_cycle = false
    basic.pause(3000)
    if (abort_cycle) {
        return
    }
    green_light()
    if (walk) {
        basic.showIcon(IconNames.StickFigure)
        for (let index2 = 0; index2 <= 20; index2++) {
            if (abort_cycle) {
                return
            }
            basic.showNumber(20 - index2)
            if (sound_) {
                music.playTone(440, music.beat(BeatFraction.Whole))
            }
        }
    }
    basic.pause(1000)
    if (abort_cycle) {
        return
    }
    yellow_light()
    basic.pause(3700)
    if (abort_cycle) {
        return
    }
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
    basic.showLeds(`
        . . # # .
        . . # # #
        . # # # #
        . # # # #
        . # # # .
        `)
}
input.onButtonPressed(Button.B, function () {
    Traffic_Light_cycle(true, true)
})
function red_light () {
    range = strip.range(0, 3)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
}
radio.onReceivedValue(function (name, value) {
    if (name == me) {
        if (value == 1) {
            abort_cycle = true
            green_light()
        } else if (value == 2) {
            abort_cycle = true
            red_light()
        } else if (value == 3) {
            Traffic_Light_cycle(false, false)
        }
    }
})
function yellow_light () {
    range = strip.range(0, 3)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Yellow))
}
let abort_cycle = false
let range: neopixel.Strip = null
let strip: neopixel.Strip = null
let me = ""
me = "Dynes"
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
let distance = 6
let count = 0
radio.setGroup(58)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P8, 0)
        control.waitMicros(2)
        pins.digitalWritePin(DigitalPin.P8, 1)
        control.waitMicros(10)
        pins.digitalWritePin(DigitalPin.P8, 0)
        distance = pins.pulseIn(DigitalPin.P13, PulseValue.High) / 58
        if (distance <= 5) {
            count += 1
        }
        if (count == 4) {
            Traffic_Light_cycle(false, false)
            count = 0
        }
    }
    count = 0
})
