const Koa = require('koa');
const cors =  require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const fs = require('fs');
const { execSync } = require("child_process");

const app = new Koa();

app.use(cors());
app.use(bodyParser());

app.use(ctx => {
    const body = ctx.request.body;
    const code = body.code;
    let result = 'execute failed';

    // 将代码保存成本地文件
    fs.writeFileSync('a.js', code, 'utf-8');

    // 使用node执行
    result = execSync(`node ${__dirname}/a.js`, { encoding: 'utf-8' });

    // 返回执行结果
    ctx.response.body = result;
});

app.listen(3000);
