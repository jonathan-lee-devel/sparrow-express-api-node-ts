import {HttpController} from '../../main/types/http-controller';
import {HttpRequest} from '../../main/types/http-request';
import {GetOrganizationSnippetFunction} from '../types/get-organization-snippet';

export const makeGetOrganizationSnippetController = (
    getOrganizationSnippet: GetOrganizationSnippetFunction,
): HttpController => {
  return async function getOrganizationSnippetController(httpRequest: HttpRequest) {
    const organizationContainer = await getOrganizationSnippet(
        httpRequest.user,
        httpRequest.params.organizationId,
    );
    return {
      httpStatus: organizationContainer.status,
      jsonBody: organizationContainer.data,
    };
  };
};
