import { HttpService } from "@/domain/services/http-service";
import { HttpClientImpl } from "@/infra/http/http-client";
import { HttpUseCase } from "@/domain/usecases/http-usecase";
import { HttpAxiosImpl } from "@/infra/http/http-axios";
import { HttpClientOptions } from "@/domain/models/http";
import { LoggerImpl } from "@/infra/logger/logger";

export class HttpFactory {
  public static createHttpRequest(httpClientOptions: HttpClientOptions): HttpUseCase {
    const logger = new LoggerImpl();
    const httpClient = new HttpClientImpl();
    const axiosApp = httpClientOptions.axiosInstance;
    const httpAxios = new HttpAxiosImpl(axiosApp);
    return new HttpService(httpClientOptions, axiosApp ? httpAxios : httpClient, logger);
  }
}
