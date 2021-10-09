int valor = 0; // for incoming serial data
#define LED 12


void setup() {
  Serial.begin(9600); // opens serial port, sets data rate to 9600 bps
  Serial.write('Saludando al servidor');
  pinMode(LED, OUTPUT);
}

void loop() {
  // send data only when you receive data:
  
  if (Serial.available() > 0) {
    // read the incoming byte:
    valor = Serial.read();
    // say what you got:
    Serial.print("Recibí: ");
    Serial.println((char)valor);

    if (valor == '1'){
      digitalWrite(LED, HIGH);
    }
    else if (valor == '0'){
      digitalWrite(LED, LOW);
    }
    else{
      Serial.println("Valor no entendido");
    }
    delay(200);
  }
}
