import {InviteToJoinOrganizationFunction} from '../types/invite-to-join-organization';
import {HttpController} from '../../main/types/http-controller';
import {HttpRequest} from '../../main/types/http-request';

export const makeInviteToJoinOrganizationController = (
    inviteToJoinOrganization: InviteToJoinOrganizationFunction,
): HttpController => {
  return async function inviteToJoinOrganizationController(httpRequest: HttpRequest) {
    const inviteToJoinOrganizationContainer = await inviteToJoinOrganization(
        httpRequest.user,
        httpRequest.params.organizationId,
        httpRequest.body.emailToInvite,
    );
    return {
      httpStatus: inviteToJoinOrganizationContainer.status,
      jsonBody: inviteToJoinOrganizationContainer.data,
    };
  };
};
