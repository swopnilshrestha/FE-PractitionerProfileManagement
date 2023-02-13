export interface Practitioner {
  id?: number;
  email: string;
  name: string;
  phoneNumber: string;
  city: string;
  nextAppointment?: string;
  lastAppointment?: string;
  registerDate?: string;
}
