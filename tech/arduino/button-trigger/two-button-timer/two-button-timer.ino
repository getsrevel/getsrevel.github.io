const int startPin = 2;
const int gatePin = 3;
const int ledPin =  13;

int isStarted = false;
int hasTriggeredGate = false;

unsigned long startTime = 0;
unsigned long gateTime = 0;

void setup() {
  pinMode(ledPin, OUTPUT);
  pinMode(startPin, INPUT_PULLUP);
  pinMode(gatePin, INPUT_PULLUP);

  Serial.begin(9600);
  Serial.println("Ready...");
}

void loop() {
  int startState = digitalRead(startPin);

  // Turn on LED while measurement is running
  int measRunning = isStarted && !hasTriggeredGate;
  digitalWrite(ledPin, measRunning);

  // Handle start trigger
  if (HIGH == startState && !isStarted) {
    startTime = millis();
    isStarted = true;
    Serial.print("Start time 1: ");
    Serial.println(startTime);
  }

  // Handle gate trigger
  int gateState = digitalRead(gatePin);
  if (LOW == gateState && !hasTriggeredGate) {
    gateTime = millis();
    hasTriggeredGate = true;
    Serial.print("Gate time: ");
    Serial.println(gateTime);
    Serial.print("Time diff: ");
    unsigned long timeDiff = gateTime - startTime; 
    Serial.println(timeDiff);
  }  
}
