/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { V2BookStatistics } from '../models/V2BookStatistics';
import type { V2DocStatistics } from '../models/V2DocStatistics';
import type { V2GroupStatistics } from '../models/V2GroupStatistics';
import type { V2MemberStatistics } from '../models/V2MemberStatistics';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class StatisticService {
    /**
     * 团队.汇总统计数据
     * 团队.汇总统计数据
     * GET /api/v2/groups/:login/statistics
     *
     *
     * @param login 团队的 Login 或 ID
     * @returns any OK
     * @throws ApiError
     */
    public static statisticApiV2StatisticAll(
        login: string,
    ): CancelablePromise<{
        data?: V2GroupStatistics;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/groups/{login}/statistics',
            path: {
                'login': login,
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
     * 团队.成员统计数据
     * 团队.成员统计数据
     * GET /api/v2/groups/:login/statistics/members
     * @param login 团队的 Login 或 ID
     * @param name 成员名 [过滤条件]
     * @param range 时间范围 [过滤条件]
     * (0:全部, 30:近 30 天, 365:近一年)
     * @param page 页码
     * @param limit 分页数量
     * @param sortField 排序字段
     * @param sortOrder 排序方向
     * @returns any OK
     * @throws ApiError
     */
    public static statisticApiV2StatisticByMembers(
        login: string,
        name?: string,
        range: 0 | 30 | 365 = 0,
        page: number = 1,
        limit: number = 10,
        sortField?: 'write_doc_count' | 'write_count' | 'read_count' | 'like_count',
        sortOrder: 'desc' | 'asc' = 'desc',
    ): CancelablePromise<{
        data?: {
            members?: V2MemberStatistics;
            /**
             * 总数量
             */
            total?: number;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/groups/{login}/statistics/members',
            path: {
                'login': login,
            },
            query: {
                'name': name,
                'range': range,
                'page': page,
                'limit': limit,
                'sortField': sortField,
                'sortOrder': sortOrder,
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
     * 团队.知识库统计数据
     * 团队.知识库统计数据
     * GET /api/v2/groups/:login/statistics/books
     * @param login 团队的 Login 或 ID
     * @param name 知识库名 [过滤条件]
     * @param range 时间范围 [过滤条件]
     * (0:全部, 30:近 30 天, 365:近一年)
     * @param page 页码
     * @param limit 分页数量
     * @param sortField 排序字段
     * @param sortOrder 排序方向
     * @returns any OK
     * @throws ApiError
     */
    public static statisticApiV2StatisticByBooks(
        login: string,
        name?: string,
        range: 0 | 30 | 365 = 0,
        page: number = 1,
        limit: number = 10,
        sortField?: 'content_updated_at_ms' | 'word_count' | 'post_count' | 'read_count' | 'like_count' | 'watch_count' | 'comment_count',
        sortOrder: 'desc' | 'asc' = 'desc',
    ): CancelablePromise<{
        data?: {
            books?: V2BookStatistics;
            /**
             * 总数量
             */
            total?: number;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/groups/{login}/statistics/books',
            path: {
                'login': login,
            },
            query: {
                'name': name,
                'range': range,
                'page': page,
                'limit': limit,
                'sortField': sortField,
                'sortOrder': sortOrder,
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
     * 团队.文档统计数据
     * 团队.文档统计数据
     * GET /api/v2/groups/:login/statistics/docs
     * @param login 团队的 Login 或 ID
     * @param bookId 指定知识库 [过滤条件]
     * @param name 文档名 [过滤条件]
     * @param range 时间范围 [过滤条件]
     * (0:全部, 30:近 30 天, 365:近一年)
     * @param page 页码
     * @param limit 分页数量
     * @param sortField 排序字段
     * @param sortOrder 排序方向
     * @returns any OK
     * @throws ApiError
     */
    public static statisticApiV2StatisticByDocs(
        login: string,
        bookId?: number,
        name?: string,
        range: 0 | 30 | 365 = 0,
        page: number = 1,
        limit: number = 10,
        sortField?: 'content_updated_at' | 'word_count' | 'read_count' | 'like_count' | 'comment_count' | 'created_at',
        sortOrder: 'desc' | 'asc' = 'desc',
    ): CancelablePromise<{
        data?: {
            docs?: V2DocStatistics;
            /**
             * 总数量
             */
            total?: number;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/groups/{login}/statistics/docs',
            path: {
                'login': login,
            },
            query: {
                'bookId': bookId,
                'name': name,
                'range': range,
                'page': page,
                'limit': limit,
                'sortField': sortField,
                'sortOrder': sortOrder,
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
