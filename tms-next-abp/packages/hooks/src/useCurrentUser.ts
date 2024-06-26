import { CurrentUserDto } from '@tms_next_abp/proxy';

import { useAppConfig } from './useAppConfig';

export const useCurrentUser = (): CurrentUserDto | undefined => {
    const { data } = useAppConfig();
    return data?.currentUser;
};
