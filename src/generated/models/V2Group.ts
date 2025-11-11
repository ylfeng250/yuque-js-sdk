/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type V2Group = {
    /**
     *
     * 团队 ID
     */
    id?: number;
    /**
     *
     * 类型
     * Always 'Group'
     * @deprecated
     */
    type?: string;
    /**
     *
     * 路径
     */
    login?: string;
    /**
     *
     * 名称
     */
    name?: string;
    /**
     *
     * 头像
     */
    avatar_url?: string;
    /**
     *
     * 知识库数量
     */
    books_count?: number;
    /**
     *
     * 公开的知识库数量
     */
    public_books_count?: number;
    /**
     *
     * 成员人数
     */
    members_count?: number;
    /**
     *
     * 公开性
     * (0:私密, 1:公开, 2:企业内公开)
     */
    public?: V2Group._public;
    /**
     *
     * 介绍
     */
    description?: string;
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
};
export namespace V2Group {
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

