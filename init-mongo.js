db = db.getSiblingDB('patient_care_routine');
db.createCollection('routine_logs');
db.routine_logs.createIndex({ patientId: 1, timestamp: -1 });
console.log('MongoDB initialized with routine_logs collection');
