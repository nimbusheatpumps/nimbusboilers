const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

require('dotenv').config();

const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  console.error('MONGO_URI environment variable is not set');
  process.exit(1);
}

const backupBaseDir = path.join(__dirname, '..', 'backups');
const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
const backupDir = path.join(backupBaseDir, `backup_${timestamp}`);

// Ensure the backup directory exists
if (!fs.existsSync(backupBaseDir)) {
  fs.mkdirSync(backupBaseDir, { recursive: true });
}

const mongodumpPath = 'C:\\Program Files\\MongoDB\\Tools\\100\\bin\\mongodump.exe';

const child = spawn(mongodumpPath, ['--uri', mongoUri, '--out', backupDir]);

child.stdout.on('data', (data) => {
  console.log(data.toString());
});

child.stderr.on('data', (data) => {
  console.error(data.toString());
});

child.on('close', (code) => {
  if (code === 0) {
    console.log(`Backup completed successfully. Files saved to: ${backupDir}`);
  } else {
    console.error(`mongodump exited with code ${code}`);
  }
});

child.on('error', (error) => {
  console.error(`Error executing mongodump: ${error.message}`);
});