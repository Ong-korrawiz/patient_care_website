// User and Authentication Types
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'nurse' | 'doctor' | 'caregiver';
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Stock Management Types
export interface Stock {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  minLevel: number;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface StockLog {
  id: string;
  stockId: string;
  stock?: Stock;
  action: 'IN' | 'OUT';
  quantity: number;
  notes?: string;
  userId: string;
  user?: User;
  timestamp: Date;
}

// Routine/Activity Types
export type ActivityType = 'feeding' | 'turning' | 'suctioning' | 'cleaning' | 'vitals' | 'other';

export interface ActivityDetails {
  [key: string]: any;
}

export interface RoutineLog {
  _id?: string;
  patientId: string;
  activityType: ActivityType;
  details: ActivityDetails;
  timestamp: Date;
  userId: string;
  notes?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Activity Type Specific Details
export interface FeedingDetails extends ActivityDetails {
  volume: number;
  type: 'tube' | 'oral';
  tolerance?: 'well' | 'partial' | 'poor';
}

export interface TurningDetails extends ActivityDetails {
  position: 'left' | 'right' | 'back' | 'prone';
  duration?: number;
}

export interface SuctioningDetails extends ActivityDetails {
  volume?: string;
  color?: string;
  consistency?: 'thin' | 'thick' | 'bloody';
}

export interface VitalsDetails extends ActivityDetails {
  bp?: string; // e.g., "120/80"
  hr?: number; // heart rate
  spo2?: number; // oxygen saturation
  temp?: number; // temperature
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
}

export interface ApiErrorResponse {
  success: false;
  error: string;
  message?: string;
}

// Pagination Types
export interface PaginationParams {
  page: number;
  limit: number;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}
