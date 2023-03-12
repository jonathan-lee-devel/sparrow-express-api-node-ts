import bunyan from 'bunyan';
import {Model} from 'mongoose';
import {Organization} from '../models/Organization';
import {User} from '../../main/models/User';
import {returnInternalServerError, returnNotFound} from '../../common/use-cases/status-data-container';
import {GetOrganizationSnippetFunction} from '../types/get-organization-snippet';

export const makeGetOrganizationSnippet = (
    logger: bunyan,
    OrganizationModel: Model<Organization>,
): GetOrganizationSnippetFunction => {
  return async function getOrganizationSnippet(
      requestingUser: User,
      organizationId: string,
  ) {
    try {
      const organizationModel = await OrganizationModel.findOne({id: organizationId}, {__v: 0});
      logger.info(`GET organization snippet by ID: ${organizationId}`);
      if (!organizationModel) {
        return returnNotFound();
      }

      return {
        status: 200,
        data: {
          id: organizationModel.id,
          name: organizationModel.name,
        },
      };
    } catch (err) {
      logger.error(`An error has occurred: ${err}`);
      return returnInternalServerError();
    }
  };
};
