declare class QueueConsumer {
  constructor(options: object);
  static create(options: object): QueueConsumer;
  start(): void;
  stop(): void;
}

export = QueueConsumer;
