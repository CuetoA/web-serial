#define LED_GREEN 13
#define LED_RED 12

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  pinMode(LED_GREEN, OUTPUT);
  
  while(!Serial);
  digitalWrite(LED_RED, HIGH);
  //Serial.print("Contador");

}

void loop() {
  // put your main code here, to run repeatedly:
  for(int i=0; i<254; i++){
    digitalWrite(LED_GREEN, HIGH);
    Serial.print(i, DEC);
    Serial.print("\n");
    delay(200);
  }

}
