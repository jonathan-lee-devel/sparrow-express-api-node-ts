import {User} from '../../main/models/User';
import {StatusDataContainer} from '../../main/dtos/StatusDataContainer';
import {OrganizationSnippetDto} from '../dtos/OrganizationSnippetDto';

export type GetOrganizationSnippetFunction = (
    requestingUser: User,
    organizationId: string,
) => Promise<StatusDataContainer<OrganizationSnippetDto>>;
