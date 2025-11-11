/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type V2DocStatistics = {
    bizdate?: string;
    /**
     * 统计日期 (YYYYMMDD)
     */
    book_id?: string;
    /**
     * 知识库 ID
     */
    doc_id?: string;
    /**
     * 文档 ID
     */
    slug?: string;
    /**
     * 文档 slug
     */
    title?: string;
    /**
     * 文档标题
     */
    type?: string;
    /**
     * 知识库类型
     */
    is_public?: string;
    /**
     * 是否公开
     */
    created_at?: string;
    /**
     * 创建时间
     */
    content_updated_at?: string;
    /**
     * 最近更新时间
     */
    user_id?: string;
    /**
     * 文档归属 ID
     */
    organization_id?: string;
    /**
     * 文档归属空间 ID
     */
    day_read_count?: string;
    /**
     * 当日阅读量
     */
    day_write_count?: string;
    /**
     * 当日编辑次数
     */
    day_like_count?: string;
    /**
     * 当日点赞量
     */
    word_count?: string;
    /**
     * 字数
     */
    write_count?: string;
    /**
     * 编辑次数
     */
    read_count?: string;
    /**
     * 阅读量
     */
    read_count_7?: string;
    /**
     * 阅读量 (7天)
     */
    read_count_30?: string;
    /**
     * 阅读量 (30天)
     */
    read_count_365?: string;
    /**
     * 阅读量 (一年)
     */
    like_count?: string;
    /**
     * 点赞量
     */
    like_count_7?: string;
    /**
     * 点赞量 (7天)
     */
    like_count_30?: string;
    /**
     * 点赞量 (30天)
     */
    like_count_365?: string;
    /**
     * 点赞量 (一年)
     */
    comment_count?: string;
    /**
     * 评论量
     */
    comment_count_30?: string;
    /**
     * 评论量 (30天)
     */
    comment_count_365?: string;
    /**
     * 评论量 (一年)
     */
    popularity_30?: string;
    /**
     * 30 天热度
     */
    attachment_count?: string;
    /**
     * 附件数量
     */
    user?: string;
};

