/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { V2User } from './V2User';
export type V2BookDetail = {
    /**
     *
     * 知识库 ID
     */
    id?: number;
    /**
     *
     * 类型
     * (Book:文档, Design:图集, Sheet:表格, Resource:资源)
     */
    type?: string;
    /**
     *
     * 路径
     */
    slug?: string;
    /**
     *
     * 名称
     */
    name?: string;
    /**
     *
     * 归属用户/团队 ID
     */
    user_id?: number;
    /**
     *
     * 简介
     */
    description?: string;
    /**
     *
     * 目录
     */
    toc_yml?: string;
    /**
     *
     * 创建者 ID
     */
    creator_id?: number;
    /**
     *
     * 公开性
     * (0:私密, 1:公开, 2:企业内公开)
     */
    public?: V2BookDetail._public;
    /**
     *
     * 文档数量
     */
    items_count?: number;
    /**
     *
     * 点赞数量
     */
    likes_count?: number;
    /**
     *
     * 订阅数量
     */
    watches_count?: number;
    /**
     *
     * 知识库 META 更新时间
     * 格式: YYYY-MM-DDTHH:mm:ss.sssZ (ISO_8601)
     */
    content_updated_at?: string;
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
    user?: V2User;
    /**
     *
     * 完整路径
     */
    namespace?: string;
};
export namespace V2BookDetail {
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

