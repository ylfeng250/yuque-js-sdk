/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { V2Book } from '../models/V2Book';
import type { V2BookDetail } from '../models/V2BookDetail';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class RepoService {
    /**
     * 获取知识库列表
     * 获取知识库列表
     * GET /api/v2/groups/:id/repos
     * GET /api/v2/groups/:login/repos
     *
     *
     * GET /api/v2/users/:id/repos
     * GET /api/v2/users/:login/repos
     *
     *
     * @param login 用户/团队的 Login 或 ID
     * @param offset 偏移量 [分页参数]
     * @param limit 每页数量 [分页参数]
     * @param type 类型 [筛选条件]
     * (Book:文档型知识库, Design: 画板型知识库)
     * @returns any OK
     * @throws ApiError
     */
    public static repoApiV2RepoListByGroup(
        login: string,
        offset?: number,
        limit: number = 100,
        type?: 'Book' | 'Design',
    ): CancelablePromise<{
        data?: Array<V2Book>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/groups/{login}/repos',
            path: {
                'login': login,
            },
            query: {
                'offset': offset,
                'limit': limit,
                'type': type,
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
     * 创建知识库
     * 创建知识库
     * POST /api/v2/groups/:id/repos
     * POST /api/v2/groups/:login/repos
     *
     *
     * POST /api/v2/users/:id/repos
     * POST /api/v2/users/:login/repos
     *
     *
     * @param login 用户/团队的 Login 或 ID
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static repoApiV2RepoCreateByGroup(
        login: string,
        requestBody?: {
            /**
             * 名称
             */
            name: string;
            /**
             * 路径
             */
            slug: string;
            /**
             * 简介
             */
            description?: string;
            /**
             * 公开性
             * (0:私密, 1:公开, 2:企业内公开)
             */
            public?: 0 | 1 | 2;
            /**
             * 增强私密性
             * - 将除团队管理员之外的团队成员、团队只读成员也设置为无权限
             */
            enhancedPrivacy?: boolean;
        },
    ): CancelablePromise<{
        data?: V2Book;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/groups/{login}/repos',
            path: {
                'login': login,
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
     * 获取知识库列表
     * 获取知识库列表
     * GET /api/v2/groups/:id/repos
     * GET /api/v2/groups/:login/repos
     *
     *
     * GET /api/v2/users/:id/repos
     * GET /api/v2/users/:login/repos
     *
     *
     * @param login 用户/团队的 Login 或 ID
     * @param offset 偏移量 [分页参数]
     * @param limit 每页数量 [分页参数]
     * @param type 类型 [筛选条件]
     * (Book:文档型知识库, Design: 画板型知识库)
     * @returns any OK
     * @throws ApiError
     */
    public static repoApiV2RepoList(
        login: string,
        offset?: number,
        limit: number = 100,
        type?: 'Book' | 'Design',
    ): CancelablePromise<{
        data?: Array<V2Book>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/users/{login}/repos',
            path: {
                'login': login,
            },
            query: {
                'offset': offset,
                'limit': limit,
                'type': type,
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
     * 创建知识库
     * 创建知识库
     * POST /api/v2/groups/:id/repos
     * POST /api/v2/groups/:login/repos
     *
     *
     * POST /api/v2/users/:id/repos
     * POST /api/v2/users/:login/repos
     *
     *
     * @param login 用户/团队的 Login 或 ID
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static repoApiV2RepoCreate(
        login: string,
        requestBody?: {
            /**
             * 名称
             */
            name: string;
            /**
             * 路径
             */
            slug: string;
            /**
             * 简介
             */
            description?: string;
            /**
             * 公开性
             * (0:私密, 1:公开, 2:企业内公开)
             */
            public?: 0 | 1 | 2;
            /**
             * 增强私密性
             * - 将除团队管理员之外的团队成员、团队只读成员也设置为无权限
             */
            enhancedPrivacy?: boolean;
        },
    ): CancelablePromise<{
        data?: V2Book;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/users/{login}/repos',
            path: {
                'login': login,
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
     * 获取知识库详情
     * 获取知识库详情
     * GET /api/v2/repos/:book_id
     * GET /api/v2/repos/:group_login/:book_slug
     *
     *
     * @param bookId 知识库 ID
     * @returns any OK
     * @throws ApiError
     */
    public static repoApiV2RepoShowById(
        bookId: number,
    ): CancelablePromise<{
        data?: V2BookDetail;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/repos/{book_id}',
            path: {
                'book_id': bookId,
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
     * 更新知识库
     * 更新知识库
     * PUT /api/v2/repos/:book_id
     * PUT /api/v2/repos/:group_login/:book_slug
     *
     *
     * @param bookId 知识库 ID
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static repoApiV2RepoUpdateById(
        bookId: number,
        requestBody?: {
            /**
             * 名称
             */
            name?: string;
            /**
             * 路径
             */
            slug?: string;
            /**
             * 简介
             */
            description?: string;
            /**
             * 公开性
             * (0:私密, 1:公开, 2:企业内公开)
             */
            public?: 0 | 1 | 2;
            /**
             * 目录
             *
             *
             * - 可利用此字段批量更新知识库的目录
             *
             *
             * - 必须是 Markdown 格式, `[名称](文档路径)` 示例:
             * ```markdown
             * - [新手指引]()
             * - [语雀是什么](about)
             * - [常见问题](faq)
             * - [基础功能]()
             * - [工作台](dashboard)
             * - [如何设置自定义路径](nkt888)
             * - [外链](http://www.alipay.com)
             * ```
             *
             *
             */
            toc?: string;
        },
    ): CancelablePromise<{
        data?: V2Book;
    }> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/repos/{book_id}',
            path: {
                'book_id': bookId,
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
     * 删除知识库
     * 删除知识库
     * DELETE /api/v2/repos/:book_id
     * DELETE /api/v2/repos/:group_login/:book_slug
     *
     *
     * @param bookId 知识库 ID
     * @returns any OK
     * @throws ApiError
     */
    public static repoApiV2RepoDestroyById(
        bookId: number,
    ): CancelablePromise<{
        data?: V2Book;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/repos/{book_id}',
            path: {
                'book_id': bookId,
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
     * 获取知识库详情
     * 获取知识库详情
     * GET /api/v2/repos/:book_id
     * GET /api/v2/repos/:group_login/:book_slug
     *
     *
     * @param groupLogin 团队 Login
     * @param bookSlug 知识库路径
     * @returns any OK
     * @throws ApiError
     */
    public static repoApiV2RepoShow(
        groupLogin: string,
        bookSlug: string,
    ): CancelablePromise<{
        data?: V2BookDetail;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/repos/{group_login}/{book_slug}',
            path: {
                'group_login': groupLogin,
                'book_slug': bookSlug,
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
     * 更新知识库
     * 更新知识库
     * PUT /api/v2/repos/:book_id
     * PUT /api/v2/repos/:group_login/:book_slug
     *
     *
     * @param groupLogin 团队 Login
     * @param bookSlug 知识库路径
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static repoApiV2RepoUpdate(
        groupLogin: string,
        bookSlug: string,
        requestBody?: {
            /**
             * 名称
             */
            name?: string;
            /**
             * 路径
             */
            slug?: string;
            /**
             * 简介
             */
            description?: string;
            /**
             * 公开性
             * (0:私密, 1:公开, 2:企业内公开)
             */
            public?: 0 | 1 | 2;
            /**
             * 目录
             *
             *
             * - 可利用此字段批量更新知识库的目录
             *
             *
             * - 必须是 Markdown 格式, `[名称](文档路径)` 示例:
             * ```markdown
             * - [新手指引]()
             * - [语雀是什么](about)
             * - [常见问题](faq)
             * - [基础功能]()
             * - [工作台](dashboard)
             * - [如何设置自定义路径](nkt888)
             * - [外链](http://www.alipay.com)
             * ```
             *
             *
             */
            toc?: string;
        },
    ): CancelablePromise<{
        data?: V2Book;
    }> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/repos/{group_login}/{book_slug}',
            path: {
                'group_login': groupLogin,
                'book_slug': bookSlug,
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
     * 删除知识库
     * 删除知识库
     * DELETE /api/v2/repos/:book_id
     * DELETE /api/v2/repos/:group_login/:book_slug
     *
     *
     * @param groupLogin 团队 Login
     * @param bookSlug 知识库路径
     * @returns any OK
     * @throws ApiError
     */
    public static repoApiV2RepoDestroy(
        groupLogin: string,
        bookSlug: string,
    ): CancelablePromise<{
        data?: V2Book;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/repos/{group_login}/{book_slug}',
            path: {
                'group_login': groupLogin,
                'book_slug': bookSlug,
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
