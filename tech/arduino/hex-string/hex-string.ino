
char my_str[] = {72, 101, 106, 44, 32, 10, 86, 101, 114, 100, 101, 110, 33, 0};

char outputBuffer[3];

// Helper function for converting byte value to 2-digit hex string
void byte2HexStr(byte val, char* outputBuffer){
  const char HEX_DIGITS[15] = "0123456789ABCDEF";

  byte upper_nibble_index = (val & 0xf0) >> 4;
  byte lower_nibble_index = val & 0xf;

  outputBuffer[0] = HEX_DIGITS[upper_nibble_index];
  outputBuffer[1] = HEX_DIGITS[lower_nibble_index];
  outputBuffer[2] = '\0';
}


void setup()
{
  Serial.begin(115200);

  // Output some example strings
  Serial.println("Content:");
  Serial.println(my_str);
  Serial.println();

  Serial.println("Content, decimal values of bytes:");
  for(int i = 0; i < sizeof(my_str); i++) {
    Serial.print(my_str[i], DEC);
    Serial.print(" ");
  }
  Serial.println('\n');

  Serial.println("Content, hex values of bytes:");
  for(int i = 0; i < sizeof(my_str); i++) {
    Serial.print(my_str[i], HEX);
    Serial.print(" ");
  }
  Serial.println('\n');

  Serial.println("Content, hex values zero-padded bytes:");
  for(int i = 0; i < sizeof(my_str); i++) {
    byte2HexStr(my_str[i], outputBuffer);
    Serial.print(outputBuffer);
    Serial.print(" ");
  }
  Serial.println('\n');

  Serial.println("Content, append to string object:");
  String myStrObject = "";
  for(int i = 0; i < sizeof(my_str); i++) {
    myStrObject += String(my_str[i], HEX);
  }
  Serial.println(myStrObject);
  Serial.println();

  Serial.println("Content, append to string object using byte2HexStr helper:");
  myStrObject = "";
  for(int i = 0; i < sizeof(my_str); i++) {
    byte2HexStr(my_str[i], outputBuffer);
    myStrObject += outputBuffer;
  }
  Serial.println(myStrObject);
  Serial.println();

  Serial.println("Content, append to string object with separator:");
  myStrObject = "";
  for(int i = 0; i < sizeof(my_str); i++) {
    myStrObject += String(my_str[i], HEX);

    // add separator except for the last element
    if(i < (sizeof(my_str) - 1)){
      myStrObject += ":";
    }
    
  }
  Serial.println(myStrObject);
  Serial.println();

  Serial.println("Content, append to string object using byte2HexStr helper with separator:");
  myStrObject = "";
  for(int i = 0; i < sizeof(my_str); i++) {
    byte2HexStr(my_str[i], outputBuffer);
    myStrObject += outputBuffer;

    // add separator except for the last element
    if(i < (sizeof(my_str) - 1)){
      myStrObject += ":";
    }
    
  }
  Serial.println(myStrObject);
  Serial.println();

}

void loop()
{
}
