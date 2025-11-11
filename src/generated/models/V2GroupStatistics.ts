/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type V2GroupStatistics = {
    bizdate?: string;
    /**
     * 统计日期 (YYYYMMDD)
     */
    user_id?: string;
    /**
     * 团队 ID
     */
    organization_id?: string;
    /**
     * 归属空间 ID
     */
    member_count?: string;
    /**
     * 成员数
     */
    collaborator_count?: string;
    /**
     * 协作者数
     */
    day_read_count?: string;
    /**
     * 当日阅读量
     */
    day_write_count?: string;
    /**
     * 当日编辑次数
     */
    write_count?: string;
    /**
     * 编辑次数
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
    like_count?: string;
    /**
     * 点赞量
     */
    like_count_30?: string;
    /**
     * 点赞量 (30天)
     */
    like_count_365?: string;
    /**
     * 点赞量 (一年)
     */
    follow_count?: string;
    /**
     * 关注量
     */
    collect_count?: string;
    /**
     * 收藏量
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
    book_count?: string;
    /**
     * 知识库总数量
     */
    public_book_count?: string;
    /**
     * 公开知识库数量
     */
    private_book_count?: string;
    /**
     * 私密知识库数量
     */
    book_book_count?: string;
    /**
     * 文档知识库数量
     */
    book_resource_count?: string;
    /**
     * 资源知识库数量
     */
    book_design_count?: string;
    /**
     * 图片知识库数量
     */
    book_thread_count?: string;
    /**
     * 话题知识库数量
     */
    data_usage?: string;
    /**
     * 流量使用量
     */
    grains_count?: string;
    /**
     * 当前稻谷数
     */
    grains_count_sum?: string;
    /**
     * 累计获得稻谷数
     */
    grains_count_consume?: string;
    /**
     * 已消耗稻谷数
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

