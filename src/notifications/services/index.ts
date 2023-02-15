import {loggerConfig} from '../../main/config/logger/logger-config';
import {makeCreateNotification} from './create-notification';
import {generatedId} from '../../util/id/services';
import {NotificationModel} from '../models/Notification';
import {makeGetUnacknowledgedNotifications} from './get-unacknowledged-notifications';

const logger = loggerConfig();

export const createNotification = makeCreateNotification(
    logger,
    generatedId,
    NotificationModel,
);

export const getUnacknowledgedNotifications = makeGetUnacknowledgedNotifications(
    logger,
    NotificationModel,
);
