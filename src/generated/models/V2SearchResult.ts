/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { V2Book } from './V2Book';
import type { V2Doc } from './V2Doc';
export type V2SearchResult = {
    /**
     *
     * ID
     */
    id?: number;
    /**
     *
     * 类型
     * (doc:文档, repo:知识库)
     */
    type?: V2SearchResult.type;
    /**
     *
     * 标题
     * `<em></em>` 高亮关键词
     */
    title?: string;
    /**
     *
     * 摘要
     * `<em></em>` 高亮关键词
     */
    summary?: string;
    /**
     *
     * 访问路径
     */
    url?: string;
    /**
     *
     * 归属信息
     */
    info?: string;
    target?: (V2Doc | V2Book);
};
export namespace V2SearchResult {
    /**
     *
     * 类型
     * (doc:文档, repo:知识库)
     */
    export enum type {
        DOC = 'doc',
        REPO = 'repo',
    }
}

