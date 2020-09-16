# Azure Storage Queue Consumer

Azure Storage Queue Consumer is a package that works with Azure Storage Queue.

It allows users to use Azure Storage Queue and create a consumer that looks for new messages in the queue.

---

# Getting Started

**Prerequisites**: before you can start using this package you must have an **Azure Subscription** and a **Storage Account**

## Install the package

The recommended way to install Azure Storage Queue Consumer is with npm. To do so type the following in a terminal:

```bash
npm install azure-storage-queue-consumer
```

# Examples

## Import the package

To use the QueueConsumer we first need to import it, this can be done on the following way:

```typescript
import QueueConsumer = require("azure-storage-queue-consumer");
```

After importing the package we need to setup the consumer so we can consume the messages from our queue.

```typescript
const consumer = QueueConsumer.create({
  account: "storageAccountName",
  sas: "Shared Access Signatures",
  queueName: "queueName",
  handleMessage: async (message) => {
    //Do something with the message
  },
  interval: 3000, //Interval in number
});
```

# What still needs to be done:

- Deleting messages after consuming and processing it
- More to come
