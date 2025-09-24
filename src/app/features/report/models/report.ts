import { CRUD } from "../../../shared/models/action";
import { Location } from "../../../shared/models/location";
import { Media } from "../../../shared/models/media";
import { Vessel } from "../../../shared/models/vessel";

export type ReportType = 'None' | 'Near-Miss' | 'Non-Compliance';
export type ReportState = 'Pending' | 'In Progress' | 'Complete'



export interface ReportCategoryModel {
  label: string;
  value: string;
}

export interface ReportCreateModel {
  action: CRUD;
  type: ReportType;
  date: Date;
  dateStr: string;
  vessel: Vessel;
  title: string;
  category: ReportCategoryModel;
  occurredDate: Date;
  occurredDateStr: string;
  location: Location;
  description: string;
  pictures: Media[];
  videos: Media[];
}

export interface ReportModel {
  id: string;
  date: Date;
  category: string;
  vessel_name: string;
  title: string;
  location: string;
  status: string;
}
