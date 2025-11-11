/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { V2Book } from './V2Book';
import type { V2Tag } from './V2Tag';
import type { V2User } from './V2User';
export type V2Doc = {
    /**
     *
     * 文档 ID
     */
    id?: number;
    /**
     *
     * 文档类型
     * (Doc:普通文档, Sheet:表格, Thread:话题, Board:图集, Table:数据表)
     */
    type?: V2Doc.type;
    /**
     *
     * 路径
     */
    slug?: string;
    /**
     *
     * 标题
     */
    title?: string;
    /**
     *
     * 摘要
     */
    description?: string;
    /**
     *
     * 封面
     */
    cover?: string;
    /**
     *
     * 归属用户/团队 ID
     */
    user_id?: number;
    /**
     *
     * 归属知识库 ID
     */
    book_id?: number;
    /**
     *
     * 最后编辑者 ID
     */
    last_editor_id?: number;
    /**
     *
     * 公开性
     * (0:私密, 1:公开, 2:企业内公开)
     */
    public?: V2Doc._public;
    /**
     *
     * 状态
     * (0:草稿, 1:发布)
     */
    status?: string;
    /**
     *
     * 点赞数
     */
    likes_count?: number;
    /**
     *
     * 阅读数
     *
     *
     * - 需要传入 `optional_properties=hits` 获取
     *
     *
     */
    read_count?: number;
    /**
     *
     * 阅读数
     *
     *
     * - 需要传入 `optional_properties=hits` 获取
     *
     *
     * @deprecated
     */
    hits?: number;
    /**
     *
     * 评论数
     */
    comments_count?: number;
    /**
     *
     * 内容字数
     */
    word_count?: number;
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
    /**
     *
     * 内容更新时间
     * 格式: YYYY-MM-DDTHH:mm:ss.sssZ (ISO_8601)
     */
    content_updated_at?: string;
    /**
     *
     * 发布时间
     * 格式: YYYY-MM-DDTHH:mm:ss.sssZ (ISO_8601)
     */
    published_at?: string;
    /**
     *
     * 首次发布时间
     * 格式: YYYY-MM-DDTHH:mm:ss.sssZ (ISO_8601)
     */
    first_published_at?: string;
    book?: V2Book;
    user?: V2User;
    last_editor?: V2User;
    /**
     *
     * 最新已发版本 ID
     *
     *
     * - 需要传入 `optional_properties=latest_version_id` 获取
     *
     *
     */
    latest_version_id?: number;
    tags?: V2Tag;
};
export namespace V2Doc {
    /**
     *
     * 文档类型
     * (Doc:普通文档, Sheet:表格, Thread:话题, Board:图集, Table:数据表)
     */
    export enum type {
        DOC = 'Doc',
        SHEET = 'Sheet',
        THREAD = 'Thread',
        BOARD = 'Board',
        TABLE = 'Table',
    }
    /**
     *
     * 公开性
     * (0:私密, 1:公开, 2:企业内公开)
     */
    export enum _public {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
    }
}

