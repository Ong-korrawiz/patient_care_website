import mongoose, { Schema, Document } from 'mongoose';

export interface RoutineLog extends Document {
  patientId: string;
  activityType: 'feeding' | 'turning' | 'suctioning' | 'cleaning' | 'vitals' | 'other';
  details: Record<string, any>;
  timestamp: Date;
  userId: string;
  notes?: string;
  createdAt: Date;
}

const RoutineLogSchema = new Schema<RoutineLog>(
  {
    patientId: {
      type: String,
      required: true,
      index: true,
    },
    activityType: {
      type: String,
      enum: ['feeding', 'turning', 'suctioning', 'cleaning', 'vitals', 'other'],
      required: true,
    },
    // Flexible details object to store activity-specific data
    // Examples:
    // feeding: { volume: 250, type: 'tube', tolerance: 'well' }
    // turning: { position: 'left', duration: 30 }
    // suctioning: { volume: '20ml', color: 'clear', consistency: 'thin' }
    // vitals: { bp: '120/80', hr: 72, spo2: 98, temp: 37.2 }
    details: {
      type: Schema.Types.Mixed,
      default: {},
    },
    timestamp: {
      type: Date,
      required: true,
      default: Date.now,
      index: true,
    },
    userId: {
      type: String,
      required: true,
      index: true,
    },
    notes: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
    collection: 'routine_logs',
  }
);

// Create compound index for efficient querying
RoutineLogSchema.index({ patientId: 1, timestamp: -1 });

// Check if model exists before defining to avoid overwriting
const RoutineLog = mongoose.models.RoutineLog || mongoose.model<RoutineLog>('RoutineLog', RoutineLogSchema);

export default RoutineLog;
