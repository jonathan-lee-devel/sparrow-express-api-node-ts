import bunyan from 'bunyan';
import {Model} from 'mongoose';
import {Organization} from '../models/Organization';
import {GetOrganizationsWhereInvolvedFunction} from '../types/get-organizations-where-involved';
import {User} from '../../main/models/User';
import {OrganizationDto} from '../dtos/OrganizationDto';
import {returnInternalServerError} from '../../common/use-cases/status-data-container';

export const makeGetOrganizationsWhereInvolved = (
    logger: bunyan,
    OrganizationModel: Model<Organization>,
): GetOrganizationsWhereInvolvedFunction => {
  return async function getOrganizationsWhereInvolved(
      requestingUser: User,
  ) {
    try {
      logger.info(`GET organizations where user with e-mail: <${requestingUser.email}> involved`);
      const organizationsWhereInvolvedModels: Organization[] = await OrganizationModel.find({
        $or: [
          {administratorEmails: {$all: [requestingUser.email]}},
          {memberEmails: {$all: [requestingUser.email]}},
        ],
      });

      const organizationDtos: OrganizationDto[] = [];
      for (const organizationModel of organizationsWhereInvolvedModels) {
        organizationDtos.push({
          id: organizationModel.id,
          name: organizationModel.name,
          administratorEmails: organizationModel.administratorEmails,
          memberEmails: organizationModel.memberEmails,
        });
      }
      return {
        status: 200,
        data: organizationDtos,
      };
    } catch (err) {
      logger.error(`An error has occurred: ${err}`);
      return returnInternalServerError();
    }
  };
};
