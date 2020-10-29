typedef struct MyTask {
   void (*handler)();
   int intervalMs;
   int taskId;
   unsigned long lastRunMs;
} MyTask;


// Forward declaration of the task runner functions
void task_main();
void task_A();
void task_B();
void task_C();

MyTask tasks[] = {
  {.handler=task_main},
  {task_A,300},
  {task_B,500},
  {task_C,3000}
};

const int arrSize = sizeof(tasks)/sizeof(MyTask);

void setup() {
  // initialize serial communication at 115200 bits per second:
  Serial.begin(115200);
  
  Serial.print("Task count: ");
  Serial.println(arrSize);

  for(int i=0 ; i<arrSize; i++){
    if(tasks[i].intervalMs <= 0){
      tasks[i].intervalMs = (i+1)*100;
    }
    String msg = "";
    msg = "task id: ";
    msg += i;
    msg += ", interval ";
    msg += tasks[i].intervalMs;
    Serial.println(msg);
  }
  
  Serial.println("Setup DONE");
}

// example of non-blocking asyncronous wait loop using function pointers
void loop() {
  for(int i=0 ; i<arrSize; i++){
    runInterval(&tasks[i]);
  }
}

void runInterval(struct MyTask *t){
  unsigned long tickMs = millis();
  unsigned long diffMs = tickMs - t->lastRunMs;

  // Handle first run
  if(0 == t->lastRunMs){
    t->lastRunMs = tickMs;
  }
  bool shouldRun = (t->intervalMs < diffMs);
  if(!shouldRun){
    return;
  }
  // Store last run
  t->lastRunMs = tickMs;

  // Perform the process by calling the handler function
  (t->handler)();
}

// Create some tasks to run in the example
void task_main(){
  static int runCount = 0;
  Serial.print(".");
  if(0 == runCount % 30){
    Serial.println();
    Serial.print(runCount);
    Serial.print(" : ");
  }
  runCount++;
}

void task_A(){
  Serial.print("A");
}

void task_B(){
  Serial.print("B");
}

void task_C(){
  Serial.print("C");
}
