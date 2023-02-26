import {User} from '../../main/models/User';
import {StatusDataContainer} from '../../main/dtos/StatusDataContainer';
import {OrganizationDto} from '../dtos/OrganizationDto';

export type GetOrganizationsWhereInvolvedFunction = (
    requestingUser: User,
) => Promise<StatusDataContainer<OrganizationDto[]>>;
