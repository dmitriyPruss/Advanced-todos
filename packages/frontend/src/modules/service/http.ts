import axios, { AxiosRequestHeaders, AxiosStatic } from 'axios';
import { IParams, ITodo, IUser, IUserBodyWithNewPassword } from '../common/types';
import { BASE_URL, API } from '../common/consts';
import { STORAGE_KEYS } from '../common/consts/app-keys.const';

type EntityType = IUser | ITodo | IUserBodyWithNewPassword;

interface IConfig {
  headers?: AxiosRequestHeaders;
  data?: EntityType;
  url: string;
  params?: IParams;
}

export default class HttpService {
  constructor(
    private readonly baseUrl: string = BASE_URL,
    private readonly fetchingService: AxiosStatic = axios,
    private readonly apiVersion: string = API
  ) {
    this.baseUrl = baseUrl;
    this.fetchingService = axios;
    this.apiVersion = apiVersion;
  }

  private getFullApiUrl(url: string) {
    return `${this.baseUrl}/${this.apiVersion}/${url}`;
  }

  private populateTokenToHeaderConfig() {
    return {
      Authorization: `Bearer ${localStorage.getItem(STORAGE_KEYS.TOKEN)}`
    };
  }

  private setConfigHeaders(withAuth: boolean, config: IConfig) {
    if (withAuth) {
      config.headers = <AxiosRequestHeaders>{
        ...config.headers,
        ...this.populateTokenToHeaderConfig()
      };
    }
  }

  private extractUrlAndDataFromConfig({ data, url, ...configWithoutDataAndUrl }: IConfig) {
    return configWithoutDataAndUrl;
  }

  async get(config: IConfig, withAuth = true) {
    this.setConfigHeaders(withAuth, config);

    const data = await this.fetchingService.get(
      this.getFullApiUrl(config.url),
      this.extractUrlAndDataFromConfig(config)
    );

    return data;
  }

  async getById(config: IConfig, withAuth = true) {
    this.setConfigHeaders(withAuth, config);

    const data = await this.fetchingService.get(
      this.getFullApiUrl(config.url),
      this.extractUrlAndDataFromConfig(config)
    );

    return data;
  }

  async post(config: IConfig, withAuth = true) {
    this.setConfigHeaders(withAuth, config);

    const data = await this.fetchingService.post(
      this.getFullApiUrl(config.url),
      config.data,
      this.extractUrlAndDataFromConfig(config)
    );

    return data;
  }

  async patch(config: IConfig, withAuth = true) {
    this.setConfigHeaders(withAuth, config);

    const data = await this.fetchingService.patch(
      this.getFullApiUrl(config.url),
      config.data,
      this.extractUrlAndDataFromConfig(config)
    );

    return data;
  }

  async delete(config: IConfig, withAuth = true) {
    this.setConfigHeaders(withAuth, config);

    const data = await this.fetchingService.delete(
      this.getFullApiUrl(config.url),
      this.extractUrlAndDataFromConfig(config)
    );

    return data;
  }
}
