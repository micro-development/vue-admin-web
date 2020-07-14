const baseUrl = '/write'
export const add = (data, opts) => {
    return {
        method: 'post',
        url: `${baseUrl}/project`,
        data,
        opts
    }
}

export const detail = (data, opts) => {
    return {
        method: 'get',
        url: `${baseUrl}/project/${data.uuid}`,
        data: {},
        opts
    }
}

export const list = (data, opts) => {
    return {
        method: 'get',
        url: `${baseUrl}/project/list`,
        data,
        opts
    }
}

export const update = (data, opts) => {
    return {
        method: 'patch',
        url: `${baseUrl}/project/${data.uuid}`,
        data,
        opts
    }
}

export const remove = (data, opts) => {
    return {
        method: 'delete',
        url: `${baseUrl}/project/${data.uuid}`,
        data,
        opts
    }
}
