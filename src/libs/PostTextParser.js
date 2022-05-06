import NetworkCommon from "../common/NetworkCommon"

export default class PostTextParser {

    getTitle(post) {
        return post.slice(post.indexOf('<h') + 4, post.indexOf('</h'))
    }

    getFirstImageLink(post) {
        let ind = post.indexOf('<img') + 10
        if (ind === 9)
            return ''
        return post.slice(ind, post.indexOf(">", ind) - 1)
    }

    getPostPreview(post) {
        let maxPostPreviewLen = 200
        let str = post.slice(post.indexOf('</h') + 5)
        str = str.slice(str.indexOf('<p>') + 3, str.indexOf('</p>'))
        let postLen = (str.length < maxPostPreviewLen) ? str.length : maxPostPreviewLen
        str = str.slice(0, postLen)
        console.log(str);
        return str
    }

    updateImagesPath(post) {
        let host = NetworkCommon.serverHost
        let ind = 0
        while ((ind = post.indexOf('<img', ind)) !== -1) {
            ind += 10
            let origAddr = post.slice(ind, post.indexOf(">", ind) - 1)
            post = post.replace(origAddr, host + origAddr)
        }
        return post
    }

    deleteHostFromPath(post) {
        let host = NetworkCommon.serverHost
        while (post.includes(host)) {
            post = post.replace(host, '')
        }
        return post
    }
}