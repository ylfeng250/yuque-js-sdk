/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type V2BookStatistics = {
    bizdate?: string;
    /**
     * 统计日期 (YYYYMMDD)
     */
    book_id?: string;
    /**
     * 知识库 ID
     */
    slug?: string;
    /**
     * 知识库 slug
     */
    name?: string;
    /**
     * 知识库名称
     */
    type?: string;
    /**
     * 知识库类型
     */
    is_public?: string;
    /**
     * 是否公开
     */
    content_updated_at_ms?: string;
    /**
     * 最近更新时间
     */
    user_id?: string;
    /**
     * 知识库归属 ID
     */
    organization_id?: string;
    /**
     * 知识库归属空间 ID
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
    post_count?: string;
    /**
     * 文档数
     */
    word_count?: string;
    /**
     * 字数
     */
    write_count?: string;
    /**
     * 编辑次数
     */
    write_count_30?: string;
    /**
     * 编辑次数 (30天)
     */
    read_count?: string;
    /**
     * 阅读量
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
    watch_count?: string;
    /**
     * 关注量
     */
    watch_count_7?: string;
    /**
     * 关注量 (7天)
     */
    watch_count_30?: string;
    /**
     * 关注量 (30天)
     */
    watch_count_365?: string;
    /**
     * 关注量 (一年)
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
    like_rank_rate?: string;
    /**
     * 知识库点赞数排名
     */
    popularity_30?: string;
    /**
     * 30 天热度
     */
    doc_count?: string;
    /**
     * 文档数量
     */
    sheet_count?: string;
    /**
     * 表格数量
     */
    board_count?: string;
    /**
     * 画板数量
     */
    show_count?: string;
    /**
     * 演示文稿数量
     */
    resource_count?: string;
    /**
     * 资源数量
     */
    artboard_count?: string;
    /**
     * 图集数量
     */
    attachment_count?: string;
    /**
     * 附件数量
     */
    interaction_people_count?: string;
    /**
     * 知识交流人数
     */
    content_count?: string;
    /**
     * 知识财富数
     */
    collaboration_count?: string;
    /**
     * 知识协同次数
     */
    working_hours?: string;
    /**
     * 协同提效时长 (小时)
     */
    baike?: string;
    /**
     * 百科全书卷数
     */
    table_count?: string;
};

