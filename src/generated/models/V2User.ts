/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type V2User = {
    /**
     *
     * 用户 ID
     */
    id?: number;
    /**
     *
     * 类型
     * Always 'User'
     * @deprecated
     */
    type?: string;
    /**
     *
     * 登录名
     */
    login?: string;
    /**
     *
     * 昵称
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
     * 被关注的人数
     */
    followers_count?: number;
    /**
     *
     * 关注的人数
     */
    following_count?: number;
    /**
     *
     * 公开性
     * (0:私密, 1:公开, 2:企业内公开)
     */
    public?: V2User._public;
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
export namespace V2User {
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

