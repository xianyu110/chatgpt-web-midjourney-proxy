const {
    createProxyMiddleware
} = require('http-proxy-middleware')

module.exports = (req, res) => {
    let target = ''
    let headers= {}
    
    // 代理目标地址 - 专门处理Gemini API
    if(req.url.startsWith('/openapi')){
        // Support both OpenAI and Google AI endpoints
        const baseUrl = process.env.OPENAI_API_BASE_URL || 'https://api.openai.com';
        target = baseUrl;
        
        // Handle different API providers
        if (baseUrl.includes('googleapis.com') || baseUrl.includes('generativelanguage')) {
            // Google AI API
            headers = {
                'x-goog-api-key': process.env.OPENAI_API_KEY
            }
        } else {
            // OpenAI-compatible API
            headers = {
                'Authorization': 'Bearer ' + process.env.OPENAI_API_KEY
            }
        }
    }
    
    // 创建代理对象并转发请求
    createProxyMiddleware({
        target,
        changeOrigin: true,
        headers,
        pathRewrite: {
            '^/openapi/': '/'
        }
    })(req, res)
}
