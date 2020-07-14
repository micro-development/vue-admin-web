const baseUrl = '/write'
export const add = (data, opts) => {
    return {
        method: 'post',
        url: `${baseUrl}/catalog`,
        data,
        opts
    }
}

export const detail = (data, opts) => {
    return {
        method: 'get',
        url: `${baseUrl}/catalog/${data.uuid}`,
        data: {},
        opts
    }
}

export const list = (data, opts) => {
    const projectUuid = data.projectUuid
    delete data.projectUuid
    return {
        method: 'get',
        url: `${baseUrl}/catalog/list/${projectUuid}`,
        data,
        opts
    }
}

export const update = (data, opts) => {
    return {
        method: 'patch',
        url: `${baseUrl}/catalog/${data.uuid}`,
        data,
        opts
    }
}

export const remove = (data, opts) => {
    return {
        method: 'delete',
        url: `${baseUrl}/catalog/${data.uuid}`,
        data,
        opts
    }
}
