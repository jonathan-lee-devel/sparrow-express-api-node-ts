import {User} from '../../main/models/User';
import {StatusDataContainer} from '../../main/dtos/StatusDataContainer';
import {OrganizationInvitationDto} from '../dtos/OrganizationInvitationDto';

export type GetOrganizationInvitationByTokenValueFunction = (
    requestingUser: User,
    organizationInvitationTokenValue: string,
) => Promise<StatusDataContainer<OrganizationInvitationDto>>;
