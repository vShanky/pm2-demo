# pm2-demo 🚀

**pm2-demo** is a self-healing Node.js app managed by **PM2**.  
It demonstrates **auto-restart, monitoring, scaling, and crash recovery** in a practical way.

---

## Features

- ✅ Auto-restart on crashes  
- 📊 Real-time monitoring with `pm2 monit`  
- ⚡ Load balancing with multiple instances (`pm2 scale`)  
- 💥 Simulated crash endpoint to test PM2  
- 🐳 Optional Docker support for containerized deployment  

---

## Prerequisites

- Node.js >= 18  
- npm  
- PM2 (`npm install pm2 -g`)  
- Docker (optional, for containerized usage)  

---

## Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/pm2-demo.git
cd pm2-demo
npm install
```

---

## Running Locally with Node

Start the app using Node:

```bash
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to check if the app is running.

---

## Running with PM2

Start the app using PM2:

```bash
pm2 start ecosystem.config.js
```

### Useful PM2 Commands

```bash
pm2 monit                # Monitor running apps
pm2 logs                 # View logs
pm2 list                 # Check app status
pm2 stop pm2-demo
pm2 restart pm2-demo
pm2 scale pm2-demo 2     # Run 2 instances for load balancing
pm2 save                 # Save process list for startup
pm2 startup              # Configure PM2 to start on system boot
```

### Test Crash Recovery

Trigger a crash:

```bash
curl http://localhost:3000/crash
```

PM2 will automatically restart the app.

---

## Running with Docker

### Build Docker Image

```bash
docker build -t pm2-demo .
```

### Run Container

```bash
docker run -p 3000:3000 pm2-demo
```

Visit [http://localhost:3000](http://localhost:3000) to see the app in action.

> **Tip:** PM2 is already included inside the Docker image via `pm2-runtime`.

---

## API Endpoints

| Endpoint   | Description                              |
|------------|------------------------------------------|
| `/`        | Check if the app is running              |
| `/quote`   | Get a random motivational/dev quote      |
| `/crash`   | Simulate crash to test PM2 auto-restart  |

---

## Folder Structure

```
pm2-demo/
├── src/
│   └── index.js         # Main app
├── package.json         # Dependencies and scripts
├── ecosystem.config.js  # PM2 configuration
├── Dockerfile           # Optional Docker setup
└── README.md            # Project documentation
```

---

## License

MIT License
