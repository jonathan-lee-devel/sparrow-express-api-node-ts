import {makeGetUnacknowledgedNotificationsController} from './get-unacknowldged-notifications';
import {getUnacknowledgedNotifications} from '../services';

export const getUnacknowledgedNotificationsController =
    makeGetUnacknowledgedNotificationsController(getUnacknowledgedNotifications);
