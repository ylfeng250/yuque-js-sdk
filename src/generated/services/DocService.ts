/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { V2Doc } from '../models/V2Doc';
import type { V2DocDetail } from '../models/V2DocDetail';
import type { V2DocVersion } from '../models/V2DocVersion';
import type { V2DocVersionDetail } from '../models/V2DocVersionDetail';
import type { V2TocItem } from '../models/V2TocItem';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DocService {
    /**
     * 获取知识库的文档列表
     * 获取知识库的文档列表
     * GET /api/v2/repos/:book_id/docs
     * GET /api/v2/repos/:group_login/:book_slug/docs
     *
     *
     * @param bookId 知识库 ID
     * @param offset 偏移量 [分页参数]
     * @param limit 每页数量 [分页参数]
     * @param optionalProperties 获取的额外字段, 多个字段以逗号分隔
     *
     *
     * - 注意: 每页数量超过 100 本字段会失效
     *
     *
     * - 支持的字段有:
     * - hits: 文档阅读数
     * - tags: 标签
     * - latest_version_id: 最新已发版本 ID
     *
     *
     * @returns any OK
     * @throws ApiError
     */
    public static docApiV2DocListById(
        bookId: number,
        offset?: number,
        limit: number = 100,
        optionalProperties: string = '',
    ): CancelablePromise<{
        meta?: {
            /**
             * 结果总量
             */
            total?: number;
        };
        data?: Array<V2Doc>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/repos/{book_id}/docs',
            path: {
                'book_id': bookId,
            },
            query: {
                'offset': offset,
                'limit': limit,
                'optional_properties': optionalProperties,
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
     * 创建文档
     * 创建文档
     * POST /api/v2/repos/:book_id/docs
     * POST /api/v2/repos/:group_login/:book_slug/docs
     *
     *
     * - 注意: 创建文档后不会自动添加到目录，需要调用"知识库目录更新接口"更新到目录中
     *
     *
     * @param bookId 知识库 ID
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static docApiV2DocCreateById(
        bookId: number,
        requestBody?: {
            /**
             * 路径
             */
            slug?: string;
            /**
             * 标题
             */
            title?: string;
            /**
             * 公开性
             * (0:私密, 1:公开, 2:企业内公开)
             *
             *
             * - 不填则继承知识库的公开性
             *
             *
             */
            public?: 0 | 1 | 2;
            /**
             * 内容格式
             * (markdown:Markdown 格式, html:HTML 标准格式, lake:语雀 Lake 格式)
             */
            format?: 'markdown' | 'html' | 'lake';
            /**
             * 正文内容
             */
            body: string;
        },
    ): CancelablePromise<{
        data?: V2DocDetail;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/repos/{book_id}/docs',
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
     * 获取文档详情
     * 获取文档详情
     * GET /api/v2/repos/:book_id/docs/:id
     * GET /api/v2/repos/:group_login/:book_slug/docs/:id
     *
     *
     * @param bookId 知识库 ID
     * @param id 文档 ID or 路径
     * @param pageSize 数据表使用，分页大小
     * @param page 数据表使用，页码
     * @returns any OK
     * @throws ApiError
     */
    public static docApiV2DocShowById(
        bookId: number,
        id: string,
        pageSize: number = 100,
        page: number = 1,
    ): CancelablePromise<{
        data?: V2DocDetail;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/repos/{book_id}/docs/{id}',
            path: {
                'book_id': bookId,
                'id': id,
            },
            query: {
                'page_size': pageSize,
                'page': page,
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
     * 更新文档
     * 更新文档
     * PUT /api/v2/repos/:book_id/docs/:id
     * PUT /api/v2/repos/:group_login/:book_slug/docs/:id
     *
     *
     * @param bookId 知识库 ID
     * @param id 文档 ID or 路径
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static docApiV2DocUpdateById(
        bookId: number,
        id: string,
        requestBody?: {
            /**
             * 路径
             */
            slug?: string;
            /**
             * 标题
             */
            title?: string;
            /**
             * 公开性
             * (0:私密, 1:公开, 2:企业内公开)
             */
            public?: 0 | 1 | 2;
            /**
             * 内容格式
             * (markdown:Markdown 格式, html:HTML 标准格式, lake:语雀 Lake 格式)
             */
            format?: 'markdown' | 'html' | 'lake';
            /**
             * 正文内容
             */
            body?: string;
        },
    ): CancelablePromise<{
        data?: V2DocDetail;
    }> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/repos/{book_id}/docs/{id}',
            path: {
                'book_id': bookId,
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
     * 删除文档
     * 删除文档
     * DELETE /api/v2/repos/:book_id/docs/:id
     * DELETE /api/v2/repos/:group_login/:book_slug/docs/:id
     *
     *
     * @param bookId 知识库 ID
     * @param id 文档 ID or 路径
     * @returns any OK
     * @throws ApiError
     */
    public static docApiV2DocDestroyById(
        bookId: number,
        id: string,
    ): CancelablePromise<{
        data?: V2DocDetail;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/repos/{book_id}/docs/{id}',
            path: {
                'book_id': bookId,
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
    /**
     * 获取知识库的文档列表
     * 获取知识库的文档列表
     * GET /api/v2/repos/:book_id/docs
     * GET /api/v2/repos/:group_login/:book_slug/docs
     *
     *
     * @param groupLogin 团队 Login
     * @param bookSlug 知识库路径
     * @param offset 偏移量 [分页参数]
     * @param limit 每页数量 [分页参数]
     * @param optionalProperties 获取的额外字段, 多个字段以逗号分隔
     *
     *
     * - 注意: 每页数量超过 100 本字段会失效
     *
     *
     * - 支持的字段有:
     * - hits: 文档阅读数
     * - tags: 标签
     * - latest_version_id: 最新已发版本 ID
     *
     *
     * @returns any OK
     * @throws ApiError
     */
    public static docApiV2DocList(
        groupLogin: string,
        bookSlug: string,
        offset?: number,
        limit: number = 100,
        optionalProperties: string = '',
    ): CancelablePromise<{
        meta?: {
            /**
             * 结果总量
             */
            total?: number;
        };
        data?: Array<V2Doc>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/repos/{group_login}/{book_slug}/docs',
            path: {
                'group_login': groupLogin,
                'book_slug': bookSlug,
            },
            query: {
                'offset': offset,
                'limit': limit,
                'optional_properties': optionalProperties,
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
     * 创建文档
     * 创建文档
     * POST /api/v2/repos/:book_id/docs
     * POST /api/v2/repos/:group_login/:book_slug/docs
     *
     *
     * - 注意: 创建文档后不会自动添加到目录，需要调用"知识库目录更新接口"更新到目录中
     *
     *
     * @param groupLogin 团队 Login
     * @param bookSlug 知识库路径
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static docApiV2DocCreate(
        groupLogin: string,
        bookSlug: string,
        requestBody?: {
            /**
             * 路径
             */
            slug?: string;
            /**
             * 标题
             */
            title?: string;
            /**
             * 公开性
             * (0:私密, 1:公开, 2:企业内公开)
             *
             *
             * - 不填则继承知识库的公开性
             *
             *
             */
            public?: 0 | 1 | 2;
            /**
             * 内容格式
             * (markdown:Markdown 格式, html:HTML 标准格式, lake:语雀 Lake 格式)
             */
            format?: 'markdown' | 'html' | 'lake';
            /**
             * 正文内容
             */
            body: string;
        },
    ): CancelablePromise<{
        data?: V2DocDetail;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/repos/{group_login}/{book_slug}/docs',
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
     * 获取文档详情
     * 获取文档详情
     * GET /api/v2/repos/:book_id/docs/:id
     * GET /api/v2/repos/:group_login/:book_slug/docs/:id
     *
     *
     * @param groupLogin 团队 Login
     * @param bookSlug 知识库路径
     * @param id 文档 ID or 路径
     * @param pageSize 数据表使用，分页大小
     * @param page 数据表使用，页码
     * @returns any OK
     * @throws ApiError
     */
    public static docApiV2DocShow(
        groupLogin: string,
        bookSlug: string,
        id: string,
        pageSize: number = 100,
        page: number = 1,
    ): CancelablePromise<{
        data?: V2DocDetail;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/repos/{group_login}/{book_slug}/docs/{id}',
            path: {
                'group_login': groupLogin,
                'book_slug': bookSlug,
                'id': id,
            },
            query: {
                'page_size': pageSize,
                'page': page,
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
     * 更新文档
     * 更新文档
     * PUT /api/v2/repos/:book_id/docs/:id
     * PUT /api/v2/repos/:group_login/:book_slug/docs/:id
     *
     *
     * @param groupLogin 团队 Login
     * @param bookSlug 知识库路径
     * @param id 文档 ID or 路径
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static docApiV2DocUpdate(
        groupLogin: string,
        bookSlug: string,
        id: string,
        requestBody?: {
            /**
             * 路径
             */
            slug?: string;
            /**
             * 标题
             */
            title?: string;
            /**
             * 公开性
             * (0:私密, 1:公开, 2:企业内公开)
             */
            public?: 0 | 1 | 2;
            /**
             * 内容格式
             * (markdown:Markdown 格式, html:HTML 标准格式, lake:语雀 Lake 格式)
             */
            format?: 'markdown' | 'html' | 'lake';
            /**
             * 正文内容
             */
            body?: string;
        },
    ): CancelablePromise<{
        data?: V2DocDetail;
    }> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/repos/{group_login}/{book_slug}/docs/{id}',
            path: {
                'group_login': groupLogin,
                'book_slug': bookSlug,
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
     * 删除文档
     * 删除文档
     * DELETE /api/v2/repos/:book_id/docs/:id
     * DELETE /api/v2/repos/:group_login/:book_slug/docs/:id
     *
     *
     * @param groupLogin 团队 Login
     * @param bookSlug 知识库路径
     * @param id 文档 ID or 路径
     * @returns any OK
     * @throws ApiError
     */
    public static docApiV2DocDestroy(
        groupLogin: string,
        bookSlug: string,
        id: string,
    ): CancelablePromise<{
        data?: V2DocDetail;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/repos/{group_login}/{book_slug}/docs/{id}',
            path: {
                'group_login': groupLogin,
                'book_slug': bookSlug,
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
    /**
     * 获取文档历史版本列表
     * 获取文档历史版本列表
     * GET /api/v2/doc_versions
     *
     *
     * - 按时间倒序返回最近 100 个已发布版本
     *
     *
     * @param docId 文档 ID
     * @returns any OK
     * @throws ApiError
     */
    public static docApiV2DocVersionList(
        docId: number,
    ): CancelablePromise<{
        data?: Array<V2DocVersion>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/doc_versions',
            query: {
                'doc_id': docId,
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
     * 获取文档历史版本详情
     * 获取文档历史版本详情
     * GET /api/v2/doc_versions/:id
     *
     *
     * @param id 版本 ID
     * @returns any OK
     * @throws ApiError
     */
    public static docApiV2DocVersionShow(
        id: number,
    ): CancelablePromise<{
        data?: V2DocVersionDetail;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/doc_versions/{id}',
            path: {
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
    /**
     * 获取目录
     * 获取目录
     * GET /api/v2/repos/:book_id/toc
     * GET /api/v2/repos/:group_login/:book_slug/toc
     *
     *
     * @param bookId 知识库 ID
     * @returns any OK
     * @throws ApiError
     */
    public static docApiV2RepoTocShowById(
        bookId: number,
    ): CancelablePromise<{
        data?: Array<V2TocItem>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/repos/{book_id}/toc',
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
     * 更新目录
     * 更新目录
     * PUT /api/v2/repos/:book_id/toc
     * PUT /api/v2/repos/:group_login/:book_slug/toc
     *
     *
     * 字段说明:
     *
     *
     * - 所有场景
     * - 必填字段
     * - action
     * - action_mode
     * - 选填字段
     * - target_uuid
     * - visible
     * - 创建场景
     * - 必填字段
     * - 创建文档节点
     * - type
     * - doc_ids
     * - 创建分组节点
     * - type
     * - title
     * - 创建外链节点
     * - type
     * - title
     * - url
     * - open_window
     * - 移动场景
     * - 必填字段
     * - target_uuid
     * - node_uuid
     * - 编辑场景
     * - 必填字段
     * - node_uuid
     * - 选填字段
     * - type
     * - title
     * - url
     * - open_window
     * - 删除场景
     * - 必填字段
     * - node_uuid
     *
     *
     * @param bookId 知识库 ID
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static docApiV2RepoTocUpdateById(
        bookId: number,
        requestBody?: {
            /**
             * 操作
             * (appendNode:尾插, prependNode:头插, editNode:编辑节点, removeNode:删除节点)
             *
             *
             * - action_mode 必填
             * - 创建场景下不支持同级头插 prependNode
             * - 删除节点不会删除关联文档
             * - 删除节点时: action_mode=sibling (删除当前节点), action_mode=child (删除当前节点及子节点)
             *
             *
             */
            action: 'appendNode' | 'prependNode' | 'editNode' | 'removeNode';
            /**
             * 操作模式
             * (sibling:同级, child:子级)
             */
            action_mode?: 'sibling' | 'child';
            /**
             * 目标节点 UUID, 不填默认为根节点
             *
             *
             * - 获取方式: 调用"获取知识库目录"接口获取
             */
            target_uuid?: string;
            /**
             * 操作节点 UUID [移动/更新/删除必填]
             *
             *
             * - 获取方式: 调用"获取知识库目录"接口获取
             */
            node_uuid?: string;
            /**
             * 文档 ID [创建文档必填]
             * @deprecated
             */
            doc_id?: number;
            /**
             * 文档 ID 数组 [创建文档必填]
             */
            doc_ids?: Array<number>;
            /**
             * 节点类型 [创建必填]
             * (DOC:文档, LINK:外链, TITLE:分组)
             */
            type?: 'DOC' | 'LINK' | 'TITLE';
            /**
             * 节点名称 [创建分组/外链必填]
             */
            title?: string;
            /**
             * 节点 URL [创建外链必填]
             */
            url?: string;
            /**
             * 是否新窗口打开 [外链选填]
             * (0:当前页打开, 1:新窗口打开)
             */
            open_window?: 0 | 1;
            /**
             * 是否可见
             * (0:不可见, 1:可见)
             */
            visible?: 0 | 1;
        },
    ): CancelablePromise<{
        data?: Array<V2TocItem>;
    }> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/repos/{book_id}/toc',
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
     * 获取目录
     * 获取目录
     * GET /api/v2/repos/:book_id/toc
     * GET /api/v2/repos/:group_login/:book_slug/toc
     *
     *
     * @param groupLogin 团队 Login
     * @param bookSlug 知识库路径
     * @returns any OK
     * @throws ApiError
     */
    public static docApiV2RepoTocShow(
        groupLogin: string,
        bookSlug: string,
    ): CancelablePromise<{
        data?: Array<V2TocItem>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/repos/{group_login}/{book_slug}/toc',
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
     * 更新目录
     * 更新目录
     * PUT /api/v2/repos/:book_id/toc
     * PUT /api/v2/repos/:group_login/:book_slug/toc
     *
     *
     * 字段说明:
     *
     *
     * - 所有场景
     * - 必填字段
     * - action
     * - action_mode
     * - 选填字段
     * - target_uuid
     * - visible
     * - 创建场景
     * - 必填字段
     * - 创建文档节点
     * - type
     * - doc_ids
     * - 创建分组节点
     * - type
     * - title
     * - 创建外链节点
     * - type
     * - title
     * - url
     * - open_window
     * - 移动场景
     * - 必填字段
     * - target_uuid
     * - node_uuid
     * - 编辑场景
     * - 必填字段
     * - node_uuid
     * - 选填字段
     * - type
     * - title
     * - url
     * - open_window
     * - 删除场景
     * - 必填字段
     * - node_uuid
     *
     *
     * @param groupLogin 团队 Login
     * @param bookSlug 知识库路径
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static docApiV2RepoTocUpdate(
        groupLogin: string,
        bookSlug: string,
        requestBody?: {
            /**
             * 操作
             * (appendNode:尾插, prependNode:头插, editNode:编辑节点, removeNode:删除节点)
             *
             *
             * - action_mode 必填
             * - 创建场景下不支持同级头插 prependNode
             * - 删除节点不会删除关联文档
             * - 删除节点时: action_mode=sibling (删除当前节点), action_mode=child (删除当前节点及子节点)
             *
             *
             */
            action: 'appendNode' | 'prependNode' | 'editNode' | 'removeNode';
            /**
             * 操作模式
             * (sibling:同级, child:子级)
             */
            action_mode?: 'sibling' | 'child';
            /**
             * 目标节点 UUID, 不填默认为根节点
             *
             *
             * - 获取方式: 调用"获取知识库目录"接口获取
             */
            target_uuid?: string;
            /**
             * 操作节点 UUID [移动/更新/删除必填]
             *
             *
             * - 获取方式: 调用"获取知识库目录"接口获取
             */
            node_uuid?: string;
            /**
             * 文档 ID [创建文档必填]
             * @deprecated
             */
            doc_id?: number;
            /**
             * 文档 ID 数组 [创建文档必填]
             */
            doc_ids?: Array<number>;
            /**
             * 节点类型 [创建必填]
             * (DOC:文档, LINK:外链, TITLE:分组)
             */
            type?: 'DOC' | 'LINK' | 'TITLE';
            /**
             * 节点名称 [创建分组/外链必填]
             */
            title?: string;
            /**
             * 节点 URL [创建外链必填]
             */
            url?: string;
            /**
             * 是否新窗口打开 [外链选填]
             * (0:当前页打开, 1:新窗口打开)
             */
            open_window?: 0 | 1;
            /**
             * 是否可见
             * (0:不可见, 1:可见)
             */
            visible?: 0 | 1;
        },
    ): CancelablePromise<{
        data?: Array<V2TocItem>;
    }> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/repos/{group_login}/{book_slug}/toc',
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
}
