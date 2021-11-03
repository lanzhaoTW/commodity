import request, {CommonResponse} from './http/index'


export interface CommodityResponse {
    id: number;
    imageUrl: string;
    name: string;
    description: string;
    price: number;
}


export const getAllCommodities = (): Promise<CommonResponse<CommodityResponse[]>> => {
    return request('get', 'commodity')
}

export const getCommodityDetail = (id: string): Promise<CommonResponse<CommodityResponse>> => {
    return request('get', `commodity/${id}`)
}
