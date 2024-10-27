import { baseUrl } from '../config';
import {
  ICabinetAdd,
  ICabinetOut,
  IDefaultResponse,
  IDoctorAdd,
  IDoctorOut,
  IIntervalAdd,
  IIntervalOut,
  IMessage,
  IScheduleAdd,
  IScheduleOut,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class ScheduleApi<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Get a list of all existing doctors.
   *
   * @tags doctors
   * @name AppsDoctorsApiHandlersAll
   * @summary All
   * @request GET:/api/v1/doctors/
   */
  appsDoctorsApiHandlersAll = (params: RequestParams = {}) =>
    this.request<IDoctorOut[], IMessage>({
      path: `${baseUrl}/api/v1/doctors/`,
      method: 'GET',
      format: 'json',
      ...params,
    });

  /**
   * @description Add new doctor to database.
   *
   * @tags doctors
   * @name AppsDoctorsApiHandlersAdd
   * @summary Add
   * @request POST:/api/v1/doctors/
   */
  appsDoctorsApiHandlersAdd = (data: IDoctorAdd, params: RequestParams = {}) =>
    this.request<IDoctorOut, IMessage>({
      path: `${baseUrl}/api/v1/doctors/`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Get existing doctor.
   *
   * @tags doctors
   * @name AppsDoctorsApiHandlersGet
   * @summary Get
   * @request GET:/api/v1/doctors/{doctor_id}
   */
  appsDoctorsApiHandlersGet = (doctorId: string, params: RequestParams = {}) =>
    this.request<IDoctorOut, IMessage>({
      path: `${baseUrl}/api/v1/doctors/${doctorId}`,
      method: 'GET',
      format: 'json',
      ...params,
    });

  /**
   * @description Update existing doctor fields.
   *
   * @tags doctors
   * @name AppsDoctorsApiHandlersUpdate
   * @summary Update
   * @request PUT:/api/v1/doctors/{doctor_id}
   */
  appsDoctorsApiHandlersUpdate = (doctorId: string, data: IDoctorAdd, params: RequestParams = {}) =>
    this.request<IDoctorOut, IMessage>({
      path: `${baseUrl}/api/v1/doctors/${doctorId}`,
      method: 'PUT',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Delete doctor from database.
   *
   * @tags doctors
   * @name AppsDoctorsApiHandlersDelete
   * @summary Delete
   * @request DELETE:/api/v1/doctors/{doctor_id}
   */
  appsDoctorsApiHandlersDelete = (doctorId: string, params: RequestParams = {}) =>
    this.request<IMessage, IMessage>({
      path: `${baseUrl}/api/v1/doctors/${doctorId}`,
      method: 'DELETE',
      format: 'json',
      ...params,
    });

  /**
   * @description Get a list of all existing cabinets.
   *
   * @tags cabinets
   * @name AppsCabinetsApiHandlersAll
   * @summary All
   * @request GET:/api/v1/cabinets/
   */
  appsCabinetsApiHandlersAll = (params: RequestParams = {}) =>
    this.request<ICabinetOut[], IMessage>({
      path: `${baseUrl}/api/v1/cabinets/`,
      method: 'GET',
      format: 'json',
      ...params,
    });

  /**
   * @description Add new cabinet to database.
   *
   * @tags cabinets
   * @name AppsCabinetsApiHandlersAdd
   * @summary Add
   * @request POST:/api/v1/cabinets/
   */
  appsCabinetsApiHandlersAdd = (data: ICabinetAdd, params: RequestParams = {}) =>
    this.request<ICabinetOut, IMessage>({
      path: `${baseUrl}/api/v1/cabinets/`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Get existing cabinet.
   *
   * @tags cabinets
   * @name AppsCabinetsApiHandlersGet
   * @summary Get
   * @request GET:/api/v1/cabinets/{cabinet_id}
   */
  appsCabinetsApiHandlersGet = (cabinetId: string, params: RequestParams = {}) =>
    this.request<ICabinetOut, IMessage>({
      path: `${baseUrl}/api/v1/cabinets/${cabinetId}`,
      method: 'GET',
      format: 'json',
      ...params,
    });

  /**
   * @description Update existing cabinet fields.
   *
   * @tags cabinets
   * @name AppsCabinetsApiHandlersUpdate
   * @summary Update
   * @request PUT:/api/v1/cabinets/{cabinet_id}
   */
  appsCabinetsApiHandlersUpdate = (
    cabinetId: string,
    data: ICabinetAdd,
    params: RequestParams = {}
  ) =>
    this.request<ICabinetOut, IMessage>({
      path: `${baseUrl}/api/v1/cabinets/${cabinetId}`,
      method: 'PUT',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Delete cabinet from database.
   *
   * @tags cabinets
   * @name AppsCabinetsApiHandlersDelete
   * @summary Delete
   * @request DELETE:/api/v1/cabinets/{cabinet_id}
   */
  appsCabinetsApiHandlersDelete = (cabinetId: string, params: RequestParams = {}) =>
    this.request<IMessage, IMessage>({
      path: `${baseUrl}/api/v1/cabinets/${cabinetId}`,
      method: 'DELETE',
      format: 'json',
      ...params,
    });

  /**
   * @description Get a list of all existing intervals.
   *
   * @tags intervals
   * @name AppsIntervalsApiHandlersAll
   * @summary All
   * @request GET:/api/v1/intervals/
   */
  appsIntervalsApiHandlersAll = (params: RequestParams = {}) =>
    this.request<IIntervalOut[], IMessage>({
      path: `${baseUrl}/api/v1/intervals/`,
      method: 'GET',
      format: 'json',
      ...params,
    });

  /**
   * @description Add new interval to database.
   *
   * @tags intervals
   * @name AppsIntervalsApiHandlersAdd
   * @summary Add
   * @request POST:/api/v1/intervals/
   */
  appsIntervalsApiHandlersAdd = (data: IIntervalAdd, params: RequestParams = {}) =>
    this.request<IIntervalOut, IMessage>({
      path: `${baseUrl}/api/v1/intervals/`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Get existing interval.
   *
   * @tags intervals
   * @name AppsIntervalsApiHandlersGet
   * @summary Get
   * @request GET:/api/v1/intervals/{interval_id}
   */
  appsIntervalsApiHandlersGet = (intervalId: string, params: RequestParams = {}) =>
    this.request<IIntervalOut, IMessage>({
      path: `${baseUrl}/api/v1/intervals/${intervalId}`,
      method: 'GET',
      format: 'json',
      ...params,
    });

  /**
   * @description Update existing interval fields.
   *
   * @tags intervals
   * @name AppsIntervalsApiHandlersUpdate
   * @summary Update
   * @request PUT:/api/v1/intervals/{interval_id}
   */
  appsIntervalsApiHandlersUpdate = (
    intervalId: string,
    data: IIntervalAdd,
    params: RequestParams = {}
  ) =>
    this.request<IIntervalOut, IMessage>({
      path: `${baseUrl}/api/v1/intervals/${intervalId}`,
      method: 'PUT',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Delete interval from database.
   *
   * @tags intervals
   * @name AppsIntervalsApiHandlersDelete
   * @summary Delete
   * @request DELETE:/api/v1/intervals/{interval_id}
   */
  appsIntervalsApiHandlersDelete = (intervalId: string, params: RequestParams = {}) =>
    this.request<IMessage, IMessage>({
      path: `${baseUrl}/api/v1/intervals/${intervalId}`,
      method: 'DELETE',
      format: 'json',
      ...params,
    });

  /**
   * @description Clear all cabinets.
   *
   * @tags algorithms
   * @name AppsAlgorithmApiHandlersClearCabinets
   * @summary Clear Cabinets
   * @request GET:/api/v1/algorithms/clear_cabinets
   */
  appsAlgorithmApiHandlersClearCabinets = (params: RequestParams = {}) =>
    this.request<IMessage, IMessage>({
      path: `${baseUrl}/api/v1/algorithms/clear_cabinets`,
      method: 'GET',
      format: 'json',
      ...params,
    });

  /**
   * @description No coments... What is it???
   *
   * @tags algorithms
   * @name AppsAlgorithmApiHandlersV1
   * @summary V1
   * @request GET:/api/v1/algorithms/v1
   */
  appsAlgorithmApiHandlersV1 = (params: RequestParams = {}) =>
    this.request<IMessage, IMessage>({
      path: `${baseUrl}/api/v1/algorithms/v1`,
      method: 'GET',
      format: 'json',
      ...params,
    });

  /**
   * @description v2 for alghoritms.
   *
   * @tags algorithms
   * @name AppsAlgorithmApiHandlersV2
   * @summary V2
   * @request GET:/api/v1/algorithms/v2
   */
  appsAlgorithmApiHandlersV2 = (params: RequestParams = {}) =>
    this.request<IMessage, IMessage>({
      path: `${baseUrl}/api/v1/algorithms/v2`,
      method: 'GET',
      format: 'json',
      ...params,
    });

  /**
   * @description Check successful transactions.
   *
   * @tags payments
   * @name AppsPaymentsApiHandlersCheckPayment
   * @summary Check Payment
   * @request GET:/api/v1/payments/check
   */
  appsPaymentsApiHandlersCheckPayment = (params: RequestParams = {}) =>
    this.request<IDefaultResponse, IMessage>({
      path: `${baseUrl}/api/v1/payments/check`,
      method: 'GET',
      format: 'json',
      ...params,
    });

  /**
   * @description Get lint for quick payment.
   *
   * @tags payments
   * @name AppsPaymentsApiHandlersGetPayLink
   * @summary Get Pay Link
   * @request GET:/api/v1/payments/pay_link
   */
  appsPaymentsApiHandlersGetPayLink = (params: RequestParams = {}) =>
    this.request<IDefaultResponse, IMessage>({
      path: `${baseUrl}/api/v1/payments/pay_link`,
      method: 'GET',
      format: 'json',
      ...params,
    });

  /**
   * @description Get a list of all existing schedule.
   *
   * @tags schedules
   * @name AppsScheduleApiHandlersAll
   * @summary All
   * @request GET:/api/v1/schedules/
   */
  appsScheduleApiHandlersAll = (params: RequestParams = {}) =>
    this.request<IScheduleOut[], IMessage>({
      path: `${baseUrl}/api/v1/schedules/`,
      method: 'GET',
      format: 'json',
      ...params,
    });

  /**
   * @description Add new Schedule to database.
   *
   * @tags schedules
   * @name AppsScheduleApiHandlersAdd
   * @summary Add
   * @request POST:/api/v1/schedules/
   */
  appsScheduleApiHandlersAdd = (data: IScheduleAdd, params: RequestParams = {}) =>
    this.request<IScheduleOut, IMessage>({
      path: `${baseUrl}/api/v1/schedules/`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Get existing schedule.
   *
   * @tags schedules
   * @name AppsScheduleApiHandlersGet
   * @summary Get
   * @request GET:/api/v1/schedules/{schedule_id}
   */
  appsScheduleApiHandlersGet = (scheduleId: string, params: RequestParams = {}) =>
    this.request<IScheduleOut, IMessage>({
      path: `${baseUrl}/api/v1/schedules/${scheduleId}`,
      method: 'GET',
      format: 'json',
      ...params,
    });

  /**
   * @description Update existing schedule fields.
   *
   * @tags schedules
   * @name AppsScheduleApiHandlersUpdate
   * @summary Update
   * @request PUT:/api/v1/schedules/{schedule_id}
   */
  appsScheduleApiHandlersUpdate = (
    scheduleId: string,
    data: IScheduleAdd,
    params: RequestParams = {}
  ) =>
    this.request<IScheduleOut, IMessage>({
      path: `${baseUrl}/api/v1/schedules/${scheduleId}`,
      method: 'PUT',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  /**
   * @description Delete schedule from database.
   *
   * @tags schedules
   * @name AppsScheduleApiHandlersDelete
   * @summary Delete
   * @request DELETE:/api/v1/schedules/{schedule_id}
   */
  appsScheduleApiHandlersDelete = (scheduleId: string, params: RequestParams = {}) =>
    this.request<IMessage, IMessage>({
      path: `${baseUrl}/api/v1/schedules/${scheduleId}`,
      method: 'DELETE',
      format: 'json',
      ...params,
    });

  /**
   * @description Generate intervals for alghoritms.
   *
   * @tags tests
   * @name AppsAlgorithmApiHandlersGenerateIntervals
   * @summary Generate Intervals
   * @request GET:/api/v1/tests/generate_intervals
   */
  appsAlgorithmApiHandlersGenerateIntervals = (params: RequestParams = {}) =>
    this.request<IMessage, IMessage>({
      path: `${baseUrl}/api/v1/tests/generate_intervals`,
      method: 'GET',
      format: 'json',
      ...params,
    });

  /**
   * @description Generate cabinets for alghoritms.
   *
   * @tags tests
   * @name AppsAlgorithmApiHandlersGenerateCabinets
   * @summary Generate Cabinets
   * @request GET:/api/v1/tests/generate_cabinets
   */
  appsAlgorithmApiHandlersGenerateCabinets = (params: RequestParams = {}) =>
    this.request<IMessage, IMessage>({
      path: `${baseUrl}/api/v1/tests/generate_cabinets`,
      method: 'GET',
      format: 'json',
      ...params,
    });

  /**
   * @description Generate doctors for alghoritms.
   *
   * @tags tests
   * @name AppsAlgorithmApiHandlersGenerateDoctors
   * @summary Generate Doctors
   * @request GET:/api/v1/tests/generate_doctors
   */
  appsAlgorithmApiHandlersGenerateDoctors = (params: RequestParams = {}) =>
    this.request<IMessage, IMessage>({
      path: `${baseUrl}/api/v1/tests/generate_doctors`,
      method: 'GET',
      format: 'json',
      ...params,
    });

  /**
   * @description Clear all data for alghoritms.
   *
   * @tags tests
   * @name AppsAlgorithmApiHandlersClearAllData
   * @summary Clear All Data
   * @request GET:/api/v1/tests/clear_all_data
   */
  appsAlgorithmApiHandlersClearAllData = (params: RequestParams = {}) =>
    this.request<IMessage, IMessage>({
      path: `${baseUrl}/api/v1/tests/clear_all_data`,
      method: 'GET',
      format: 'json',
      ...params,
    });
}
