import {instance} from "@/network/request";

export function getHomeAllData(params){
    return instance('/api/index?'+params)
}
