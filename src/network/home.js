import {instance} from "@/network/request";

export function getHomeAllData(){
    return instance('/api/index')
}
