import { CRUD } from "../../../shared/models/action";

export type ReminderInterval = 'Once' | 'Repeat';

export interface ReminderIntervalModel {
  label: string;
  value: ReminderInterval;
}

export interface MemoAlertCreateModel {
  action: CRUD;
  date: Date;
  dateStr: string;
  title: string;
  category: string;
  description: string;
  effectiveDate: Date;
  effectiveDateStr: string;
  isRequiredAck: boolean;
  reminderConfig: ReminderIntervalModel;
}

export interface MemoAlertModel {
  id: string;
  date: Date;
  type: string;
  title: string;
}
