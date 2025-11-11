/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type V2MemberStatistics = {
    bizdate?: string;
    /**
     * 统计日期 (YYYYMMDD)
     */
    user_id?: string;
    /**
     * 成员 ID
     */
    group_id?: string;
    /**
     * 团队 ID
     */
    organization_id?: string;
    /**
     * 空间 ID
     */
    write_count?: string;
    /**
     * 编辑次数
     */
    write_count_30?: string;
    /**
     * 编辑次数 (30天)
     */
    write_count_365?: string;
    /**
     * 编辑次数 (一年)
     */
    write_doc_count?: string;
    /**
     * 编辑文档数
     */
    write_doc_count_30?: string;
    /**
     * 编辑文档数 (30天)
     */
    write_doc_count_365?: string;
    /**
     * 编辑文档数 (一年)
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
    like_count_30?: string;
    /**
     * 点赞量 (30天)
     */
    like_count_365?: string;
    /**
     * 点赞量 (一年)
     */
    user?: string;
};

