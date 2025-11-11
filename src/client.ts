import { OpenAPI } from './generated/core/OpenAPI';
import { UserService } from './generated/services/UserService';
import { GroupService } from './generated/services/GroupService';
import { DocService } from './generated/services/DocService';
import { RepoService } from './generated/services/RepoService';
import { SearchService } from './generated/services/SearchService';
import { StatisticService } from './generated/services/StatisticService';

/**
 * 语雀客户端配置
 */
export interface YuqueClientConfig {
  /**
   * 语雀 API Token
   * 获取方式：https://www.yuque.com/settings/tokens
   */
  token: string;
  
  /**
   * API 基础地址
   * @default 'https://www.yuque.com'
   */
  baseUrl?: string;
  
  /**
   * 自定义请求头
   */
  headers?: Record<string, string>;
}

/**
 * 语雀 API 客户端
 * 
 * @example
 * ```typescript
 * const client = new YuqueClient({
 *   token: 'your-api-token'
 * });
 * 
 * // 获取用户信息
 * const userInfo = await client.user.userApiV2UserInfo();
 * 
 * // 获取团队列表
 * const groups = await client.group.groupApiV2GroupsUserLogin({ login: 'user-login' });
 * ```
 */
export class YuqueClient {
  /**
   * 用户相关 API
   */
  public readonly user = UserService;
  
  /**
   * 团队相关 API
   */
  public readonly group = GroupService;
  
  /**
   * 文档相关 API
   */
  public readonly doc = DocService;
  
  /**
   * 知识库相关 API
   */
  public readonly repo = RepoService;
  
  /**
   * 搜索相关 API
   */
  public readonly search = SearchService;
  
  /**
   * 统计相关 API
   */
  public readonly statistic = StatisticService;

  /**
   * 创建语雀客户端实例
   * @param config 客户端配置
   */
  constructor(config: YuqueClientConfig) {
    // 设置基础 URL
    if (config.baseUrl) {
      OpenAPI.BASE = config.baseUrl;
    }
    
    // 设置认证 token
    OpenAPI.HEADERS = {
      'X-Auth-Token': config.token,
      ...config.headers,
    };
  }
  
  /**
   * 更新配置
   * @param config 新的配置
   */
  public updateConfig(config: Partial<YuqueClientConfig>): void {
    if (config.baseUrl) {
      OpenAPI.BASE = config.baseUrl;
    }
    
    if (config.token || config.headers) {
      OpenAPI.HEADERS = {
        ...(OpenAPI.HEADERS || {}),
        ...(config.token ? { 'X-Auth-Token': config.token } : {}),
        ...(config.headers || {}),
      };
    }
  }
}

