export default function customFetch(url, options = {}) {
    // 默认使用GET方法
    options.method = options.method || 'GET';

    return fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }

            // 检查响应的内容类型
            const contentType = response.headers.get('Content-Type');
            if (contentType && contentType.includes('application/json')) {
                return response.json();
            } else if (contentType && contentType.includes('text/html')) {
                return response.text();
            } else {
                // 其他内容类型的处理方式，根据需要添加
                throw new Error(`Unsupported content type: ${contentType}`);
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            throw error;
        });
}

