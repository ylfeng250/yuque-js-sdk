/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type V2TocItem = {
    /**
     *
     * 节点唯一 ID
     */
    uuid?: string;
    /**
     *
     * 节点类型
     * (DOC:文档, LINK:外链, TITLE:分组)
     */
    type?: V2TocItem.type;
    /**
     *
     * 节点名称
     */
    title?: string;
    /**
     *
     * 节点 URL
     */
    url?: string;
    /**
     *
     * 节点 URL
     * @deprecated
     */
    slug?: string;
    /**
     *
     * 文档 ID
     * @deprecated
     */
    id?: number;
    /**
     *
     * 文档 ID
     */
    doc_id?: number;
    /**
     *
     * 节点层级
     */
    level?: number;
    /**
     *
     * 节点层级
     * @deprecated
     */
    depth?: number;
    /**
     *
     * 是否在新窗口打开
     * (0:当前页打开, 1:新窗口打开)
     */
    open_window?: V2TocItem.open_window;
    /**
     *
     * 是否可见
     * (0:不可见, 1:可见)
     */
    visible?: V2TocItem.visible;
    /**
     *
     * 同级前一个节点 uuid
     */
    prev_uuid?: string;
    /**
     *
     * 同级后一个节点 uuid
     */
    sibling_uuid?: string;
    /**
     *
     * 子级第一个节点 uuid
     */
    child_uuid?: string;
    /**
     *
     * 父级节点 uuid
     */
    parent_uuid?: string;
};
export namespace V2TocItem {
    /**
     *
     * 节点类型
     * (DOC:文档, LINK:外链, TITLE:分组)
     */
    export enum type {
        DOC = 'DOC',
        LINK = 'LINK',
        TITLE = 'TITLE',
    }
    /**
     *
     * 是否在新窗口打开
     * (0:当前页打开, 1:新窗口打开)
     */
    export enum open_window {
        '_0' = 0,
        '_1' = 1,
    }
    /**
     *
     * 是否可见
     * (0:不可见, 1:可见)
     */
    export enum visible {
        '_0' = 0,
        '_1' = 1,
    }
}

