import {useCallback, useState} from 'react'
import {CommonResponse} from "../service/http";

const useRequest = (requestFunction: () => Promise<CommonResponse<any>>) => {
    const [data, setData] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);

    const execute = useCallback(() => {
        setLoading(true);
        return requestFunction()
            .then((response) => {
                if (response.status === 200) {
                    setData(response.data);
                }

                setLoading(false);
            })
            .finally(() => {
                setLoading(false)
            })

    }, [requestFunction]);

    return { execute, loading, data };

}

export default useRequest

