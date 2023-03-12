import {User} from '../../main/models/User';
import {StatusDataContainer} from '../../main/dtos/StatusDataContainer';
import {OrganizationMembershipStatusDto} from '../dtos/OrganizationMembershipStatusDto';

export type InviteToJoinOrganizationFunction = (
    requestingUser: User,
    organizationId: string,
    emailToInvite: string,
) => Promise<StatusDataContainer<OrganizationMembershipStatusDto>>;
