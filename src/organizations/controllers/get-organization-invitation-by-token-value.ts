import {GetOrganizationInvitationByTokenValueFunction} from '../types/get-organization-invitation-by-token-value';
import {HttpController} from '../../main/types/http-controller';
import {HttpRequest} from '../../main/types/http-request';

export const makeGetOrganizationInvitationByTokenValueController = (
    getOrganizationInvitationByTokenValue: GetOrganizationInvitationByTokenValueFunction,
): HttpController => {
  return async function getOrganizationInvitationByTokenValueController(httpRequest: HttpRequest) {
    const organizationInvitationContainer = await getOrganizationInvitationByTokenValue(
        httpRequest.user,
        httpRequest.params.organizationInvitationTokenValue,
    );
    return {
      httpStatus: organizationInvitationContainer.status,
      jsonBody: organizationInvitationContainer.data,
    };
  };
};
