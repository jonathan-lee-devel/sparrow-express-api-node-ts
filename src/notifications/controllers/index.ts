import {makeGetUnacknowledgedNotificationsController} from './get-unacknowldged-notifications';
import {getAllNotifications, getUnacknowledgedNotifications} from '../services';
import {makeGetAllNotificationsController} from './get-all-notifications';

export const getUnacknowledgedNotificationsController =
    makeGetUnacknowledgedNotificationsController(getUnacknowledgedNotifications);

export const getAllNotificationsController =
    makeGetAllNotificationsController(getAllNotifications);
