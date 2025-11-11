/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { V2Group } from '../models/V2Group';
import type { V2GroupUser } from '../models/V2GroupUser';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class GroupService {
    /**
     * 获取用户的团队
     * 获取用户的团队
     * GET /api/v2/users/:id/groups
     *
     *
     * - 支持分页, PageSize 固定为 100
     *
     *
     * @param id 用户 login 或 ID
     * @param role 角色 [过滤条件]
     * (0:管理员, 1:成员)
     * @param offset 偏移量 [分页条件]
     * @returns any OK
     * @throws ApiError
     */
    public static groupApiV2UserGroupList(
        id: string,
        role?: 0 | 1,
        offset?: number,
    ): CancelablePromise<{
        data?: V2Group;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/users/{id}/groups',
            path: {
                'id': id,
            },
            query: {
                'role': role,
                'offset': offset,
            },
            errors: {
                400: `请求参数非法`,
                401: `Token/Scope 未通过鉴权`,
                403: `无操作权限`,
                404: `实体未找到`,
                422: `请求参数校验失败`,
                429: `访问频率超限`,
                500: `内部错误`,
            },
        });
    }
    /**
     * 获取团队的成员
     * 获取团队的成员
     * GET /api/v2/groups/:login/users
     *
     *
     * - 支持分页, PageSize 固定为 100
     *
     *
     * @param login 团队 Login or ID
     * @param role 角色 [筛选条件]
     * (0:管理员, 1:成员, 2:只读成员)
     * @param offset 偏移量 [分页条件]
     * @returns any OK
     * @throws ApiError
     */
    public static groupApiV2GroupMemberList(
        login: string,
        role?: 0 | 1 | 2,
        offset?: number,
    ): CancelablePromise<{
        data?: Array<V2GroupUser>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/groups/{login}/users',
            path: {
                'login': login,
            },
            query: {
                'role': role,
                'offset': offset,
            },
            errors: {
                400: `请求参数非法`,
                401: `Token/Scope 未通过鉴权`,
                403: `无操作权限`,
                404: `实体未找到`,
                422: `请求参数校验失败`,
                429: `访问频率超限`,
                500: `内部错误`,
            },
        });
    }
    /**
     * 变更成员
     * 变更成员
     * PUT /api/v2/groups/:login/users/:id
     *
     *
     * @param login 团队 Login or ID
     * @param id 用户 Login or ID
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static groupApiV2GroupMemberUpdate(
        login: string,
        id: string,
        requestBody?: {
            /**
             * 角色
             * (0:管理员, 1:成员, 2:只读成员)
             */
            role?: 0 | 1 | 2;
        },
    ): CancelablePromise<{
        data?: V2GroupUser;
    }> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/groups/{login}/users/{id}',
            path: {
                'login': login,
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `请求参数非法`,
                401: `Token/Scope 未通过鉴权`,
                403: `无操作权限`,
                404: `实体未找到`,
                422: `请求参数校验失败`,
                429: `访问频率超限`,
                500: `内部错误`,
            },
        });
    }
    /**
     * 删除成员
     * 删除成员
     * DELETE /api/v2/groups/:login/users/:id
     * @param login 团队 Login or ID
     * @param id 用户 Login or ID
     * @returns any OK
     * @throws ApiError
     */
    public static groupApiV2GroupMemberDestroy(
        login: string,
        id: string,
    ): CancelablePromise<{
        data?: {
            /**
             * 删除用户 ID
             */
            user_id?: string;
        };
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/groups/{login}/users/{id}',
            path: {
                'login': login,
                'id': id,
            },
            errors: {
                400: `请求参数非法`,
                401: `Token/Scope 未通过鉴权`,
                403: `无操作权限`,
                404: `实体未找到`,
                422: `请求参数校验失败`,
                429: `访问频率超限`,
                500: `内部错误`,
            },
        });
    }
}
