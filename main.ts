radio.onReceivedString(function (receivedString) {
    music.playTone(262, music.beat(BeatFraction.Breve))
})
radio.setGroup(1)
radio.sendString("go")
basic.pause(10000)
radio.sendNumber(randint(1, 10))
