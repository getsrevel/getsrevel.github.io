#include <ArduinoJson.h>

// Allocate the JSON document
//
// Inside the brackets, 200 is the capacity of the memory pool in bytes.
// Don't forget to change this value to match your JSON document.
// Use arduinojson.org/v6/assistant to compute the capacity.
//  StaticJsonDocument<200> doc;

// StaticJsonDocument<N> allocates memory on the stack, it can be
// replaced by DynamicJsonDocument which allocates in the heap.
//
DynamicJsonDocument doc(200);

int periodMs = 2000;
int dutyPct = 50;

void setup()
{
  // initialize digital pin LED_BUILTIN as an output.
  pinMode(LED_BUILTIN, OUTPUT);

  Serial.begin(115200);
  // wait for serial port to connect. Needed for native USB
  while (!Serial)
  {
    continue;
  }
  Serial.println("Ready for commands");
}

void loop()
{
  myLedControl();
  parseCommands();
}


// Example of test input json
/* 
{"ts": 1000, "duty": 10 }
 */
void parseCommands()
{
  // reply only when you receive data:
  if (Serial.available() > 0)
  {

    // Deserialize the JSON document
    DeserializationError error = deserializeJson(doc, Serial);

    Serial.println("Received:");
    serializeJson(doc, Serial);
    Serial.println();

    // Test if parsing succeeds.
    if (error)
    {
      Serial.print(F("deserializeJson() failed: "));
      Serial.println(error.c_str());
      return;
    }

    if (doc["ts"])
    {
      unsigned int ts = doc["ts"];
      Serial.print("got ts: ");
      Serial.println(ts);
      periodMs = ts;
    }

    if (doc["duty"])
    {
      int duty = doc["duty"];
      Serial.print("got duty: ");
      Serial.println(duty);
      duty = constrain(duty, 0, 100);
      Serial.print("constrained duty to [0, 100], using: ");
      Serial.println(duty);
      dutyPct = duty;
    }

  }
}

// toggle the builtin LED state
void myLedControl()
{
  //map(value, fromLow, fromHigh, toLow, toHigh)
  int highDelayMs = map(dutyPct, 0, 100, 0, periodMs);
  int lowDelayMs = periodMs - highDelayMs;
  
  digitalWrite(LED_BUILTIN, HIGH);
  delay(highDelayMs);
  digitalWrite(LED_BUILTIN, LOW);
  delay(lowDelayMs);
}
