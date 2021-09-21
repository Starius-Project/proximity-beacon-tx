input.onButtonPressed(Button.A, function () {
    servos.P0.setAngle(85)
})
input.onButtonPressed(Button.AB, function () {
    released = 0
})
radio.onReceivedString(function (receivedString) {
    InData = receivedString
    if (InData == "2" && released == 0) {
        basic.showIcon(IconNames.Heart)
        servos.P0.setAngle(85)
        released = 1
    }
})
input.onButtonPressed(Button.B, function () {
    servos.P0.setAngle(20)
})
let InData = ""
let released = 0
radio.setGroup(1)
radio.setTransmitPower(7)
servos.P0.setAngle(20)
basic.forever(function () {
    if (released == 0) {
        radio.sendString("1")
        basic.pause(200)
    } else {
        basic.showIcon(IconNames.Yes)
    }
})
