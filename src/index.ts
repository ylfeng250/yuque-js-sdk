// 导出主客户端类
export { YuqueClient, YuqueClientConfig } from './client';

// 导出所有服务类
export { UserService } from './generated/services/UserService';
export { GroupService } from './generated/services/GroupService';
export { DocService } from './generated/services/DocService';
export { RepoService } from './generated/services/RepoService';
export { SearchService } from './generated/services/SearchService';
export { StatisticService } from './generated/services/StatisticService';

// 导出所有模型类型
export * from './generated/models/V2User';
export * from './generated/models/V2Group';
export * from './generated/models/V2GroupUser';
export * from './generated/models/V2Book';
export * from './generated/models/V2BookDetail';
export * from './generated/models/V2Doc';
export * from './generated/models/V2DocDetail';
export * from './generated/models/V2DocVersion';
export * from './generated/models/V2DocVersionDetail';
export * from './generated/models/V2Tag';
export * from './generated/models/V2TocItem';
export * from './generated/models/V2SearchResult';
export * from './generated/models/V2GroupStatistics';
export * from './generated/models/V2BookStatistics';
export * from './generated/models/V2DocStatistics';
export * from './generated/models/V2MemberStatistics';

// 导出核心类型
export { ApiError } from './generated/core/ApiError';
export { CancelablePromise } from './generated/core/CancelablePromise';
export type { OpenAPIConfig } from './generated/core/OpenAPI';

