import express from 'express';
import {loggerConfig} from '../../main/config/logger/logger-config';
import {configureRoute} from '../../main/routes/configure-route';
import {HttpRequestMethod} from '../../main/enums/http-request-method';
import {makeExpressCallback} from '../../main/express-callbacks/express-callback';
import {getAllNotificationsController, getUnacknowledgedNotificationsController} from '../controllers';

const router = express.Router();

const logger = loggerConfig();

configureRoute(router, HttpRequestMethod.GET, '/unacknowledged', true, [], makeExpressCallback(logger, getUnacknowledgedNotificationsController));

configureRoute(router, HttpRequestMethod.GET, '/all', true, [], makeExpressCallback(logger, getAllNotificationsController));

export {router as NotificationsRouter};
