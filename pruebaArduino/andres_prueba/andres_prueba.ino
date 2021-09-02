void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  while(!Serial);
  Serial.print("Contador");

}

void loop() {
  // put your main code here, to run repeatedly:
  for(int i=0; i<254; i++){
    Serial.print(i);
    Serial.print("\t");
    delay(200);
  }

}
