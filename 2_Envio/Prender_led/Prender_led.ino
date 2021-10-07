int incomingByte = 0; // for incoming serial data
int valor;
#define LED_VERDE 12
#define LED_ROJO 10


void setup() {
  Serial.begin(9600); // opens serial port, sets data rate to 9600 bps
  pinMode(LED_VERDE, OUTPUT);
  pinMode(LED_ROJO, OUTPUT);
  
}

void loop() {
  // send data only when you receive data:

  valor = Serial.read();
  digitalWrite(LED_VERDE, HIGH);
  digitalWrite(LED_ROJO, HIGH);
  
  
  if (Serial.available() > 0) {
    // read the incoming byte:
    incomingByte = Serial.read();

    // say what you got:
    Serial.print("I received: ");
    Serial.println((char)incomingByte);
  }
}
