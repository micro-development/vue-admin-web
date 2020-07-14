const baseUrl = '/write'
export const add = (data, opts) => {
    return {
        method: 'post',
        url: `${baseUrl}/doc`,
        data,
        opts
    }
}

export const detail = (data, opts) => {
    return {
        method: 'get',
        url: `${baseUrl}/doc/${data.uuid}`,
        data: {},
        opts
    }
}

export const list = (data, opts) => {
    return {
        method: 'get',
        url: `${baseUrl}/doc/list`,
        data,
        opts
    }
}

export const update = (data, opts) => {
    return {
        method: 'patch',
        url: `${baseUrl}/doc/${data.uuid}`,
        data,
        opts
    }
}

export const remove = (data, opts) => {
    return {
        method: 'delete',
        url: `${baseUrl}/doc/${data.uuid}`,
        data,
        opts
    }
}
