import time
import network
import machine
import urequests as req
import json

ssid = ''
pw = ''
url = ''
h = { "Content-Type": "application/json", "Authorization": "Bearer " }
last_sent = False
door_open = False

# Using the Raspberry Pi Pico W onboard led for debugging in possible error situations.
dbled = machine.Pin("LED", machine.Pin.OUT)
sensor = machine.Pin(1, machine.Pin.IN, machine.Pin.PULL_UP)

wlan = network.WLAN(network.STA_IF)
wlan.active(True)
wlan.connect(ssid, pw)
while not wlan.isconnected() and wlan.status() >= 0:
    time.sleep(1)

while True:
    time.sleep(3)
    dbled.toggle()
    door_open = bool(sensor.value())
    if door_open != last_sent:
        try:
            res = req.post(url, headers = h, data = json.dumps({"status": door_open}))
            res.close
            last_sent = door_open
        # This seems to be the most reliable configuration, if there's any error in sending/receiving the request, the controller just
        # terminates the connection completely and then reconnects.
        except:
            if wlan.status() < 0 or wlan.status() >= 3:
                wlan.disconnect()
                wlan.connect(ssid, pw)
                while not wlan.isconnected() and wlan.status() >= 0:
                    time.sleep(1)
    