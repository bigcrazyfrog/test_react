import { useEffect } from 'react';
import { ScheduleApi } from './shared/api/Api';

export const App = () => {
  useEffect(() => {
    const scheduleApi = new ScheduleApi();
    scheduleApi.appsDoctorsApiHandlersAll().then((res) => {
      console.log(res);
    });
  }, []);

  return <div>work</div>;
};
