/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { V2SearchResult } from '../models/V2SearchResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SearchService {
    /**
     * 通用搜索
     * 通用搜索
     * GET /api/v2/search
     *
     *
     * - 支持分页, PageSize 固定为 20
     *
     *
     * @param q 搜索关键词
     * @param type 搜索类型
     * (doc:文档, repo:知识库)
     * @param scope 搜索范围, 不填默认为搜索当前用户/团队
     *
     *
     * [例子]
     * ```
     * - 假设:
     * - 团队 URL = https://yuque_domain/group_a
     * - 知识库 URL = https://yuque_domain/group_a/book_x
     * - 则:
     * - 搜索团队里的文档: { type: 'doc', scope: 'group_a' }
     * - 搜索团队里的知识库: { type: 'repo', scope: 'group_a' }
     * - 搜索知识库里的文档: { type: 'doc', scope: 'group_a/book_x' }
     * ```
     * @param page 页码 [分页参数]
     * @param offset 页码, 非偏移量 [分页参数]
     * @param creatorId 仅搜索指定作者 ID [筛选条件]
     * @param creator 仅搜索指定作者 login [筛选条件]
     * @returns any OK
     * @throws ApiError
     */
    public static searchApiV2Search(
        q: string,
        type: 'doc' | 'repo',
        scope?: string,
        page?: number,
        offset?: number,
        creatorId?: number,
        creator?: string,
    ): CancelablePromise<{
        meta?: {
            /**
             * 结果总量
             */
            total?: number;
            /**
             * 页码
             */
            pageNo?: number;
            /**
             * 每页数量
             */
            pageSize?: number;
        };
        data?: Array<V2SearchResult>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/search',
            query: {
                'q': q,
                'type': type,
                'scope': scope,
                'page': page,
                'offset': offset,
                'creatorId': creatorId,
                'creator': creator,
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
