# Simple Batch File to Open Emulator on Windows.
SET USER = 'Justi'
cd C:\Users\%USER%\AppData\Local\Android\Sdk\tools\
emulator.exe -netdelay none -netspeed full -avd Nexus_5_API_24
pause
