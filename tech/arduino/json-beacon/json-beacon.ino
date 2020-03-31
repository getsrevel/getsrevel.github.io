#include <ArduinoJson.h>

const int WAIT_MS_MIN = 500;
const int WAIT_MS_MAX = 8000;
const unsigned char TAG_COUNT = 5;

char* tagIds[TAG_COUNT] = {
  "4B 61 73 70 65 72 36 37 38 39 3A 3B",
  "E2 00 00 1B 63 15 02 48 16 00 DB 24",
  "E2 00 00 1B 63 15 02 48 17 00 DA F8",
  "E2 00 00 1B 63 15 02 48 17 20 DA F4",
  "E2 00 00 1B 63 15 02 48 15 90 DB 2C",
};

void setup() {
  Serial.begin(115200);
}

void loop() {
  int waitTime = random(WAIT_MS_MIN, WAIT_MS_MAX);
  int tagIdIndex = random(0, TAG_COUNT);

  DynamicJsonDocument doc(1024);
  doc["waitTime"] = waitTime;
  doc["tagIdIndex"] = tagIdIndex;
  doc["tagId"] = tagIds[tagIdIndex];
  serializeJson(doc, Serial);

  Serial.println();
  delay(waitTime);
}
