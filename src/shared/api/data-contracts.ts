/**
 * CabinetOut
 * Schema for output cabinet.
 */
export interface ICabinetOut {
  /**
   * Id
   * @format uuid
   */
  id?: string;
  /**
   * Title
   * @maxLength 60
   */
  number: string;
  /** Description */
  description?: null;
}

/**
 * DoctorOut
 * Schema for output Doctor.
 */
export interface IDoctorOut {
  /**
   * Cabinets
   * @default []
   */
  cabinets?: ICabinetOut[];
  priority_cabinet: ICabinetOut | null | (ICabinetOut & null);
  /**
   * Id
   * @format uuid
   */
  id?: string;
  /**
   * Firstname
   * @maxLength 30
   */
  first_name: string;
  /**
   * Lastname
   * @maxLength 30
   */
  last_name: string;
  /** Fathername */
  father_name?: null;
}

/**
 * Message
 * Message schema api response.
 */
export interface IMessage {
  /** Message */
  message: string;
}

/**
 * DoctorAdd
 * Schema for input Doctor.
 */
export interface IDoctorAdd {
  /**
   * Cabinets
   * @default []
   */
  cabinets?: string[];
  /** Priority Cabinet */
  priority_cabinet: null;
  /**
   * Firstname
   * @maxLength 30
   */
  first_name: string;
  /**
   * Lastname
   * @maxLength 30
   */
  last_name: string;
  /** Fathername */
  father_name?: null;
}

/**
 * CabinetAdd
 * Schema for new cabinet.
 */
export interface ICabinetAdd {
  /**
   * Title
   * @maxLength 60
   */
  number: string;
  /** Description */
  description?: null;
}

/**
 * IntervalOut
 * Schema for output Interval.
 */
export interface IIntervalOut {
  /** Schema for output Doctor. */
  doctor: IDoctorOut;
  /** Schema for output Schedule. */
  schedule: IScheduleOut;
  cabinet: ICabinetOut | null | (ICabinetOut & null);
  /**
   * Id
   * @format uuid
   */
  id?: string;
  /**
   * Start
   * @format date-time
   */
  start: string;
  /**
   * End
   * @format date-time
   */
  end: string;
}

/**
 * ScheduleOut
 * Schema for output Schedule.
 */
export interface IScheduleOut {
  /**
   * Id
   * @format uuid
   */
  id?: string;
  /**
   * Name
   * @maxLength 60
   */
  name: string;
  /** Description */
  description?: null;
}

/**
 * IntervalAdd
 * Schema for new Interval.
 */
export interface IIntervalAdd {
  /**
   * Start
   * @format date-time
   */
  start: string;
  /**
   * End
   * @format date-time
   */
  end: string;
  /** Cabinet */
  cabinet_id?: null;
  /**
   * Doctor
   * @format uuid
   */
  doctor_id: string;
  /**
   * Schedule
   * @format uuid
   */
  schedule_id: string;
}

/**
 * DefaultResponse
 * Response schema api response.
 */
export interface IDefaultResponse {
  /**
   * Status
   * @default "success"
   */
  status?: string;
  /** Message */
  message: string;
  /**
   * Error
   * @default []
   */
  error?: string[];
}

/**
 * ScheduleAdd
 * Schema for newSchedule.
 */
export interface IScheduleAdd {
  /**
   * Name
   * @maxLength 60
   */
  name: string;
  /** Description */
  description?: null;
}
