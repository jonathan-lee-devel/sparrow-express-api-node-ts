import {makeCreateDelivery} from './create-delivery';
import {generatedId} from '../../util/id/services';
import {DeliveryModel} from '../models/Delivery';
import {loggerConfig} from '../../main/config/logger/logger-config';
import {OrganizationModel} from '../../organizations/models/Organization';
import {makeGetAssignedDeliveries} from './get-assigned-deliveries';

const logger = loggerConfig();

export const createDelivery = makeCreateDelivery(logger, generatedId, OrganizationModel, DeliveryModel);

export const getAssignedDeliveries = makeGetAssignedDeliveries(logger, DeliveryModel);
