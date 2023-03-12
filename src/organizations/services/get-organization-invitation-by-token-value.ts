import bunyan from 'bunyan';
import {Model} from 'mongoose';
import {OrganizationInvitation} from '../models/OrganizationInvitation';
import {User} from '../../main/models/User';
import {GetOrganizationInvitationByTokenValueFunction} from '../types/get-organization-invitation-by-token-value';
import {returnForbidden, returnInternalServerError, returnNotFound} from '../../common/use-cases/status-data-container';

export const makeGetOrganizationInvitationByTokenValue = (
    logger: bunyan,
    OrganizationInvitationModel: Model<OrganizationInvitation>,
): GetOrganizationInvitationByTokenValueFunction => {
  return async function getOrganizationInvitationByTokenValue(
      requestingUser: User,
      organizationInvitationTokenValue: string,
  ) {
    logger.info(`GET organization invitation by token value: ${organizationInvitationTokenValue}`);
    try {
      const organizationInvitationModel = await OrganizationInvitationModel.findOne(
          {value: organizationInvitationTokenValue}, {__v: 0});
      if (!organizationInvitationModel) {
        return returnNotFound();
      }
      if (requestingUser.email !== organizationInvitationModel.emailToInvite &&
                requestingUser.email !== organizationInvitationModel.requestingUserEmail) {
        return returnForbidden();
      }

      return {
        status: 200,
        data: {
          id: organizationInvitationModel.id,
          organizationId: organizationInvitationModel.organizationId,
          requestingUserEmail: organizationInvitationModel.requestingUserEmail,
          emailToInvite: organizationInvitationModel.emailToInvite,
          isAccepted: organizationInvitationModel.isAccepted,
          expiryDate: organizationInvitationModel.expiryDate,
          value: organizationInvitationModel.value,
        },
      };
    } catch (err) {
      logger.error(`An error has occurred: ${err}`);
      return returnInternalServerError();
    }
  };
};
