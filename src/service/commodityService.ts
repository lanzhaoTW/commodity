import request, {CommonResponse} from './http/index'


export interface Commodity {
    id: number;
    imageUrl: string;
    name: string;
    description: string;
    price: number;
}


export const getAllCommodities = (): Promise<CommonResponse<Commodity[]>> => {
    return request('get', 'commodity')
}

export const getCommodityDetail = (id: string): Promise<CommonResponse<Commodity>> => {
    return request('get', `commodity/${id}`)
}
