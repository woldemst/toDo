# toDo
Here is a "To-Do list " written with VanillaJS


importtimeimportboard# import digitalio # For use with SPIimportbusioimportadafruit_bmp280# Create library object using our Bus I2C porti2c =busio.I2C(board.SCL,board.SDA)bmp280 =adafruit_bmp280.Adafruit_BMP280_I2C(i2c)# OR create library object using our Bus SPI port# spi = busio.SPI(board.SCK, board.MOSI, board.MISO)# bmp_cs = digitalio.DigitalInOut(board.D10)# bmp280 = adafruit_bmp280.Adafruit_BMP280_SPI(spi, bmp_cs)# change this to match the location's pressure (hPa) at sea levelbmp280.sea_level_pressure =1013.25whileTrue:print("\nTemperature: %0.1f C"%bmp280.temperature)print("Pressure: %0.1f hPa"%bmp280.pressure)print("Altitude = %0.2f meters"%bmp280.altitude)time.sleep(2)
