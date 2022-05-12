def Green_Light():
    global range2
    range2 = strip.range(0, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.BLACK))
    range2 = strip.range(1, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.BLACK))
    range2 = strip.range(2, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.GREEN))

def on_button_pressed_a():
    basic.show_icon(IconNames.STICK_FIGURE)
    while True:
        for index in range(21):
            Green_Light()
            basic.show_number(20 - index)
        OFF()
        yellow()
        basic.pause(3700)
        OFF2()
        basic.show_leds("""
            . . # # .
                        . . # # #
                        . # # # #
                        . # # # #
                        . # # # .
        """)
        Red()
        basic.pause(20000)
        off3()
input.on_button_pressed(Button.A, on_button_pressed_a)

def OFF2():
    global range2
    range2 = strip.range(0, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.BLACK))
    range2 = strip.range(1, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.BLACK))
    range2 = strip.range(2, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.BLACK))

def on_button_pressed_b():
    basic.show_icon(IconNames.STICK_FIGURE)
    while True:
        for index2 in range(21):
            Green_Light()
            basic.show_number(20 - index2)
            music.play_tone(440, music.beat(BeatFraction.WHOLE))
        music.play_tone(220, music.beat(BeatFraction.QUARTER))
        OFF()
        yellow()
        basic.pause(3700)
        OFF2()
        basic.show_leds("""
            . . # # .
                        . . # # #
                        . # # # #
                        . # # # #
                        . # # # .
        """)
        Red()
        basic.pause(20000)
        off3()
input.on_button_pressed(Button.B, on_button_pressed_b)

def off3():
    global range2
    range2 = strip.range(0, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.BLACK))
    range2 = strip.range(1, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.BLACK))
    range2 = strip.range(2, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.BLACK))
def yellow():
    global range2
    range2 = strip.range(0, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.BLACK))
    range2 = strip.range(1, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.YELLOW))
    range2 = strip.range(2, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.BLACK))
def OFF():
    global range2
    range2 = strip.range(0, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.BLACK))
    range2 = strip.range(1, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.BLACK))
    range2 = strip.range(2, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.BLACK))
def Red():
    global range2
    range2 = strip.range(0, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.RED))
    range2 = strip.range(1, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.BLACK))
    range2 = strip.range(2, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.BLACK))
range2: neopixel.Strip = None
strip: neopixel.Strip = None
basic.show_icon(IconNames.YES)
strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
strip.set_brightness(255)
basic.show_leds("""
    . . # # .
        . . # # #
        . # # # #
        . # # # #
        . # # # .
""")
Red()

def on_forever():
    pins.digital_write_pin(DigitalPin.P0, 0)
    control.wait_micros(5)
basic.forever(on_forever)
