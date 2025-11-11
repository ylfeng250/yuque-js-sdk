/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { V2User } from '../models/V2User';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UserService {
    /**
     * 心跳
     * 心跳
     * GET /api/v2/hello
     * @returns any OK
     * @throws ApiError
     */
    public static userApiV2Hello(): CancelablePromise<{
        data?: {
            /**
             * 欢迎消息
             */
            message?: string;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/hello',
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
     * 获取当前 Token 的用户详情
     * 获取当前 Token 的用户详情
     * GET /api/v2/user
     *
     *
     * @returns any OK
     * @throws ApiError
     */
    public static userApiV2UserInfo(): CancelablePromise<{
        data?: V2User;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/user',
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
