import {HttpController} from '../../main/types/http-controller';
import {HttpRequest} from '../../main/types/http-request';
import {GetOrganizationsWhereInvolvedFunction} from '../types/get-organizations-where-involved';

export const makeGetOrganizationsWhereInvolvedController = (
    getOrganizationsWhereInvolved: GetOrganizationsWhereInvolvedFunction,
): HttpController => {
  return async function getOrganizationsWhereInvolvedController(httpRequest: HttpRequest) {
    const organizationsContainer = await getOrganizationsWhereInvolved(
        httpRequest.user,
    );

    return {
      httpStatus: organizationsContainer.status,
      jsonBody: organizationsContainer.data,
    };
  };
};
