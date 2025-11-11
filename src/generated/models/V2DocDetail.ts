/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { V2Book } from './V2Book';
import type { V2Tag } from './V2Tag';
import type { V2User } from './V2User';
export type V2DocDetail = {
    /**
     *
     * 文档 ID
     */
    id?: number;
    /**
     *
     * 文档类型
     * (Doc:普通文档, Sheet:表格, Thread:话题, Board:图集, Table:数据表)
     */
    type?: V2DocDetail.type;
    /**
     *
     * 路径
     */
    slug?: string;
    /**
     *
     * 标题
     */
    title?: string;
    /**
     *
     * 摘要
     */
    description?: string;
    /**
     *
     * 封面
     */
    cover?: string;
    /**
     *
     * 归属用户/团队 ID
     */
    user_id?: number;
    /**
     *
     * 归属知识库 ID
     */
    book_id?: number;
    /**
     *
     * 最后编辑者 ID
     */
    last_editor_id?: number;
    /**
     *
     * 内容格式
     * (markdown:Markdown 格式, lake:语雀 Lake 格式, html:HTML 标准格式, lakesheet:语雀表格)
     */
    format?: V2DocDetail.format;
    /**
     *
     * 正文草稿内容
     */
    body_draft?: string;
    /**
     *
     * 正文原始内容
     */
    body?: string;
    /**
     *
     * 表格正文内容
     *
     *
     * 用本字段读取表格内容, 在文档为表格 (sheet) 类型时会返回。
     *
     *
     * 语雀表格 (sheet) 正文格式示例如下, JSON 反序列化后的结构:
     * (注意: 所有项的值均为字符串, 公式项为计算后的值, 日期格式: yyyy-mm-dd HH:MM:SS)
     *
     *
     * ```json
     * {
         * "version": "1.0",
         * "data": [
             * {
                 * "name": "Sheet1",
                 * "index": 0,
                 * "rowCount": 100,
                 * "colCount": 4,
                 * "table": [
                     * ["参数名", "类型", "必填", "默认值"],
                     * ["name", "string", "1", ""],
                     * ["flag", "boolean", "0", "false"]
                     * ]
                     * },
                     * {
                         * "name": "Sheet2",
                         * "index": 0,
                         * "rowCount": 100,
                         * "colCount": 8,
                         * "table": []
                         * }
                         * ]
                         * }
                         * ```
                         *
                         *
                         */
                        body_sheet?: string;
                        /**
                         *
                         * 数据表正文内容, 用本字段读取数据表内容, 在文档为数据表 (Table) 类型时会返回。
                         *
                         *
                         * ```json
                         * {
                             * totalCount: 1000, // 总行数
                             * records: [{
                                 * {
                                     * // values为数组，顺序按meta中的columns顺序排列
                                     * values:[{
                                         * // 复选框，值为true/false
                                         * "value": "true"
                                         * },{
                                             * // 多选框，对应选中的options
                                             * "value": [
                                                 * "AUb7o2",
                                                 * "rkGdKP"
                                                 * ]
                                                 * },{
                                                     * // 评分：0-5
                                                     * "value": "4"
                                                     * }, {
                                                         * // 进度：0-100
                                                         * "value": "34"
                                                         * }, {
                                                             * // 文件
                                                             * "value": [
                                                                 * {
                                                                     * "name": "emails.csv",
                                                                     * "uid": "rc-upload-1722830344900-3",
                                                                     * "src": "https://host/xx.csv",
                                                                     * "size": 148,
                                                                     * "fileKey": "sheet"
                                                                     * }
                                                                     * ]
                                                                     * }, {
                                                                         * "value": "文本"
                                                                         * }, {
                                                                             * // 单选
                                                                             * "value": "waiting"
                                                                             * }, {
                                                                                 * // 日期
                                                                                 * "value": {
                                                                                     * "seconds": 3932799476,
                                                                                     * "text": "2024-08-14",
                                                                                     * "time": "2024-08-14T04:12:13.318Z"
                                                                                     * }
                                                                                     * }, {
                                                                                         * // 用户
                                                                                         * "value": [
                                                                                             * {
                                                                                                 * "id": 1,
                                                                                                 * "name": "txy",
                                                                                                 * "login": "u1",
                                                                                                 * "avatar_url": "https://host/xx_url",
                                                                                                 * "work_id": "",
                                                                                                 * "description": null
                                                                                                 * }
                                                                                                 * ]
                                                                                                 * }, {
                                                                                                     * // 图片
                                                                                                     * "value": [
                                                                                                         * {
                                                                                                             * "name": "test.png",
                                                                                                             * "uid": "rc-upload-1722831237360-3",
                                                                                                             * "src": "https://host/xx.png",
                                                                                                             * "size": 19154,
                                                                                                             * "width": 90,
                                                                                                             * "height": 88
                                                                                                             * }
                                                                                                             * ]
                                                                                                             * }],
                                                                                                             * "createdAt": "2024-08-02T10:14:13.368Z",
                                                                                                             * "updatedAt": "2024-08-05T11:56:01.102Z",
                                                                                                             * }
                                                                                                             * }],
                                                                                                             * pageSize: 100,
                                                                                                             * page: 1,
                                                                                                             * }
                                                                                                             * ```
                                                                                                             */
                                                                                                            body_table?: string;
                                                                                                            /**
                                                                                                             *
                                                                                                             * 正文 HTML 标准格式内容
                                                                                                             */
                                                                                                            body_html?: string;
                                                                                                            /**
                                                                                                             *
                                                                                                             * 正文语雀 Lake 格式内容
                                                                                                             */
                                                                                                            body_lake?: string;
                                                                                                            /**
                                                                                                             *
                                                                                                             * 公开性
                                                                                                             * (0:私密, 1:公开, 2:企业内公开)
                                                                                                             */
                                                                                                            public?: V2DocDetail._public;
                                                                                                            /**
                                                                                                             *
                                                                                                             * 状态
                                                                                                             * (0:草稿, 1:发布)
                                                                                                             */
                                                                                                            status?: string;
                                                                                                            /**
                                                                                                             *
                                                                                                             * 点赞数
                                                                                                             */
                                                                                                            likes_count?: number;
                                                                                                            /**
                                                                                                             *
                                                                                                             * 阅读数
                                                                                                             *
                                                                                                             *
                                                                                                             */
                                                                                                            read_count?: number;
                                                                                                            /**
                                                                                                             *
                                                                                                             * 阅读数
                                                                                                             *
                                                                                                             *
                                                                                                             * @deprecated
                                                                                                             */
                                                                                                            hits?: number;
                                                                                                            /**
                                                                                                             *
                                                                                                             * 评论数
                                                                                                             */
                                                                                                            comments_count?: number;
                                                                                                            /**
                                                                                                             *
                                                                                                             * 内容字数
                                                                                                             */
                                                                                                            word_count?: number;
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
                                                                                                            /**
                                                                                                             *
                                                                                                             * 内容更新时间
                                                                                                             * 格式: YYYY-MM-DDTHH:mm:ss.sssZ (ISO_8601)
                                                                                                             */
                                                                                                            content_updated_at?: string;
                                                                                                            /**
                                                                                                             *
                                                                                                             * 发布时间
                                                                                                             * 格式: YYYY-MM-DDTHH:mm:ss.sssZ (ISO_8601)
                                                                                                             */
                                                                                                            published_at?: string;
                                                                                                            /**
                                                                                                             *
                                                                                                             * 首次发布时间
                                                                                                             * 格式: YYYY-MM-DDTHH:mm:ss.sssZ (ISO_8601)
                                                                                                             */
                                                                                                            first_published_at?: string;
                                                                                                            book?: V2Book;
                                                                                                            user?: V2User;
                                                                                                            creator?: V2User;
                                                                                                            tags?: V2Tag;
                                                                                                            /**
                                                                                                             *
                                                                                                             * 最新已发版本 ID
                                                                                                             *
                                                                                                             *
                                                                                                             */
                                                                                                            latest_version_id?: number;
                                                                                                        };
                                                                                                        export namespace V2DocDetail {
                                                                                                            /**
                                                                                                             *
                                                                                                             * 文档类型
                                                                                                             * (Doc:普通文档, Sheet:表格, Thread:话题, Board:图集, Table:数据表)
                                                                                                             */
                                                                                                            export enum type {
                                                                                                                DOC = 'Doc',
                                                                                                                SHEET = 'Sheet',
                                                                                                                THREAD = 'Thread',
                                                                                                                BOARD = 'Board',
                                                                                                                TABLE = 'Table',
                                                                                                            }
                                                                                                            /**
                                                                                                             *
                                                                                                             * 内容格式
                                                                                                             * (markdown:Markdown 格式, lake:语雀 Lake 格式, html:HTML 标准格式, lakesheet:语雀表格)
                                                                                                             */
                                                                                                            export enum format {
                                                                                                                MARKDOWN = 'markdown',
                                                                                                                LAKE = 'lake',
                                                                                                                HTML = 'html',
                                                                                                                LAKESHEET = 'lakesheet',
                                                                                                            }
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

