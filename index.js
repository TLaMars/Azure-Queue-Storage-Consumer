const azure = require("@azure/storage-queue");

class QueueConsumer {
  constructor(options) {
    this.account = options.account;
    this.sas = options.sas;
    this.queueName = options.queueName;
    this.handleMessage = options.handleMessage;
    this.interval = options.interval;

    this.queueServiceClient = new azure.QueueServiceClient(
      `https://${this.account}.queue.core.windows.net${this.sas}`
    );
  }

  static create(options) {
    return new QueueConsumer(options);
  }

  async start() {
    this.stopped = false;
    this._startPolling();
  }

  stop() {
    this.stopped = true;
    clearInterval(this.poller);
  }

  async _startPolling() {
    const queueServiceClient = this.queueServiceClient;
    const queueName = this.queueName;
    const handleMessage = this.handleMessage;

    this.poller = setInterval(async function () {
      const queueClient = queueServiceClient.getQueueClient(queueName);
      const response = await queueClient.receiveMessages();
      const messages = response.receivedMessageItems;

      messages.forEach((message) => {
        handleMessage(message.messageText);
      });
    }, this.interval);
  }
}

module.exports = QueueConsumer;
