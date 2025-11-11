/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { V2User } from './V2User';
export type V2DocVersion = {
    /**
     *
     * 版本 ID
     */
    id?: number;
    /**
     *
     * 文档 ID
     */
    doc_id?: number;
    /**
     *
     * 文档路径
     */
    slug?: string;
    /**
     *
     * 文档标题
     */
    title?: string;
    /**
     *
     * 发版人 ID
     */
    user_id?: number;
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
};

