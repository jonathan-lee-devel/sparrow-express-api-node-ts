import {makeCreateDeliveryController} from './create-delivery';
import {createDelivery, getAssignedDeliveries} from '../services';
import {makeGetAssignedDeliveriesController} from './get-assigned-deliveries';

export const createDeliveryController = makeCreateDeliveryController(createDelivery);

export const getAssignedDeliveriesController = makeGetAssignedDeliveriesController(getAssignedDeliveries);
