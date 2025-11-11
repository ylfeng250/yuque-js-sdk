/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { V2Group } from './V2Group';
import type { V2User } from './V2User';
export type V2GroupUser = {
    /**
     *
     * ID
     */
    id?: number;
    /**
     *
     * 团队 ID
     */
    group_id?: number;
    /**
     *
     * 成员 ID
     */
    user_id?: number;
    /**
     *
     * 成员角色
     * (0:管理员, 1:成员, 2:只读成员)
     */
    role?: V2GroupUser.role;
    /**
     *
     * 创建时间
     * 格式: YYYY-MM-DDTHH:mm:ss.sssZ (ISO_8601)
     */
    created_at?: string;
    /**
     *
     * 更新时间
     * 格式: YYYY-MM-DDTHH:mm:ss.sssZ (ISO_8601)
     */
    updated_at?: string;
    group?: V2Group;
    user?: V2User;
};
export namespace V2GroupUser {
    /**
     *
     * 成员角色
     * (0:管理员, 1:成员, 2:只读成员)
     */
    export enum role {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
    }
}

