import compose from 'compose-function';
// import { WithRouter } from "./with-router";
import { WithStore } from "./with-store";

// export {WithStore as WithProviders} from './with-store';
export const WithProviders = compose(WithStore);